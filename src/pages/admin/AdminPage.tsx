import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { auth, ADMIN_EMAIL } from "@/lib/firebase";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

const AdminPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);
    document.title = "Yönetim Paneli | PETEKS";
    return () => {
      document.head.removeChild(robots);
    };
  }, []);

  useEffect(
    () =>
      onAuthStateChanged(auth, (u) => {
        setUser(u);
        setReady(true);
      }),
    []
  );

  useEffect(() => {
    if (user && user.email !== ADMIN_EMAIL) {
      void signOut(auth);
    }
  }, [user]);

  if (!ready) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
      </div>
    );
  }

  if (!user || user.email !== ADMIN_EMAIL) return <AdminLogin />;
  return <AdminDashboard user={user} />;
};

export default AdminPage;
