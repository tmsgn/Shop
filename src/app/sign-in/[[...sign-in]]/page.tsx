import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return <div>
    <div className="flex items-center justify-center px-4">
      <SignIn />
    </div>
  </div>
}