import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Courses = () => {
  const loaderData = useLoaderData();
  const QuizData = loaderData;
  return (
    <div>
      <div className='flex '>
        <h1 className='w-1/4'>hello</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  w-3/4 justify-center items-center'>
          {QuizData.map((quizdt) => (
            <Card key={quizdt.id} quizdt={quizdt}>
              {" "}
              hello
            </Card>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Courses;
