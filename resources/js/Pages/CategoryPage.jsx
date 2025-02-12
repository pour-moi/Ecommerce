import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
import { useForm } from "@inertiajs/react";
export default function CategoryPage({ related_product }) {
    return (
        <>
            <NavBar />
            <div className="flex">
                <div class="bg-white mt-24">
                    <div>
                        <div
                            class="relative z-40 lg:hidden"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div
                                class="fixed inset-0 bg-black/25"
                                aria-hidden="true"
                            ></div>
                            <div class="fixed inset-0 z-40 flex">
                                {/* <!-- */}

                                <div class="relative ml-auto /flex size-full max-w-xs flex-col overflow-y-auto /bg-white py-4 pb-12 shadow-xl">
                                    <div class="flex items-center justify-between px-4">
                                        <h2 class="text-lg font-medium text-gray-900">
                                            Filters
                                        </h2>
                                        <button
                                            type="button"
                                            class="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        >
                                            <span class="sr-only">
                                                Close menu
                                            </span>
                                            <svg
                                                class="size-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                data-slot="icon"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18 18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* <!-- Filters --> */}
                                    <form class="mt-4 border-t border-gray-200">
                                        <h3 class="sr-only">Categories</h3>
                                        <ul
                                            role="list"
                                            class="px-2 py-3 font-medium text-gray-900"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-2 py-3"
                                                >
                                                    Totes
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-2 py-3"
                                                >
                                                    Backpacks
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-2 py-3"
                                                >
                                                    Travel Bags
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-2 py-3"
                                                >
                                                    Hip Bags
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-2 py-3"
                                                >
                                                    Laptop Sleeves
                                                </a>
                                            </li>
                                        </ul>

                                        <div class="border-t border-gray-200 px-4 py-6">
                                            <h3 class="-mx-2 -my-3 flow-root">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button
                                                    type="button"
                                                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                                    aria-controls="filter-section-mobile-0"
                                                    aria-expanded="false"
                                                >
                                                    <span class="font-medium text-gray-900">
                                                        Color
                                                    </span>
                                                    <span class="ml-6 flex items-center">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div
                                                class="pt-6"
                                                id="filter-section-mobile-0"
                                            >
                                                <div class="space-y-6">
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-color-0"
                                                                    name="color[]"
                                                                    value="white"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-color-0"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            White
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-color-1"
                                                                    name="color[]"
                                                                    value="beige"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-color-1"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            Beige
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-color-2"
                                                                    name="color[]"
                                                                    value="blue"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-color-2"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            Blue
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-color-3"
                                                                    name="color[]"
                                                                    value="brown"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-color-3"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            Brown
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-color-4"
                                                                    name="color[]"
                                                                    value="green"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-color-4"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            Green
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-color-5"
                                                                    name="color[]"
                                                                    value="purple"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-color-5"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            Purple
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-t border-gray-200 px-4 py-6">
                                            <h3 class="-mx-2 -my-3 flow-root">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button
                                                    type="button"
                                                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                                    aria-controls="filter-section-mobile-1"
                                                    aria-expanded="false"
                                                >
                                                    <span class="font-medium text-gray-900">
                                                        Category
                                                    </span>
                                                    <span class="ml-6 flex items-center">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div
                                                class="pt-6"
                                                id="filter-section-mobile-1"
                                            >
                                                <div class="space-y-6">
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-category-0"
                                                                    name="category[]"
                                                                    value="new-arrivals"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-category-0"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            New Arrivals
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-category-1"
                                                                    name="category[]"
                                                                    value="sale"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-category-1"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            Sale
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-category-2"
                                                                    name="category[]"
                                                                    value="travel"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-category-2"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            Travel
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-category-3"
                                                                    name="category[]"
                                                                    value="organization"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-category-3"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            Organization
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-category-4"
                                                                    name="category[]"
                                                                    value="accessories"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-category-4"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            Accessories
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-t border-gray-200 px-4 py-6">
                                            <h3 class="-mx-2 -my-3 flow-root">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button
                                                    type="button"
                                                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                                    aria-controls="filter-section-mobile-2"
                                                    aria-expanded="false"
                                                >
                                                    <span class="font-medium text-gray-900">
                                                        Size
                                                    </span>
                                                    <span class="ml-6 flex items-center">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div
                                                class="pt-6"
                                                id="filter-section-mobile-2"
                                            >
                                                <div class="space-y-6">
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-size-0"
                                                                    name="size[]"
                                                                    value="2l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-size-0"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            2L
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-size-1"
                                                                    name="size[]"
                                                                    value="6l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-size-1"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            6L
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-size-2"
                                                                    name="size[]"
                                                                    value="12l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-size-2"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            12L
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-size-3"
                                                                    name="size[]"
                                                                    value="18l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-size-3"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            18L
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-size-4"
                                                                    name="size[]"
                                                                    value="20l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-size-4"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            20L
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-mobile-size-5"
                                                                    name="size[]"
                                                                    value="40l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-mobile-size-5"
                                                            class="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            40L
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <main class="mx-auto w-64 px-4 sm:px-6 lg:px-8">
                            <section
                                aria-labelledby="products-heading"
                                class="pt-6 pb-24"
                            >
                                <h2 id="products-heading" class="sr-only">
                                    Products
                                </h2>

                                <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                    {/* <!-- Filters --> */}
                                    <form class="hidden lg:block">
                                        <h3 class="sr-only">Categories</h3>
                                        <ul
                                            role="list"
                                            class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 w-64"
                                        >
                                            <li>
                                                <a href="#">Totes</a>
                                            </li>
                                            <li>
                                                <a href="#">Backpacks</a>
                                            </li>
                                            <li>
                                                <a href="#">Travel Bags</a>
                                            </li>
                                            <li>
                                                <a href="#">Hip Bags</a>
                                            </li>
                                            <li>
                                                <a href="#">Laptop Sleeves</a>
                                            </li>
                                        </ul>

                                        <div class="border-b border-gray-200 py-6 w-64">
                                            <h3 class="-my-3 flow-root">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button
                                                    type="button"
                                                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                                    aria-controls="filter-section-0"
                                                    aria-expanded="false"
                                                >
                                                    <span class="font-medium text-gray-900">
                                                        Color
                                                    </span>
                                                    <span class="ml-6 flex items-center">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div
                                                class="pt-6"
                                                id="filter-section-0"
                                            >
                                                <div class="space-y-4">
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-color-0"
                                                                    name="color[]"
                                                                    value="white"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-color-0"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            White
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-color-1"
                                                                    name="color[]"
                                                                    value="beige"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-color-1"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            Beige
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-color-2"
                                                                    name="color[]"
                                                                    value="blue"
                                                                    type="checkbox"
                                                                    checked
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-color-2"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            Blue
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-color-3"
                                                                    name="color[]"
                                                                    value="brown"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-color-3"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            Brown
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-color-4"
                                                                    name="color[]"
                                                                    value="green"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-color-4"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            Green
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-color-5"
                                                                    name="color[]"
                                                                    value="purple"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-color-5"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            Purple
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-b border-gray-200 py-6 w-64">
                                            <h3 class="-my-3 flow-root">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button
                                                    type="button"
                                                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                                    aria-controls="filter-section-1"
                                                    aria-expanded="false"
                                                >
                                                    <span class="font-medium text-gray-900">
                                                        Category
                                                    </span>
                                                    <span class="ml-6 flex items-center">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div
                                                class="pt-6"
                                                id="filter-section-1"
                                            >
                                                <div class="space-y-4">
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-category-0"
                                                                    name="category[]"
                                                                    value="new-arrivals"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-category-0"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            New Arrivals
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-category-1"
                                                                    name="category[]"
                                                                    value="sale"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-category-1"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            Sale
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-category-2"
                                                                    name="category[]"
                                                                    value="travel"
                                                                    type="checkbox"
                                                                    checked
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-category-2"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            Travel
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-category-3"
                                                                    name="category[]"
                                                                    value="organization"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-category-3"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            Organization
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-category-4"
                                                                    name="category[]"
                                                                    value="accessories"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-category-4"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            Accessories
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-b border-gray-200 py-6 w-64">
                                            <h3 class="-my-3 flow-root">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button
                                                    type="button"
                                                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                                    aria-controls="filter-section-2"
                                                    aria-expanded="false"
                                                >
                                                    <span class="font-medium text-gray-900">
                                                        Size
                                                    </span>
                                                    <span class="ml-6 flex items-center">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg
                                                            class="size-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div
                                                class="pt-6"
                                                id="filter-section-2"
                                            >
                                                <div class="space-y-4">
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-size-0"
                                                                    name="size[]"
                                                                    value="2l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-size-0"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            2L
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-size-1"
                                                                    name="size[]"
                                                                    value="6l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-size-1"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            6L
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-size-2"
                                                                    name="size[]"
                                                                    value="12l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-size-2"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            12L
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-size-3"
                                                                    name="size[]"
                                                                    value="18l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-size-3"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            18L
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-size-4"
                                                                    name="size[]"
                                                                    value="20l"
                                                                    type="checkbox"
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-size-4"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            20L
                                                        </label>
                                                    </div>
                                                    <div class="flex gap-3">
                                                        <div class="flex h-5 shrink-0 items-center">
                                                            <div class="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="filter-size-5"
                                                                    name="size[]"
                                                                    value="40l"
                                                                    type="checkbox"
                                                                    checked
                                                                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        class="opacity-0 group-has-checked:opacity-100"
                                                                        d="M3 8L6 11L11 3.5"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        class="opacity-0 group-has-indeterminate:opacity-100"
                                                                        d="M3 7H11"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            for="filter-size-5"
                                                            class="text-sm text-gray-600"
                                                        >
                                                            40L
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    {/* <!-- Product grid --> */}
                                    <div class="lg:col-span-3"></div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>

                <div class="p-4 mt-20">
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        {related_product &&
                            related_product.data.map((product) => {
                                return (
                                    <div className="rounded-lg bg-white p-2 ">
                                        <div className="h-56 w-full">
                                            <a href={`/product/${product.id}`}>
                                                <img
                                                    className="mx-auto /h-full  dark:hidden"
                                                    src={product.productImage}
                                                    alt=""
                                                />
                                                <img
                                                    className="mx-auto /hidden h-full object-cover w-full  dark:block"
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
                    <nav>
                        <ul class="flex items-center -space-x-px h-10 text-base justify-center">
                            <li>
                                <a
                                    href={route("paginate", {
                                        category_id:
                                            related_product.data[0].category_id,
                                        page: related_product.current_page - 1,
                                    })}
                                    class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span class="sr-only">Previous</span>
                                    <svg
                                        class="w-3 h-3 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 1 1 5l4 4"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("paginate", {
                                        category_id:
                                            related_product.data[0].category_id,
                                        page: 1,
                                    })}
                                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("paginate", {
                                        category_id:
                                            related_product.data[0].category_id,
                                        page: 2,
                                    })}
                                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    2
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("paginate", {
                                        category_id:
                                            related_product.data[0].category_id,
                                        page: 3,
                                    })}
                                    aria-current="page"
                                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    3
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("paginate", {
                                        category_id:
                                            related_product.data[0].category_id,
                                        page: 4,
                                    })}
                                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    4
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("paginate", {
                                        category_id:
                                            related_product.data[0].category_id,
                                        page: 5,
                                    })}
                                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    5
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("paginate", {
                                        category_id:
                                            related_product.data[0].category_id,
                                        page: related_product.current_page + 1,
                                    })}
                                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span class="sr-only">Next</span>
                                    <svg
                                        class="w-3 h-3 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Footer />
        </>
    );
}
