import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../src/components/footer/footer";
import Header from "../../src/components/header/header";

export default function EventsPage({ data }) {
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>

      <Header></Header>

      <h1 className="text-3xl font-bold">Events page</h1>

      <div>
        {data.map((ev) => (
          <div>
            <Link href={`events/${ev.id}`}>
              <Image src={ev.image} alt={ev.title} width={200} height={100} />
              <h2 className="text-xl font-bold">{ev.title}</h2>
            </Link>
          </div>
        ))}
        {/* <Link href="">
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
        </Link> */}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  // console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
