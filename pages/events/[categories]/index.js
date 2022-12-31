import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CategoryEvent from "../../../src/components/events/categoryEvent";

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

      <CategoryEvent data={data} pageName={pageName} />
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
