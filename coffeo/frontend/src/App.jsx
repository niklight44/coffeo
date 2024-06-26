import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TheHeader from "./components/TheHeader.jsx";
import Hero from "./components/Hero.jsx";
import DiagonalLine from "./components/DiagonalLine.jsx";
import RecentProducts from "./components/RecentProducts.jsx";

function App() {

    return (
        <>
            <Hero/>
            <DiagonalLine/>
            <RecentProducts/>
        </>
    )
}

export default App
