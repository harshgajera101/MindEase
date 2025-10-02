import { SignIn } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function LoginSignup() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect path from query params (e.g., /quiz/depression)
  const redirectPath = new URLSearchParams(location.search).get("redirect") || "/";

  // Optional: useEffect to automatically navigate after Clerk sign in
  useEffect(() => {
    // Listen for Clerk session changes or successful sign-in
    // Here, you can use Clerk hooks like `useAuth` or `onSignIn` in the app level
    // For simplicity, we can assume user will sign in and then click "Sign In" button
    // Clerk automatically redirects to this page, so we read redirect query
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf6ec] to-[#f9f7f3] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/signup"
          // After successful sign-in, navigate to redirectPath
          afterSignInUrl={redirectPath}
        />
      </div>
    </div>
  );
}
