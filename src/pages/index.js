import Sidebar from "components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter </title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto" >
        <Sidebar />
        {/*feed */}
        {/* widgets*/}
        {/*modal */}
      </main>
    </div>
  )
}