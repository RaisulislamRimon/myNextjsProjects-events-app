import Head from "next/head";
import AllEvents from "../../src/components/events/events-page";

export default function EventsPage({ data }) {
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>

      <AllEvents data={data} />
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
