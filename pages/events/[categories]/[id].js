import Image from "next/image";

export default function EventPage({ data }) {
  // console.log(data);
  return (
    <div>
      <h1 className="text-3xl font-bold">Our single event page</h1>
      <div>
        <Image src={data.image} width={500} height={300} alt={data.title} />
        <h1>
          {data.title} - {data.city}
        </h1>
        <p>
          {data.description} - {data.date}
        </p>
      </div>
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
