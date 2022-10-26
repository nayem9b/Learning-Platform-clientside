import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import SideNav from "../SideNav/SideNav";

const Courses = () => {
  const loaderData = useLoaderData();
  const CourseData = loaderData;
  const [details, setDetails] = useState("");
  const [duration, setDuration] = useState("");
  const [exam, setExam] = useState("");
  const [instructor, setInstructor] = useState("");
  const [bonus, setBonus] = useState("");
  const [id, setId] = useState();
  console.log(CourseData);
  return (
    <div>
      <div className='lg:flex sm:block md:flex'>
        <article class='rounded-xl border border-none  p-4 lg:w-1/4'>
          <div class='flex items-center'>
            <h1 className='text-3xl'>Categories</h1>

            <div class='ml-3'>
              <h3 class='text-lg font-medium '>{details}</h3>

              <div class='flow-root'></div>
            </div>
          </div>

          <ul class='mt-4 space-y-2'>
            {CourseData.map((cr) => (
              <SideNav cr={cr}></SideNav>
            ))}
          </ul>
        </article>
        <div className='lg:ml-3 sm:ml-0 lg:gap-4 gap-y-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  lg:w-3/4  items-center'>
          {CourseData.map((crdt) => (
            <Card
              key={crdt.number}
              crdt={crdt}
              details={details}
              setDetails={setDetails}
              duration={duration}
              setDuration={setDuration}
              bonus={bonus}
              setBonus={setBonus}
              instructor={instructor}
              setInstructor={setInstructor}
              exam={exam}
              setExam={setExam}
              id={id}
              setId={setId}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
