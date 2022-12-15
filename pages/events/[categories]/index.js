import Head from "next/head";
import Link from "next/link";

export default function EventsCategoryPage({ data }) {
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>
      <h1 className="text-3xl font-bold">events in london</h1>
      {data.map((ev) => (
        <div key={ev.id}>
          <Link href={`/events/${ev.city}/${ev.id}`}>
            {/* <img src="" alt="" /> */}
            <h2>event 1</h2>
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
  console.log(context);
  const id = context?.params?.categories;
  console.log(id);
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);
  return {
    props: { data: data },
  };
}
