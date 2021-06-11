import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="w-full h-full md:block flex items-center justify-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
    </div>
  );
}
