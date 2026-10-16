import { useEffect, useMemo, useState } from "react";
import { signOut, type User } from "firebase/auth";
import { format, formatDistanceToNow, isToday, startOfDay, subDays } from "date-fns";
import { tr } from "date-fns/locale";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  Archive,
  ArchiveRestore,
  ArrowLeft,
  CalendarDays,
  Inbox,
  Loader2,
  LogOut,
  Mail,
  MailOpen,
  MessageCircle,
  MessageSquareText,
  Phone,
  Search,
  Star,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { auth } from "@/lib/firebase";
import {
  deleteMessage,
  setMessageStarred,
  setMessageStatus,
  subscribeToMessages,
  type ContactMessage,
  type MessageStatus,
} from "@/lib/messages";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PETEKSLogo from "@/components/PETEKSLogo";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type Filter = "all" | "new" | "starred" | "archived";

const FILTERS: { key: Filter; label: string; icon: typeof Inbox }[] = [
  { key: "all", label: "Gelen Kutusu", icon: Inbox },
  { key: "new", label: "Okunmamış", icon: Mail },
  { key: "starred", label: "Yıldızlı", icon: Star },
  { key: "archived", label: "Arşiv", icon: Archive },
];

const toWhatsAppNumber = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("90")) return digits;
  if (digits.startsWith("0")) return `90${digits.slice(1)}`;
  return digits.length === 10 ? `90${digits}` : digits;
};

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toLocaleUpperCase("tr-TR"))
    .join("") || "?";

const fullDate = (d: Date | null) => (d ? format(d, "d MMMM yyyy, HH:mm", { locale: tr }) : "—");
const relDate = (d: Date | null) => (d ? formatDistanceToNow(d, { addSuffix: true, locale: tr }) : "");

