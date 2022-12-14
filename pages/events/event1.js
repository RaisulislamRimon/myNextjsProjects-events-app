import Head from "next/head";
import Footer from "../footer";
import Navbar from "../shared/navbar";

const Page = () => {
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
};

export default Page;
