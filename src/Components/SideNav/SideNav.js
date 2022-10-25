import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = ({ cr }) => {
  const [id, setId] = useState();
  const { logo, name, time, number, teacher, Extra, task } = cr;
  console.log(name, number);
  return (
    <div>
      <li>
        <Link
          to={`/courses/${number}`}
          class='block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600'>
          <div className='flex'>
            <img
              alt='Developer'
              src={logo}
              class='h-16 w-16 rounded-full object-cover'
            />
            <strong class='font-medium text-white ml-5 mt-4'>{name}</strong>
          </div>

          <p class='mt-1 text-xs font-medium text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            consequuntur deleniti, unde ab ut in!
          </p>
        </Link>
      </li>
    </div>
  );
};

export default SideNav;
