import { useForm } from "@inertiajs/react";
export default function AdminPage({ category_name }) {
    const { data, setData, post } = useForm({
        productName: "",
        productPrice: "",
        productDescription: "",
        category_id: "",
        productImage: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.store"));
    };

    return (
        <form className="flex flex-col m-auto w-96" onSubmit={submit}>
            <label htmlFor="product_name">Name: </label>
            <input
                value={data.productName}
                type="text"
                id="product_name"
                onChange={(e) => setData("productName", e.target.value)}
            />

            <label htmlFor="product_price">Price: </label>
            <input
                value={data.productPrice}
                type="text"
                id="product_price"
                onChange={(e) => setData("productPrice", e.target.value)}
            />

            <label htmlFor="product_description">Description: </label>
            <textarea
                value={data.productDescription}
                type="text"
                id="product_description"
                onChange={(e) => setData("productDescription", e.target.value)}
            />

            <label htmlFor="product_category">Category: </label>
            <select
                name="category_id"
                onChange={(e) => setData("category_id", e.target.value)}
            >
                <option value="1">Select category</option>;
                {category_name.map((category, index) => {
                    return (
                        <>
                            <option
                                key={index}
                                value={category.id}
                                id="product_category"
                            >
                                {category.categoryName}
                            </option>
                            ;
                        </>
                    );
                })}
            </select>

            <label htmlFor="product_image">Image: </label>
            <input
                type="file"
                name="product_image"
                id=""
                onChange={(e) => setData("productImage", e.target.files[0])}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
