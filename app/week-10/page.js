"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handle GitHub Sign In
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="text-center m-24 bg-amber-800 p-24  rounded-2xl">
      {!user ? (
        <>
          <h1 className="text-3xl">Shopping List App</h1>

          <button
            className="mt-4 bg-amber-200 text-black p-3 rounded-3xl hover:bg-amber-400 hover:text-white"
            onClick={handleLogin}
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl">Shopping List App</h1>
          <p className="mt-2">
            Signed in as: {user.displayName || "User"} {user.email}
          </p>
          <br />
          <Link
            className="mt-4 bg-amber-200 text-black p-3 rounded-3xl hover:bg-amber-400 hover:text-white"
            href="/week-10/shopping-list"
          >
            Continue to your Shopping List
          </Link>
          <br />
          <br />
          <button
            className="bg-red-500  text-black rounded-2xl p-2  hover:bg-red-600 hover:text-white"
            onClick={handleLogout}
          >
            Sign out
          </button>
        </>
      )}
    </main>
  );
}
