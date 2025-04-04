import Products from "./Products";
export default function Category() {
    return (
        <>
            <div className="bg-white  h-full py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div className="flex items-center gap-12">
                            {/* <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl text-black">
                                Gallery
                            </h2> */}

                            {/* <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                                This is a section of some simple filler text,
                                also known as placeholder text. It shares some
                                characteristics of a real written text.
                            </p> */}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        {/* <!-- image - start --> */}
                        <a
                            href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                loading="lazy"
                                alt="Photo by Minh Pham"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                VR
                            </span>
                        </a>
                        {/* <!-- image - end -->

            <!-- image - start --> */}
                        <a
                            href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                                loading="lazy"
                                alt="Photo by Magicle"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                Tech
                            </span>
                        </a>
                        {/* <!-- image - end --> */}

                        {/* <!-- image - start --> */}
                        <a
                            href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                                loading="lazy"
                                alt="Photo by Martin Sanchez"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                Dev
                            </span>
                        </a>
                        {/* <!-- image - end --> */}

                        {/* <!-- image - start --> */}
                        <a
                            href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                                loading="lazy"
                                alt="Photo by Lorenzo Herrera"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                Retro
                            </span>
                        </a>
                        {/* <!-- image - end --> */}
                    </div>
                </div>
            </div>
            <Products />

            {/* <section className="overflow-hidden mt-8 bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
                <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                            Latest Shirts
                        </h2>

                        <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Inventore officia corporis quasi doloribus
                            iure architecto quae voluptatum beatae excepturi
                            dolores.
                        </p>

                        <div className="mt-4 sm:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Yours Today
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}
