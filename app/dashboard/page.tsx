import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardRedirect() {
  const { sessionClaims } = auth();
  const role = sessionClaims?.publicMetadata?.role as
    | "cliente"
    | "clinica"
    | "master"
    | undefined;

  if (!role) redirect("/sign-in");

  redirect(`/panel/${role}`);
}
