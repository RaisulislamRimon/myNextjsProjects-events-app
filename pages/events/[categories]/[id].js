import Head from "next/head";
import Image from "next/image";
import SingleEvent from "../../../src/components/events/single-event";

export default function EventPage({ data }) {
  // console.log(data);
  return (
    <div>
      <Head>
        <title>Event</title>
      </Head>

      <SingleEvent data={data} />
    </div>
  );
}

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const { allEvents } = data;
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        id: path.id,
        categories: path.city,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const id = context?.params?.id;
  const data = await import("/data/data.json");
  const { allEvents } = data;
  const eventData = allEvents.find((ev) => ev.id === id);
  // console.log(eventData);
  return {
    props: {
      data: eventData,
    },
  };
}
