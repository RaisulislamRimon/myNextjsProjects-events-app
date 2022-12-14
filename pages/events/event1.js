import Head from "next/head";
import Footer from "../footer";
import Navbar from "../shared/navbar";

export default function Event1() {
  return (
    <div>
      <Head>
        <title>event1 page</title>
      </Head>

      <Navbar />

      <h1 className="text-3xl font-bold">event1 page</h1>

      <Footer />
    </div>
  );
}
