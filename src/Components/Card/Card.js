import React from "react";
import { Link } from "react-router-dom";

const Card = ({ crdt }) => {
  const { logo, number, price } = crdt;

  return (
    <div>
      <Link to={`/courses/${number}`} class='group relative block bg-black'>
        <img
          alt=''
          src={logo}
          class='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
        />

        <div class='relative  rounded-3xl p-8'>
          <p class='text-sm font-medium uppercase tracking-widest text-pink-500'>
            Course
          </p>

          <p class='text-2xl font-bold text-white'>{crdt.name}</p>

          <div class='mt-64'>
            <div class='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
              <p class='text-base text-white'>{price} $</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
