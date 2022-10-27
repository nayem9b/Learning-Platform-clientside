import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ cr }) => {
  const { logo, name, number, teacher, price } = cr;
  console.log(name, number);
  return (
    <div>
      <li>
        <Link
          to={`/courses/${number}`}
          class='block h-full rounded-lg border border-white p-4 hover:border-pink-600'>
          <div className='flex'>
            <img
              alt='Developer'
              src={logo}
              class='h-16 w-16 rounded-full object-cover'
            />
            <strong class='font-medium  ml-5 mt-4'>{name}</strong>
          </div>

          <p class='mt-1 text-sm font-medium '>{teacher}</p>
          <p class='mt-1 text-xs font-medium '>{price}</p>
        </Link>
      </li>
    </div>
  );
};

export default SideNav;
