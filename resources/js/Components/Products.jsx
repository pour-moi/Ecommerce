import { router } from "@inertiajs/react";
export default function Products({ products }) {
    const category = ["Electronics", "Groceries", "Furniture", "Cosmetics"];

    const submit = (e, product_id) => {
        e.preventDefault();
        router.post("/cart", { product_id });
    };

    return (
        <section className="py-8 antialiased bg-white md:py-12">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                    <div>
                        <h1 className="mt-3 text-xl font-semibold text-black sm:text-2xl">
                            {category.map((cat, catIndex) => {
                                return (
                                    <div key={catIndex}>
                                        <h2 className="text-2xl font-bold mt-6 mb-6">
                                            {cat}
                                        </h2>
                                        <div className="grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                                            {/* Map the products for the current category */}
                                            {products[catIndex] &&
                                                products[catIndex].map(
                                                    (product) => (
                                                        <div
                                                            key={product.id}
                                                            className="rounded-lg bg-white p-2"
                                                        >
                                                            <div className="h-56 w-full">
                                                                <a
                                                                    href={`/product/${product.id}`}
                                                                >
                                                                    <img
                                                                        className="mx-auto h-full dark:hidden"
                                                                        src={
                                                                            product.productImage
                                                                        }
                                                                        alt=""
                                                                    />
                                                                    <img
                                                                        className="mx-auto hidden h-full object-cover w-full dark:block"
                                                                        src={
                                                                            product.productImage
                                                                        }
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="pt-6">
                                                                <a
                                                                    href={`/product/${product.id}`}
                                                                    className="text-lg font-semibold leading-tight hover:underline text-black"
                                                                >
                                                                    {
                                                                        product.productName
                                                                    }
                                                                </a>
                                                                <div className="mt-4 flex items-center justify-between gap-4">
                                                                    <p className="text-2xl font-extrabold leading-tight text-black">
                                                                        {
                                                                            product.productPrice
                                                                        }{" "}
                                                                        ETB
                                                                    </p>
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            submit(
                                                                                e,
                                                                                product.id
                                                                            );
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
                                                                        Add to
                                                                        cart
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                );
                            })}
                        </h1>
                    </div>
                </div>

                <div className="w-full text-center">
                    <button
                        type="button"
                        className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >
                        Show more
                    </button>
                </div>
            </div>
        </section>
    );
}
