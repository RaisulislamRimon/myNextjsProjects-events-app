import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../src/components/footer/footer";
import Header from "../../../src/components/header/header";

export default function EventsCategoryPage({ data, pageName }) {
  // console.log(data[0]?.city);
  // console.log(`pageName : ${pageName}`);
  // console.log(`data : ${data}`);
  return (
    <div>
      <Head>
        {/* <title>Events in {pageName}</title> */}
        {/* <title>Events in {data[0]?.city}</title> */}
        <title>Events</title>
      </Head>
      <Header />
      <h1 className="text-3xl font-bold">events in {pageName}</h1>
      {data.map((ev) => (
        <div key={ev.id}>
          <Link href={`/events/${ev.city}/${ev.id}`}>
            {/* <img src="" alt="" /> */}
            <Image src={ev.image} width={300} height={300} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        </div>
      ))}
      {/* <Link href="/events/london/event1">
        <img src="" alt="" />
        <h2>event 1</h2>
      </Link>
      <a href="/events/event2">event 2</a>
      <a href="/events/event3">event 3</a>
      <a href="/events/event4">event 4</a>
      <a href="/events/event5">event 5</a>
      <a href="/events/event6">event 6</a> */}
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        categories: ev.id.toString(),
      },
    };
  });
  // console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const id = context?.params?.categories;
  // console.log(id);
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  // console.log(data);
  return {
    props: { data: data, pageName: id },
  };
}
