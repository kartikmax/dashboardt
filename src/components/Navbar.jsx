import React from "react";

function Navbar() {
  return (
    <section className="bg-gradient-to-t from-fuchsia-200 to-blue-600">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <button className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Navbar</span>
          </button>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button className="mr-5 hover:text-gray-900">First Link</button>
            <button className="mr-5 hover:text-gray-900">Second Link</button>
            <button className="mr-5 hover:text-gray-900">Third Link</button>
            <button className="mr-5 hover:text-gray-900">Fourth Link</button>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <p className="title-font mb-4 text-2xl text-center">
        Welcome to the corporate sigma
      </p>
      <p className="font-thin text-center my-20 mx-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
        consectetur, voluptatum reiciendis illo aperiam odit non incidunt iusto
        cum asperiores reprehenderit hic ad omnis nihil doloribus inventore
        voluptatibus, ducimus dignissimos. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Magni quibusdam id error voluptatem ipsa
        vel similique consequatur? Saepe maxime, quas ea voluptatum eos,
        deleniti deserunt cum provident dignissimos velit amet.
      </p>
      <div className="text-center py-8">
        <button className="rounded-full bg-green-300 py-4 px-4 drop-shadow-xl  hover:bg-green-500 shadow-green-500 hover:text-white hover:shadow-fuchsia-600">
          visit us to know more
        </button>
      </div>
    </section>
  );
}

export default Navbar;
