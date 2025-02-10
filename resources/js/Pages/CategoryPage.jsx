import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
export default function CategoryPage({ related_product }) {
    return (
        <>
            <NavBar />
            <aside className="w-64 p-4 fixed bg-white border rounded-lg shadow-md">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="text-black">Filter by</span>
                </h2>

                <div className="mt-4">
                    <button className="flex justify-between w-full text-sm font-medium text-gray-700">
                        Shipping Option
                        <svg
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>

                <div className="mt-4">
                    <button className="flex justify-between w-full text-sm font-medium text-gray-700">
                        Availability
                        <svg
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Types */}
                <div className="mt-4">
                    <button className="flex justify-between w-full text-sm font-medium text-gray-700">
                        Types
                        <svg
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>

                <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700">
                        Discount
                    </h3>
                    <div className="mt-2 space-y-2">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="text-sm text-gray-700">
                                20% or more
                            </span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                                checked
                            />
                            <span className="text-sm text-gray-700">
                                30% or more
                            </span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="text-sm text-gray-700">
                                50% or more
                            </span>
                        </label>
                    </div>
                </div>

                <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700">
                        Category
                    </h3>
                    <div className="mt-2 space-y-2">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="text-sm text-gray-700">
                                Grocery{" "}
                                <span className="text-gray-500">(42+)</span>
                            </span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="text-sm text-gray-700">
                                Phone{" "}
                                <span className="text-gray-500">(32+)</span>
                            </span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="text-sm text-gray-700">
                                Electronic{" "}
                                <span className="text-gray-500">(8+)</span>
                            </span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                                checked
                            />
                            <span className="text-sm text-gray-700">
                                T.V. & Mobile{" "}
                                <span className="text-gray-500">(11+)</span>
                            </span>
                        </label>
                    </div>
                </div>

                <div className="mt-4">
                    <button className="flex justify-between w-full text-sm font-medium text-gray-700">
                        Year
                        <svg
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>
            </aside>

            <div class="p-4 sm:ml-64 mt-20">
                <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                    {related_product &&
                        related_product.data.map((product) => {
                            return (
                                <div className="rounded-lg bg-white p-2 ">
                                    <div className="h-56 w-full">
                                        <a href={`/product/${product.id}`}>
                                            <img
                                                className="mx-auto h-full  dark:hidden"
                                                src={product.productImage}
                                                alt=""
                                            />
                                            <img
                                                className="mx-auto hidden h-full object-cover w-full  dark:block"
                                                src={product.productImage}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="pt-6">
                                        <div className="mb-4 flex items-center justify-between gap-4">
                                            <span className="me-2 rounded px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:text-primary-300"></span>

                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    type="button"
                                                    data-tooltip-target="tooltip-quick-look"
                                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    <span className="sr-only">
                                                        {" "}
                                                        Quick look{" "}
                                                    </span>
                                                    <svg
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                                        />
                                                        <path
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                        />
                                                    </svg>
                                                </button>
                                                <div
                                                    id="tooltip-quick-look"
                                                    role="tooltip"
                                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                                    data-popper-placement="top"
                                                >
                                                    Quick look
                                                    <div
                                                        className="tooltip-arrow"
                                                        data-popper-arrow=""
                                                    ></div>
                                                </div>

                                                <button
                                                    type="button"
                                                    data-tooltip-target="tooltip-add-to-favorites"
                                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    <span className="sr-only">
                                                        {" "}
                                                        Add to Favorites{" "}
                                                    </span>
                                                    <svg
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                                        />
                                                    </svg>
                                                </button>
                                                <div
                                                    id="tooltip-add-to-favorites"
                                                    role="tooltip"
                                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                                    data-popper-placement="top"
                                                >
                                                    Add to favorites
                                                    <div
                                                        className="tooltip-arrow"
                                                        data-popper-arrow=""
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>

                                        <a
                                            href={`/product/${product.id}`}
                                            className="text-md font-semibold leading-tight hover:underline text-black"
                                        >
                                            {product.productName}
                                        </a>

                                        <div className="mt-2 flex items-center gap-2">
                                            <div className="flex items-center">
                                                <svg
                                                    className="h-4 w-4 text-yellow-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                </svg>

                                                <svg
                                                    className="h-4 w-4 text-yellow-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                </svg>

                                                <svg
                                                    className="h-4 w-4 text-yellow-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                </svg>

                                                <svg
                                                    className="h-4 w-4 text-yellow-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                </svg>

                                                <svg
                                                    className="h-4 w-4 text-yellow-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                </svg>
                                            </div>

                                            <p className="text-sm font-medium  text-black">
                                                5.0
                                            </p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between gap-4">
                                            <p className="text-lg font-extrabold leading-tight  text-black">
                                                {product.productPrice} ETB
                                            </p>

                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-lg bg-primary-700 px-3 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                onClick={(e) => {
                                                    submit(e, product.id);
                                                }}
                                            >
                                                <svg
                                                    className="-ms-2 me-2 h-5 w-5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                                    />
                                                </svg>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
            <Footer />
        </>
    );
}
