// import Dashboard from "./pages/dashboard/index";
// import LoginPage from "@/app/login/page";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/login">Login</Link>
        <br />
        <br />
        <br />
        <Link href="/dashboard">Dashbord</Link>
      </div>
    </>
  );
}