const StatCard = ({
  icon: Icon,
  label,
  value,
  hint,
  accent,
}: {
  icon: typeof Inbox;
  label: string;
  value: number;
  hint: string;
  accent?: boolean;
}) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
    <div
      className={cn(
        "mb-4 flex h-10 w-10 items-center justify-center rounded-xl",
        accent ? "bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950" : "bg-white/10 text-amber-300"
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
    <div className="font-heading text-3xl font-bold text-white">{value}</div>
    <div className="mt-1 text-sm text-slate-300">{label}</div>
    <div className="text-xs text-slate-500">{hint}</div>
  </div>
);

const AdminDashboard = ({ user }: { user: User }) => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [toDelete, setToDelete] = useState<ContactMessage | null>(null);
  const [actionError, setActionError] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeToMessages(
      (data) => {
        setMessages(data);
        setLoading(false);
        setLoadError("");
      },
      () => {
        setLoading(false);
        setLoadError("Mesajlar yüklenemedi. Yetkinizi veya bağlantınızı kontrol edin.");
      }
    );
    return unsubscribe;
  }, []);

  const run = async (action: () => Promise<void>) => {
    setActionError("");
    try {
      await action();
    } catch {
      setActionError("İşlem başarısız oldu. Lütfen tekrar deneyin.");
    }
  };

  const counts = useMemo(
    () => ({
      all: messages.filter((m) => m.status !== "archived").length,
      new: messages.filter((m) => m.status === "new").length,
      starred: messages.filter((m) => m.starred && m.status !== "archived").length,
      archived: messages.filter((m) => m.status === "archived").length,
    }),
    [messages]
  );

  const stats = useMemo(() => {
    const weekAgo = subDays(new Date(), 7);
    return {
      total: messages.length,
      unread: counts.new,
      today: messages.filter((m) => m.createdAt && isToday(m.createdAt)).length,
      week: messages.filter((m) => m.createdAt && m.createdAt >= weekAgo).length,
    };
  }, [messages, counts.new]);

  const chartData = useMemo(() => {
    const today = startOfDay(new Date());
    const days = Array.from({ length: 14 }, (_, i) => {
      const day = subDays(today, 13 - i);
      return { key: format(day, "yyyy-MM-dd"), label: format(day, "d MMM", { locale: tr }), count: 0 };
    });
    const index = new Map(days.map((d) => [d.key, d]));
    messages.forEach((m) => {
      if (m.createdAt) {
        const slot = index.get(format(m.createdAt, "yyyy-MM-dd"));
        if (slot) slot.count += 1;
      }
    });
    return days;
  }, [messages]);

  const visible = useMemo(() => {
    const q = search.trim().toLocaleLowerCase("tr-TR");
    return messages.filter((m) => {
      if (filter === "archived" ? m.status !== "archived" : m.status === "archived") return false;
      if (filter === "new" && m.status !== "new") return false;
      if (filter === "starred" && !m.starred) return false;
      if (!q) return true;
      return [m.name, m.email, m.phone, m.subject, m.message].some((v) => v.toLocaleLowerCase("tr-TR").includes(q));
    });
  }, [messages, filter, search]);

  const selected = messages.find((m) => m.id === selectedId) ?? null;

  const openMessage = (m: ContactMessage) => {
    setSelectedId(m.id);
    if (m.status === "new") void run(() => setMessageStatus(m.id, "read"));
  };

  const changeStatus = (m: ContactMessage, status: MessageStatus) => run(() => setMessageStatus(m.id, status));

  const confirmDelete = async () => {
    if (!toDelete) return;
    const target = toDelete;
    setToDelete(null);
    if (selectedId === target.id) setSelectedId(null);
    await run(() => deleteMessage(target.id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="pointer-events-none absolute inset-0 architectural-grid-light opacity-20" />
      <div className="pointer-events-none absolute -top-48 right-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-3xl" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <PETEKSLogo variant="light" size="sm" />
            <span className="hidden rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[11px] uppercase tracking-widest text-amber-300 sm:inline">
              Yönetim Paneli
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-400 md:inline">{user.email}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => void signOut(auth)}
              className="text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <LogOut className="mr-2 h-4 w-4" /> Çıkış
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6">
        <div>
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">
            Hoş geldiniz, <span className="gold-gradient-text">PETEKS</span>
          </h1>
          <p className="mt-1 text-sm text-slate-400">İletişim formundan gelen mesajlar anlık olarak burada görünür.</p>
        </div>

        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={MessageSquareText} label="Toplam Mesaj" value={stats.total} hint="Tüm zamanlar" />
          <StatCard icon={Mail} label="Okunmamış" value={stats.unread} hint="Yanıt bekliyor" accent />
          <StatCard icon={CalendarDays} label="Bugün" value={stats.today} hint="Bugün gelen" />
          <StatCard icon={TrendingUp} label="Son 7 Gün" value={stats.week} hint="Haftalık mesaj" />
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-lg font-semibold">Mesaj Trafiği</h2>
              <p className="text-xs text-slate-500">Son 14 gün</p>
            </div>
          </div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 5, right: 8, left: -24, bottom: 0 }}>
                <defs>
                  <linearGradient id="msgGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="label" tick={{ fill: "#64748b", fontSize: 11 }} tickLine={false} axisLine={false} interval="preserveStartEnd" />
                <YAxis allowDecimals={false} tick={{ fill: "#64748b", fontSize: 11 }} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ stroke: "rgba(251,191,36,0.3)" }}
                  contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fff" }}
                  labelStyle={{ color: "#94a3b8" }}
                  formatter={(v: number) => [v, "Mesaj"]}
                />
                <Area type="monotone" dataKey="count" stroke="#fbbf24" strokeWidth={2} fill="url(#msgGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {actionError && (
          <p role="alert" className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            {actionError}
          </p>
        )}

        <section className="grid gap-4 lg:grid-cols-[220px_minmax(300px,420px)_1fr]">
          <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {FILTERS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={cn(
                  "flex shrink-0 items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-sm transition-colors",
                  filter === key
                    ? "border-amber-400/40 bg-amber-500/10 text-amber-300"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.07]"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4" /> {label}
                </span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">{counts[key]}</span>
              </button>
            ))}
          </nav>

          <div className={cn("rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur", selected && "hidden lg:block")}>
            <div className="border-b border-white/10 p-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Ad, e-posta, telefon veya konu ara..."
                  className="h-10 border-white/10 bg-slate-900/60 pl-9 text-white placeholder:text-slate-500"
                />
              </div>
            </div>
            <div className="max-h-[640px] overflow-y-auto">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="h-6 w-6 animate-spin text-amber-400" />
                </div>
              ) : loadError ? (
                <p className="p-8 text-center text-sm text-red-400">{loadError}</p>
              ) : visible.length === 0 ? (
                <div className="flex flex-col items-center px-6 py-16 text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                    <Inbox className="h-6 w-6 text-slate-500" />
                  </div>
                  <p className="text-sm text-slate-300">
                    {messages.length === 0 ? "Henüz mesaj yok" : "Bu görünümde mesaj bulunamadı"}
                  </p>
                  {messages.length === 0 && (
                    <p className="mt-1 text-xs text-slate-500">İletişim formundan gelen mesajlar burada listelenecek.</p>
                  )}
                </div>
              ) : (
                <ul className="divide-y divide-white/5">
                  {visible.map((m) => (
                    <li key={m.id}>
                      <button
                        onClick={() => openMessage(m)}
                        className={cn(
                          "flex w-full gap-3 px-4 py-3.5 text-left transition-colors hover:bg-white/[0.05]",
                          selectedId === m.id && "bg-amber-500/10"
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                            m.status === "new" ? "bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950" : "bg-white/10 text-slate-300"
                          )}
                        >
                          {initials(m.name)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className={cn("truncate text-sm", m.status === "new" ? "font-semibold text-white" : "text-slate-300")}>
                              {m.name}
                            </span>
                            <span className="shrink-0 text-[11px] text-slate-500">{relDate(m.createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            {m.status === "new" && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />}
                            {m.starred && <Star className="h-3 w-3 shrink-0 fill-amber-400 text-amber-400" />}
                            <span className="truncate text-sm text-slate-200">{m.subject}</span>
                          </div>
                          <p className="truncate text-xs text-slate-500">{m.message}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className={cn("rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur", !selected && "hidden lg:block")}>
            {selected ? (
              <article className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-300 hover:bg-white/10 hover:text-white lg:hidden"
                    onClick={() => setSelectedId(null)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Geri
                  </Button>
                  <div className="ml-auto flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      title={selected.starred ? "Yıldızı kaldır" : "Yıldızla"}
                      onClick={() => run(() => setMessageStarred(selected.id, !selected.starred))}
                      className="text-slate-300 hover:bg-white/10"
                    >
                      <Star className={cn("h-4 w-4", selected.starred && "fill-amber-400 text-amber-400")} />
                    </Button>
                    {selected.status !== "new" && (
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Okunmadı olarak işaretle"
                        onClick={() => changeStatus(selected, "new")}
                        className="text-slate-300 hover:bg-white/10"
                      >
                        <MailOpen className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      title={selected.status === "archived" ? "Arşivden çıkar" : "Arşivle"}
                      onClick={() => changeStatus(selected, selected.status === "archived" ? "read" : "archived")}
                      className="text-slate-300 hover:bg-white/10"
                    >
                      {selected.status === "archived" ? <ArchiveRestore className="h-4 w-4" /> : <Archive className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      title="Sil"
                      onClick={() => setToDelete(selected)}
                      className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex-1 space-y-6 p-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold">{selected.subject}</h3>
                    <p className="mt-1 text-xs text-slate-500">{fullDate(selected.createdAt)}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
                      <div className="text-[11px] uppercase tracking-wider text-slate-500">Gönderen</div>
                      <div className="mt-1 break-words text-sm">{selected.name}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
                      <div className="text-[11px] uppercase tracking-wider text-slate-500">Telefon</div>
                      <a href={`tel:${selected.phone}`} className="mt-1 block break-words text-sm text-amber-300 hover:underline">
                        {selected.phone}
                      </a>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
                      <div className="text-[11px] uppercase tracking-wider text-slate-500">E-posta</div>
                      <a href={`mailto:${selected.email}`} className="mt-1 block break-all text-sm text-amber-300 hover:underline">
                        {selected.email}
                      </a>
                    </div>
                  </div>

                  <div className="whitespace-pre-wrap break-words rounded-xl border border-white/10 bg-slate-900/50 p-5 text-sm leading-relaxed text-slate-200">
                    {selected.message}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-white/10 p-4">
                  <Button asChild className="bg-gradient-to-r from-amber-400 to-amber-600 font-semibold text-slate-950 hover:opacity-90">
                    <a href={`mailto:${selected.email}?subject=${encodeURIComponent(`Re: ${selected.subject}`)}`}>
                      <Mail className="mr-2 h-4 w-4" /> E-posta ile Yanıtla
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    <a href={`https://wa.me/${toWhatsAppNumber(selected.phone)}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    <a href={`tel:${selected.phone}`}>
                      <Phone className="mr-2 h-4 w-4" /> Ara
                    </a>
                  </Button>
                </div>
              </article>
            ) : (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center px-6 text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
                  <MailOpen className="h-7 w-7 text-slate-500" />
                </div>
                <p className="text-sm text-slate-400">Görüntülemek için bir mesaj seçin</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <AlertDialog open={!!toDelete} onOpenChange={(open) => !open && setToDelete(null)}>
        <AlertDialogContent className="border-white/10 bg-slate-900 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Mesaj silinsin mi?</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-400">
              {toDelete?.name} adlı kişinin mesajı kalıcı olarak silinecek. Bu işlem geri alınamaz.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white">
              Vazgeç
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 text-white hover:bg-red-700">
              Sil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboard;
