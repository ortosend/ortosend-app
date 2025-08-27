"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{minHeight:"100vh",display:"grid",placeItems:"center"}}>
      <SignIn redirectUrl="/dashboard" />
    </div>
  );
}
