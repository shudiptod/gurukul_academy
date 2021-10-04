import React from 'react';

import Rating from '../Rating/Rating';

const Card = (props) => {
    const { name, mentor, img, rating, duration, price } = props.data;

    return (
        <div className="container mx-auto lg:w-5/6 md:w-5/6 sm:w-3/6 h-full bg-gray-50 filter drop-shadow">
            <img src={img} className="mx-auto lg:w-5/6 md:w-full sm:w-full h-40" alt={name + " photo"} />
            <div className="container mx-auto w-full px-7 py-2">
                <h3 className="text-lg text-gray-900 font-mono mb-0">{name}</h3>
                <h4 className="text-xs font-serif font-semibold text-gray-800 mb-2">by: <span className="text-sm italic">{mentor}</span></h4>
                <Rating rating={rating}></Rating>
                <h4 className="text-sm text-gray-900 font-mono mt-2">Duration: {duration}</h4>
                <h2 className="text-lg text-gray-900 font-mono mt-2">{price} USD</h2>
            </div>
        </div >
    );
};

export default Card;