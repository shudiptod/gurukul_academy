import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
const Rating = (props) => {
    const { rating } = props;
    const [star, setStar] = useState([]);

    useEffect(() => {
        if (rating) {
            let tempStar = [];
            for (let key = 0; key < rating; key++) {
                tempStar.push(`<FaStar></FaStar>`);
            }
            setStar([...tempStar]);
        }
    }, [rating])

    return (
        <div className="container flex justify-start items-center mb-1">
            {
                star.map(st => <FaStar className="mr-1"></FaStar>)
            }
        </div>
    );
};

export default Rating;