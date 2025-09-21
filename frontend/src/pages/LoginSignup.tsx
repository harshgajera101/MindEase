import { SignIn, SignUp } from "@clerk/clerk-react";

export default function LoginSignup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf6ec] to-[#f9f7f3] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Clerk Authentication UI */}
        <SignIn routing="path" path="/login" signUpUrl="/signup" />
        {/* If you want to test SignUp instead, uncomment this and remove SignIn above */}
        {/* <SignUp routing="path" path="/signup" signInUrl="/login" /> */}
      </div>
    </div>
  );
}
