"use client";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello {user.firstName} {user.lastName}, Welcome to Family Ties Your email
      is {user.emailAddresses[0].emailAddress}
    </main>
  );
}
