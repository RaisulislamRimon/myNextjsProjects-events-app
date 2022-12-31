import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryEvent = ({ data, pageName }) => {
  return (
    <div>
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
    </div>
  );
};

export default CategoryEvent;
<h1></h1>;
