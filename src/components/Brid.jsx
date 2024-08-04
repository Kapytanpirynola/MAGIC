function Brid() {
  return (
    <div>
      <section className="relative bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/70"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right bg-gradient-to-r from-gray-500/40 to-gray-700/40 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Comodidad en tu
              <strong className="block font-extrabold text-gray-300"> hogar para siempre </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              Tecnología que se adapta a tu espacio, junto a la magia del confort en tus manos.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="block rounded-lg border border-transparent bg-gradient-to-r from-neutral-500 to-neutral-500 px-6 py-2 text-base font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-600"
              >
                Empezar
              </a>

              <a
                href="#"
                className="block rounded-lg border border-transparent bg-gradient-to-r from-neutral-500 to-neutral-500 px-6 py-2 text-base font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-neutral-600 hover:to-neutral-600"
              >
                Mas
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Brid;
