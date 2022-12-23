import React from 'react';
import Navbar from '../Components/Navbar';
import {Routes, Route} from "react-router-dom"
import Loginpage from '../Components/Loginpage';
import Categories from '../Components/Categories';
import Loaction from '../Components/Loaction';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Loginpage/>}/>
            <Route path='/Categories' element={<Categories/>}/>
            <Route path="/Loaction" element={<Loaction/>}/>
        </Routes>
    );
}

export default AllRoutes;
