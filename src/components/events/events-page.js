import Image from "next/image";
import Link from "next/link";

export default function AllEvents({ data }) {
  return (
    <div>
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
