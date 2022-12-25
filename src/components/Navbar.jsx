import React from "react";

function Navbar() {
  return (
    <section>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <button class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Navbar</span>
          </button>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button class="mr-5 hover:text-gray-900">First Link</button>
            <button class="mr-5 hover:text-gray-900">Second Link</button>
            <button class="mr-5 hover:text-gray-900">Third Link</button>
            <button class="mr-5 hover:text-gray-900">Fourth Link</button>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <p className="font-thin text-2xl  text-center">
        Welcome to the corporate sigma
      </p>
      <p className="font-thin text-center my-20 mx-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, consectetur, voluptatum reiciendis illo aperiam odit non incidunt iusto cum asperiores reprehenderit hic ad omnis nihil doloribus inventore voluptatibus, ducimus dignissimos.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam id error voluptatem ipsa vel similique consequatur? Saepe maxime, quas ea voluptatum eos, deleniti deserunt cum provident dignissimos velit amet.
      </p>
    </section>
  );
}

export default Navbar;
