import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = ({ data }) => {
  return (
    <div>
      <main>
        {data.map((ev) => (
          <div key={ev.id}>
            <Link href={`/events/${ev.id}`}>
              <Image src={ev.image} alt={ev.title} width={200} height={100} />
              <h2 className="text-3xl font-bold">{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          </div>
        ))}
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        {/* <Link href="/events/london">
          <img src="" alt="" />
          <h2 className="text-3xl font-bold">Events in London</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            eius distinctio odio amet sequi excepturi dicta nemo, cum dolorem
            iure incidunt, esse earum delectus optio consequuntur assumenda
            voluptates omnis est.
          </p>
        </Link>
        <Link href="/events/sanfran">
          <img src="" alt="" />
          <h2 className="text-3xl font-bold">Events in San francisco</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            eius distinctio odio amet sequi excepturi dicta nemo, cum dolorem
            iure incidunt, esse earum delectus optio consequuntur assumenda
            voluptates omnis est.
          </p>
        </Link>
        <Link href="/events/barcelona">
          <img src="" alt="" />
          <h2 className="text-3xl font-bold">Events in Barcelona</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            eius distinctio odio amet sequi excepturi dicta nemo, cum dolorem
            iure incidunt, esse earum delectus optio consequuntur assumenda
            voluptates omnis est.
          </p>
        </Link> */}
      </main>
    </div>
  );
};

export default HomePage;
