import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Courses = () => {
  const loaderData = useLoaderData();
  const CourseData = loaderData;
  const [details, setDetails] = useState("");
  return (
    <div>
      <div className='flex '>
        <h1 className='w-1/4'>{details}</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  w-3/4 justify-center items-center'>
          {CourseData.map((crdt) => (
            <Card
              key={crdt.id}
              crdt={crdt}
              details={details}
              setDetails={setDetails}></Card>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Courses;
