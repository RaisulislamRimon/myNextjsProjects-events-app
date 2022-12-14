import Head from "next/head";

export default function EventsCategoryPage() {
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>
      <h1 className="text-3xl font-bold">events in london</h1>
      <a href="/events/event1">event 1</a>
      <a href="/events/event2">event 2</a>
      <a href="/events/event3">event 3</a>
      <a href="/events/event4">event 4</a>
      <a href="/events/event5">event 5</a>
      <a href="/events/event6">event 6</a>
    </div>
  );
}
