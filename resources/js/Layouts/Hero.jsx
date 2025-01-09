export default function Hero() {
    return (
        <>
            <div class="grid md:grid-cols-3 gap-6 min-h-[164px] py-8 p-16 bg-gradient-to-r from-blue-700 to-blue-400 font-sans overflow-hidden mt-6">
                <div class="md:col-span-2">
                    <h1 class="text-3xl font-bold text-white">
                        Welcome to ReadymadeUI!
                    </h1>
                    <p class="text-base text-gray-200 mt-4">
                        Best tailwind css readymade UI plateform
                    </p>

                    <button
                        type="button"
                        class="py-3 px-6 text-sm font-semibold bg-white text-blue-600 hover:bg-slate-100 rounded-md mt-8"
                    >
                        Get Started
                    </button>
                </div>

                <div class="relative max-md:hidden">
                    <img
                        src="https://readymadeui.com/readymadeui_banner2.webp"
                        alt="Banner Image"
                        class="w-full right-4 top-[-13px] md:absolute skew-x-[-16deg] rotate-2 object-cover"
                    />
                </div>
            </div>
            {/* <div className="bg-white">
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:py-48 lg:py-4">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                        <div className="text-center">
                            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                Data to enrich your online business
                            </h1>
                            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a
                                    href="#"
                                    className="text-sm/6 font-semibold text-gray-900"
                                >
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
