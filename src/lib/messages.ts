import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  updateDoc,
  query,
  orderBy,
  type Unsubscribe,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export type MessageStatus = "new" | "read" | "archived";

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  status: MessageStatus;
  starred: boolean;
  source: string;
  createdAt: Date | null;
}

export interface NewMessageInput {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const COLLECTION = "messages";

export async function submitContactMessage(input: NewMessageInput): Promise<void> {
  await addDoc(collection(db, COLLECTION), {
    name: input.name.trim(),
    phone: input.phone.trim(),
    email: input.email.trim(),
    subject: input.subject.trim(),
    message: input.message.trim(),
    status: "new",
    starred: false,
    source: "contact-form",
    createdAt: serverTimestamp(),
  });
}

export function subscribeToMessages(
  onData: (messages: ContactMessage[]) => void,
  onError: (error: Error) => void
): Unsubscribe {
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  return onSnapshot(
    q,
    (snapshot) => {
      onData(
        snapshot.docs.map((d) => {
          const data = d.data();
          const created = data.createdAt instanceof Timestamp ? data.createdAt.toDate() : null;
          return {
            id: d.id,
            name: data.name ?? "",
            phone: data.phone ?? "",
            email: data.email ?? "",
            subject: data.subject ?? "",
            message: data.message ?? "",
            status: (data.status as MessageStatus) ?? "new",
            starred: Boolean(data.starred),
            source: data.source ?? "contact-form",
            createdAt: created,
          };
        })
      );
    },
    onError
  );
}

export const setMessageStatus = (id: string, status: MessageStatus) =>
  updateDoc(doc(db, COLLECTION, id), { status });

export const setMessageStarred = (id: string, starred: boolean) =>
  updateDoc(doc(db, COLLECTION, id), { starred });

export const deleteMessage = (id: string) => deleteDoc(doc(db, COLLECTION, id));
