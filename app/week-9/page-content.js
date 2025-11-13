'use client';

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function PageContent() {
  // Access user, login, and logout from Auth Context
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

  // Page layout
  return (
    <main className="text-center m-24 bg-amber-800 p-24  rounded-2xl">
      {!user ? (
        <>
          <h1 className="text-3xl">Welcome to the Shopping List App</h1>
          <p className="mt-5">Please log in using your GitHub account to continue.</p>
          <button className="mt-4 bg-amber-200 text-black p-3 rounded-3xl hover:bg-amber-400 hover:text-white" onClick={handleLogin}>Login with GitHub</button>
        </>
      ) : (
        <>
          <h1 className="text-3xl">Welcome, {user.displayName || "User"}!</h1>
          <p className="mt-2">Email: {user.email}</p>
          <br/>
          <Link className="mt-4 bg-amber-200 text-black p-3 rounded-3xl hover:bg-amber-400 hover:text-white" href="/week-9/shopping-list">
            Go to your Shopping List
          </Link>
          <br/><br/>
          <button className="bg-red-500  text-black rounded-2xl p-2  hover:bg-red-600 hover:text-white" onClick={handleLogout}>Logout</button>
        </>
      )}
    </main>
  );
}