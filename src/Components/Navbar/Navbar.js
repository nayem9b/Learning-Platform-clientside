import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import navicon from "../../Images/icons8-polymer-96.png";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <div class='px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div class='relative  flex items-center justify-between'>
          <Link
            to='/'
            aria-label='Company'
            title='Company'
            class='inline-flex items-center'>
            <img className='w-10 h-15' src={navicon} alt=''></img>

            <span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              Web Smasher
            </span>
          </Link>
          <ul class='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <a
                href='/'
                aria-label='Our product'
                title='Our product'
                class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                FAQ
              </a>
            </li>
            <li>
              <a
                href='/'
                aria-label='Our product'
                title='Our product'
                class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                Features
              </a>
            </li>
            <li>
              <Link
                to='/courses'
                aria-label='Product pricing'
                title='Product pricing'
                class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                Courses
              </Link>
            </li>
            <li>
              <a
                href='/'
                aria-label='About us'
                title='About us'
                class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                Blogs
              </a>
            </li>
            {user ? (
              <div className='avatar'>
                <div className='w-10 rounded-full'>
                  {user.photoURL ? (
                    <img src={user.photoURL} title={user.displayName} />
                  ) : (
                    <img
                      src=' https://media.istockphoto.com/photos/positive-millennial-black-man-student-with-books-on-yellow-picture-id1369136607?b=1&k=20&m=1369136607&s=170667a&w=0&h=ENhIBRRkb8bDG6eqAFWEWg_UPljzF6t-Z9h3Ju7088k='
                      title={user.displayName}></img>
                  )}
                </div>
              </div>
            ) : (
              <></>
            )}
            {/* <div className='avatar'>
            <div className='w-10 rounded-full'>
              <img src={user.photoURL} />
            </div>
          </div> */}

            {user ? (
              <li>
                <Link
                  onClick={handleLogout}
                  to='/'
                  class='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                  aria-label='Log out'
                  title='Log out'>
                  Log out
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to='/login'
                    class='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                    aria-label='Sign In'
                    title='Sign In'>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to='/register'
                    class='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                    aria-label='Sign up'
                    title='Sign up'>
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div class='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              class='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}>
              <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class='absolute top-0 left-0 w-full'>
                <div class='p-5 bg-white border rounded shadow-sm'>
                  <div class='flex items-center justify-between mb-4'>
                    <div>
                      <a
                        href='/'
                        aria-label='Company'
                        title='Company'
                        class='inline-flex items-center'>
                        <svg
                          class='w-8 text-deep-purple-accent-400'
                          viewBox='0 0 24 24'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeMiterlimit='10'
                          stroke='currentColor'
                          fill='none'>
                          <rect x='3' y='1' width='7' height='12' />
                          <rect x='3' y='17' width='7' height='6' />
                          <rect x='14' y='1' width='7' height='6' />
                          <rect x='14' y='11' width='7' height='12' />
                        </svg>
                        <span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        class='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}>
                        <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class='space-y-4'>
                      <li>
                        <a
                          href='/'
                          aria-label='Our product'
                          title='Our product'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                          FAQ
                        </a>
                      </li>
                      <li>
                        <Link
                          to='/courses'
                          aria-label='courses'
                          title='Our product'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blogs'
                          aria-label='Product pricing'
                          title='Product pricing'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <a
                          href='/about_us'
                          aria-label='About us'
                          title='About us'
                          class=' font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                          About us
                        </a>
                      </li>
                      <li>
                        <Link
                          to='/register'
                          class='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                          aria-label='Sign up'
                          title='Sign up'>
                          Sign up
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/login'
                          class='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                          aria-label='Sign in'
                          title='Sign in'>
                          Sign in
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
