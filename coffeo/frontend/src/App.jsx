import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TheHeader from "./components/TheHeader.jsx";
import Hero from "./components/Hero.jsx";
import DiagonalLine from "./components/DiagonalLine.jsx";
import RecentProducts from "./components/RecentProducts.jsx";
import Banner from "./components/Banner.jsx";
import SpecialProducts from "./components/SpecialProducts.jsx";
import ProductQuality from "./components/ProductQuality.jsx";

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
