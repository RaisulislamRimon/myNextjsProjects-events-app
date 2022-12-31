import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage({ data }) {
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>

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
      </div>
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
