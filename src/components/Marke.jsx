function Marker(){
  return(
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl text-bg-neutral-900">About Magic Blinds</h2>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Mission</h3>
                <p className="mt-4 text-gray-600">
                Our mission is to offer blinds of the highest quality, providing comfort and style to our customers.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Vision</h3>
                <p className="mt-4 text-gray-600">
                To be the leading company in the blinds market, recognized for our innovation and commitment to customer satisfaction.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Values</h3>
                <p className="mt-4 text-gray-600">
                Integrity, quality, innovation and customer service are the pillars that guide all our actions.
                </p>
              </div>

              <a
                href="#"
                className="mt-8 block rounded-lg border border-transparent bg-gradient-to-r from-neutral-500 to-neutral-500 px-6 py-2 text-base font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-600"
              >
                Get Started Today
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* iconos para la pagina*/}
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Quality</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                We offer the best quality of products for our customers.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  {/* Icono para la pagina */}
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Innovation</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  {/* Icono para la pagina */}
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Customer Service</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};


export default Marker;
