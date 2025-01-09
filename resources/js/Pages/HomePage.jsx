import NavBar from "@/Layouts/NavBar";
import Hero from "@/Layouts/Hero";
import Category from "@/Components/Category";
import Products from "@/Components/Products";
import Footer from "@/Layouts/Footer";
export default function HomePage({ product }) {
    return (
        <>
            <NavBar />
            <Hero />
            <Category />
            <Products products={product} />
            <Footer />
        </>
    );
}
