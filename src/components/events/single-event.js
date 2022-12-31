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

        <input
          type="email"
          style={{
            backgroundColor: "white",
            padding: "10px 15px",
            color: "white",
            borderRadius: "5px 0 0 5px",
            border: "1px solid tomato",
          }}
        />
        <button
          style={{
            backgroundColor: "orange",
            padding: "10px 15px",
            color: "white",
            borderRadius: " 0 5px 5px 0",
            border: "1px solid orange",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SingleEvent;
