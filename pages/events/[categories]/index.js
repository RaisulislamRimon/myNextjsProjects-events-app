import Head from "next/head";
import Link from "next/link";

export default function EventsCategoryPage() {
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>
      <h1 className="text-3xl font-bold">events in london</h1>
      <Link href="/events/london/event1">event 1</Link>
      <a href="/events/event2">event 2</a>
      <a href="/events/event3">event 3</a>
      <a href="/events/event4">event 4</a>
      <a href="/events/event5">event 5</a>
      <a href="/events/event6">event 6</a>
    </div>
  );
}
