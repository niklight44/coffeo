import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TheHeader from "./components/TheHeader/TheHeader.jsx";
import Hero from "./components/Hero/Hero.jsx";
import DiagonalLine from "./components/DiagonalLine/DiagonalLine.jsx";
import RecentProducts from "./components/RecentProducts/RecentProducts.jsx";
import Banner from "./components/Banner/Banner.jsx";
import SpecialProducts from "./components/SpecialProducts/SpecialProducts.jsx";
import ProductQuality from "./components/ProductQuality/ProductQuality.jsx";

function App() {

    return (
        <>
            <Hero/>
            <DiagonalLine/>
            <RecentProducts/>
            <Banner/>
            <SpecialProducts/>
            <ProductQuality/>
        </>
    )
}

export default App
