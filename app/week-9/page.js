import dynamic from "next/dynamic";

// Dynamically import the actual page logic with SSR disabled
const ClientPage = dynamic(() => import("./page-content"), { ssr: false });

export default function Page() {
  return <ClientPage />;
}

