import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Courses = () => {
  const loaderData = useLoaderData();
  const CourseData = loaderData;
  const [details, setDetails] = useState("");
  const [duration, setDuration] = useState("");
  const [exam, setExam] = useState("");
  const [instructor, setInstructor] = useState("");
  const [bonus, setBonus] = useState("");
  const [id, setId] = useState();
  return (
    <div>
      <div className='flex '>
        {/* <h1 className='w-1/4'>{details}</h1> */}
        <article class='rounded-xl border border-gray-700 bg-gray-800 p-4 w-1/4'>
          <div class='flex items-center'>
            <img
              alt='Developer'
              src='https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
              class='h-16 w-16 rounded-full object-cover'
            />

            <div class='ml-3'>
              <h3 class='text-lg font-medium text-white'>{details}</h3>

              <div class='flow-root'></div>
            </div>
          </div>

          <ul class='mt-4 space-y-2'>
            <li>
              <a
                href='#'
                class='block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600'>
                <strong class='font-medium text-white'>
                  Overview of {details}
                </strong>

                <p class='mt-1 text-xs font-medium text-gray-300'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime consequuntur deleniti, unde ab ut in!
                </p>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600'>
                <strong class='font-medium text-white'>
                  Course Duration : {duration} months
                </strong>

                <p class='mt-1 text-xs font-medium text-gray-300'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime consequuntur deleniti, unde ab ut in!
                </p>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600'>
                <strong class='font-medium text-white'>Prerequisites</strong>

                <p class='mt-1 text-xs font-medium text-gray-300'>
                  Basic Logic Building
                </p>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600'>
                <strong class='font-medium text-white'>Instructor</strong>

                <p class='mt-1 text-xs font-medium text-gray-300'>
                  {instructor}
                </p>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600'>
                <strong class='font-medium text-white'>Assignments</strong>

                <p class='mt-1 text-xs font-medium text-gray-300'>{exam}</p>
              </a>
            </li>

            <li>
              <Link
                to={`/courses/${id}`}
                class='block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600'>
                <strong class='font-medium text-white'>Bonus Content</strong>

                <p class='mt-1 text-xs font-medium text-gray-300'>{bonus}</p>
              </Link>
            </li>
          </ul>
        </article>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  w-3/4 justify-center items-center'>
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
        </div>{" "}
      </div>
    </div>
  );
};

export default Courses;
