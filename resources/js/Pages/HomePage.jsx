import NavBar from "@/Layouts/NavBar";
import Hero from "@/Layouts/Hero";
import Category from "@/Components/Category";
import Products from "@/Components/Products";
import Footer from "@/Layouts/Footer";
export default function HomePage({
    electronics_product,
    groceries_product,
    furniture_product,
    cosmotics_product,
}) {
    return (
        <>
            <NavBar />
            <Hero />
            <Category />
            <Products
                products={[
                    electronics_product,
                    groceries_product,
                    furniture_product,
                    cosmotics_product,
                ]}
            />
            <Footer />
        </>
    );
}
