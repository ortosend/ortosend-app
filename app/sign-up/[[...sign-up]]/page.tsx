"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{minHeight:"100vh",display:"grid",placeItems:"center"}}>
      <SignUp redirectUrl="/dashboard" />
    </div>
  );
}
