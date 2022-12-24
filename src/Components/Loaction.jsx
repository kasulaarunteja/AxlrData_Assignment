import React from 'react';
import Navbar from './Navbar';

const Loaction = () => {
    return (
        <div>
         <Navbar/>
            <h2>Loaction</h2>
            <div className='main'>
            <input type="number" placeholder='Startpoin'/>
            <br/>
            <br/>
            <input type="number" placeholder='endpoint'/>
            <button className="subbtnll"type="submit"> Submit </button>
            </div>
        </div>
    );
}

export default Loaction;
