import Head from "next/head";
import Link from "next/link";
import Footer from "../footer";
import Navbar from "../shared/navbar";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold">Events page</h1>
      <div>
        <Link href="">
          <img src="" alt="" />
          <h2 className="text-xl font-bold">Events in London</h2>
        </Link>
        <Link href="">
          <img src="" alt="" />
          <h2 className="text-xl font-bold">Events in San francisco</h2>
        </Link>
        <Link href="">
          <img src="" alt="" />
          <h2 className="text-xl font-bold">Events in Barcelona</h2>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
