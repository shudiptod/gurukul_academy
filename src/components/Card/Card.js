import React from 'react';

import Rating from '../Rating/Rating';

const Card = (props) => {
    const { name, mentor, img, rating, duration, price } = props.data;

    return (
        <div className="container mx-auto lg:w-5/6 md:w-5/6 sm:w-5/6 h-full bg-gray-50 filter drop-shadow shadow-2xl border rounded-xl">
            <img src={img} className="mx-auto mt-5 lg:w-5/6 md:w-full sm:w-10/12 h-40 border rounded-xl" alt={name + " photo"} />
            <div className="container mx-auto w-full px-7 py-2">
                <h3 className="text-lg text-gray-900 font-mono mb-0">{name}</h3>
                <h4 className="text-xs font-serif font-semibold text-gray-800 mb-2">by: <span className="text-sm italic">{mentor}</span></h4>
                <Rating rating={rating}></Rating>
                <h4 className="text-sm text-gray-900 font-mono mt-2">Duration: {duration}</h4>
                <div className="container w-full mx-auto flex justify-between items-baseline mt-2">
                    <h2 className="text-xl text-gray-900 font-mono mt-2">{price} USD</h2>
                    <button className="px-4 py-1 text-sm text-white font-semibold bg-gray-800 border-0 rounded-3xl">Join</button>
                </div>
            </div>
        </div >
    );
};

export default Card;