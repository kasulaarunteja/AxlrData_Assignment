import React from 'react';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getproductdata} from "../Redux/Product/actions";


const Categories = () => {
    const Prodata = useSelector(store => store.product); 
    console.log(Prodata)
    const dispatch = useDispatch();


    const getprodata = () => {
        dispatch(getproductdata());
    }

    useEffect(() => {
          getprodata();
          //console.log(Prodata)
    },[]);


    return (
        <div>
            <Navbar/>
           <h2>Categories</h2>
        </div>
    );
}

export default Categories;
