import img from '../../images/school1.png';
import React from 'react';
import { useHistory } from 'react-router-dom';
const Header = () => {


    // this part is for navigation function 
    let history = useHistory();
    const handleRouteClick = (route) => {
        history.push(route);
    }

    return (
        <div className="filter drop-shadow lg:w-10/12 mx-auto md:w-full sm:w-full flex sm:flex-col md:flex-col lg:flex-row   lg:justify-between md:justify-evenly sm:justify-center items-center bg-white py-4 lg:px-2 md:px-2 sm:px-2 mb-8">

            <h2 className="lg:text-3xl md:text-lg sm:text-lg 
            font-sans font-semibold text-purple-900 mx-0 
            antialiased sm:subpixel-antialiased md:antialiased select-none cursor-pointer" onClick={() => handleRouteClick("/")}>GURUKUL</h2>

            <div className="container text-black text-sm  sm:w-full md:w-2/4 lg:w-2/4 
            flex justify-evenly flex-wrap sm:my-3">
                <button
                    className="font-sans font-semibold lg:px-6 md:px-2 sm:px-3 
                    lg:py-4 md:py-4 sm:py-3 lg:text-lg md:text-sm sm:text-sm 
                    transform lg:hover:scale-125 hover:text-green-900 
                    sm:shadow-xl sm:border sm:rounded-xl cursor-pointer"
                    onClick={() => handleRouteClick("/home")}>
                    Home
                </button>
                <button
                    className="font-sans font-semibold lg:px-6 md:px-2 sm:px-3 
                    lg:py-4 md:py-4 sm:py-1 lg:text-lg md:text-sm sm:text-sm 
                    transform lg:hover:scale-125 hover:text-green-900 
                    sm:shadow-xl sm:border sm:rounded-xl cursor-pointer"
                    onClick={() => handleRouteClick("/services")}>
                    Services
                </button>
                <button
                    className="font-sans font-semibold lg:px-6 md:px-2 sm:px-3 
                    lg:py-4 md:py-4 sm:py-1 lg:text-lg md:text-sm sm:text-sm 
                    transform lg:hover:scale-125 hover:text-green-900 
                    sm:shadow-xl sm:border sm:rounded-xl cursor-pointer"
                    onClick={() => handleRouteClick("/prices")}>
                    Prices
                </button>
                <button
                    className="font-sans font-semibold lg:px-6 md:px-2 sm:px-3 
                    lg:py-4 md:py-4 sm:py-1 lg:text-lg md:text-sm sm:text-sm 
                    transform lg:hover:scale-125 hover:text-green-900 
                    sm:shadow-xl sm:border sm:rounded-xl cursor-pointer"
                    onClick={() => handleRouteClick("/about")}>
                    About
                </button>
            </div>
            <div className="flex items-center w-1/16  lg:justify-self-end ">
                <img className="w-1/16 h-16" src={img} alt="School Logo" />
            </div>

        </div>
    );
};
export default Header;