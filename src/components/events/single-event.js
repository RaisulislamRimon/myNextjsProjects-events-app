import Image from "next/image";
import React from "react";

const SingleEvent = ({ data }) => {
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

        <input type="email" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default SingleEvent;
