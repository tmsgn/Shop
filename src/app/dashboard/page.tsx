'use client'
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'

export default function Dashboard() {
  const { user } = useUser();

  if (!user) {
    return (
      <div>
        <SignedOut>
          <div>Please sign in to access the dashboard.</div>
        </SignedOut>
      </div>
    )
  }

  return (
    <div>
      <SignedIn>
        <h1>Dashboard</h1>
        <UserButton />
        <p>Welcome to your dashboard{user && `, ${user.firstName}`}!</p>
      </SignedIn>
      <SignedOut>
        <div>Please sign in to access the dashboard.</div>
      </SignedOut>
    </div>
  )
}