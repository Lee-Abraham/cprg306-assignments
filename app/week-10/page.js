"use client";

import { gitHubSignIn } from "../_utils/auth-context";

export default function Week10LoginPage() {
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      alert("Sign in failed: " + error.message);
    }
  };

  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>
        Shopping List App
      </h1>

      <button
        onClick={handleSignIn}
        style={{
          backgroundColor: "#222",
          color: "white",
          border: "1px solid white",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      >
        Sign in with GitHub
      </button>
    </main>
  );
}
