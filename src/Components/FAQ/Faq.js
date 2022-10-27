import React from "react";

const Faq = () => {
  return (
    <div>
      <div class='space-y-4'>
        <details class='group rounded-lg bg-gray-50 p-6' open>
          <summary class='flex cursor-pointer items-center justify-between'>
            <h2 class='font-medium text-gray-900'>What is cors?</h2>

            <span class='relative ml-1.5 h-5 w-5 flex-shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p class='mt-4 leading-relaxed text-gray-700'>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </details>

        <details class='group rounded-lg bg-gray-50 p-6'>
          <summary class='flex cursor-pointer items-center justify-between'>
            <h2 class='font-medium text-gray-900'>
              What is Node? How does Node work?
            </h2>

            <span class='relative ml-1.5 h-5 w-5 flex-shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='absolute inset-0 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='absolute inset-0 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p class='mt-4 leading-relaxed text-gray-700'>
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. Working of Node.js: Node.js
            accepts the request from the clients and sends the response, while
            working with the request node.js handles them with a single thread.
            To operate I/O operations or requests node.js use the concept of
            threads. Thread is a sequence of instructions that the server needs
            to perform. It runs parallel on the server to provide the
            information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
          </p>
        </details>
        <details class='group rounded-lg bg-gray-50 p-6'>
          <summary class='flex cursor-pointer items-center justify-between'>
            <h2 class='font-medium text-gray-900'>
              Why are you using Firebase? What other options do you have to
              implement authentication?
            </h2>

            <span class='relative ml-1.5 h-5 w-5 flex-shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='absolute inset-0 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='absolute inset-0 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p class='mt-4 leading-relaxed text-gray-700'>
            Firebase Authentication aims to make building secure authentication
            systems easy, while improving the sign-in and onboarding experience
            for end users. It provides an end-to-end identity solution,
            supporting email and password accounts, phone auth, and Google,
            Twitter, Facebook, and GitHub login, and more. <br />
            There are other options beside firebase authentication. These are :
            <ul>
              {" "}
              <li>MongoDB</li>
              <li>Oracle Database</li>
              <li>Amazon Redshift</li>
              <li>DataStax Enterprise</li>
              <li>Db2</li>
            </ul>
          </p>
        </details>
        <details class='group rounded-lg bg-gray-50 p-6'>
          <summary class='flex cursor-pointer items-center justify-between'>
            <h2 class='font-medium text-gray-900'>
              How does the private route work?
            </h2>

            <span class='relative ml-1.5 h-5 w-5 flex-shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='absolute inset-0 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='absolute inset-0 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p class='mt-4 leading-relaxed text-gray-700'>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faq;
