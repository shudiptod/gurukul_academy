import img from '../../images/school1.png';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
const Header = () => {


    // this part is for navigation function 
    let history = useHistory();
    const handleRouteClick = (route) => {
        history.push(route);
    }

    return (
        <div className=" filter drop-shadow w-10/12 mx-auto flex justify-between items-center bg-white py-4 px-2 mb-8 route-list">
            <h2 className="text-3xl font-sans font-semibold text-purple-900 mx-0 antialiased sm:subpixel-antialiased md:antialiased">GURUKUL</h2>

            <div className=" text-black text-sm w-2/4 flex justify-evenly">
                <button
                    className=" font-sans font-semibold px-6 py-4 text-lg transform hover:scale-125 hover:text-green-900  cursor-pointer"
                    onClick={() => handleRouteClick("/home")}>
                    Home
                </button>
                <button
                    className="font-sans font-semibold px-6 py-4 text-lg transform hover:scale-125 hover:text-green-900 cursor-pointer"
                    onClick={() => handleRouteClick("/services")}>
                    Services
                </button>
                <button
                    className="font-sans font-semibold px-6 py-4 text-lg transform hover:scale-125 hover:text-green-900 cursor-pointer"
                    onClick={() => handleRouteClick("/prices")}>
                    Prices
                </button>
                <button
                    className="font-sans font-semibold px-6 py-4 text-lg transform hover:scale-125 hover:text-green-900 cursor-pointer"
                    onClick={() => handleRouteClick("/about")}>
                    About
                </button>
            </div>
            <div className="flex items-center w-1/16 justify-self-end">
                <img className="w-1/16 h-16" src={img} alt="School Logo" />
            </div>

        </div>
    );
};
export default Header;