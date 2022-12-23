import React from 'react';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getproductdata} from "../Redux/Product/actions";


const Categories = () => {
    const { Prodata} = useSelector((store) => store.otherReducer);
    const dispatch = useDispatch();


    const getprodata = () => {
        dispatch(getproductdata());
    }

    useEffect(() => {
          getprodata();
    });


    return (
        <div>
            <Navbar/>
           <h2>Categories</h2>
           {Prodata.map((ele) => {
            return (
                <h3>{}</h3>
            )
           })}
        </div>
    );
}

export default Categories;
