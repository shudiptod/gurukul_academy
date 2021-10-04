import React from 'react';

const Prices = () => {
    return (
        <div className="container w-full mx-auto">
            <h2 className="text-2xl sm:text-lg sm:px-4 text-center text-yellow-900 font-semibold">
                Get our membership program to enjoy courses without individual course fee.</h2>
            <div className="container w-10/12 sm:w-full sm:px-0 mx-auto grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 my-12 
                text-center sm:text-center gap-3 sm:gap-2 items-center justify-evenly">
                <div className="container mx-auto w-5/6 h-full 
                    bg-gray-50 flex flex-col items-center  justify-evenly 
                    filter drop-shadow shadow-2xl border rounded-xl">

                    <div className="container mx-auto w-full px-7 py-8">
                        <h3 className="text-xl text-gray-900 font-mono mb-0">Student Package</h3>
                        <h4 className="text-sm font-serif font-semibold text-gray-800 m-2 lining-nums">Membership: <span className="text-lg">4 Months</span></h4>
                        <h4 className="text-lg text-gray-900 font-mono mt-2">Fee: <span className="text-yellow-600">100 USD</span></h4>
                        <h2 className="text-center text-lg text-gray-900 font-mono m-2">100 Course</h2>
                        <button className="text-white font-mono font-bold text-xl bg-yellow-500 px-6 py-1 rounded-3xl m-3">Go</button>
                    </div>

                </div >
                <div className="container mx-auto w-5/6 h-full 
                    bg-gray-50 flex flex-col items-center  justify-evenly 
                    filter drop-shadow shadow-2xl border rounded-xl">
                    <div className="container mx-auto w-full px-7 py-8">
                        <h3 className="text-xl text-gray-900 font-mono mb-0">Premium Package</h3>
                        <h4 className="text-sm font-serif font-semibold text-gray-800 m-2 lining-nums">Studentship: <span className="text-lg">8 Months</span></h4>

                        <h4 className="text-lg text-gray-900 font-mono mt-2">Fee: <span className="text-yellow-600">500 USD</span></h4>
                        <h2 className="text-center text-lg text-gray-900 font-mono m-2 lining-nums">400 Course</h2>
                        <button className="text-white font-mono font-bold text-xl bg-yellow-500 px-6 py-1 rounded-3xl m-3">Go</button>
                    </div>

                </div>
                <div className="container mx-auto w-5/6 h-full 
                    bg-gray-50 flex flex-col items-center  justify-evenly 
                    filter drop-shadow shadow-2xl border rounded-xl">
                    <div className="container mx-auto w-full px-7 py-8">
                        <h3 className="text-xl text-gray-900 font-mono mb-0">Delux Package</h3>
                        <h4 className="text-sm font-serif font-semibold text-gray-800 m-2 lining-nums">Studentship: <span className="text-lg">1 Year</span></h4>

                        <h4 className="text-lg text-gray-900 font-mono mt-2">Fee: <span className="text-yellow-600">1000 USD</span></h4>
                        <h2 className="text-center text-lg text-gray-900 font-mono m-2">All Course</h2>
                        <button className="text-white font-mono font-bold text-xl bg-yellow-500 px-6 py-1 rounded-3xl m-3">Go</button>
                    </div>
                </div>


            </div >

        </div>
    );
};

export default Prices;