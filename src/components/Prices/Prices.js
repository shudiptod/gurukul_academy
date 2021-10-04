import React from 'react';

const Prices = () => {
    return (
        <div className="container w-full mx-auto grid grid-cols-3 my-12">
            <div className="container mx-auto lg:w-5/6 md:w-5/6 sm:w-3/6 h-full bg-gray-50 filter drop-shadow shadow-2xl border rounded-xl">

                <div className="container mx-auto w-full px-7 py-2">
                    <h3 className="text-lg text-gray-900 font-mono mb-0">Short Term Plan</h3>
                    <h4 className="text-xs font-serif font-semibold text-gray-800 mb-2">Studentship: <span className="text-sm italic">4 Months</span></h4>

                    <h4 className="text-sm text-gray-900 font-mono mt-2">Fee: 100 USD</h4>
                    <div className="container w-full mx-auto flex justify-between items-center mt-2">
                        <h2 className="text-xl text-gray-900 font-mono mt-2"> Five Courses Allowed</h2>

                    </div>
                </div>
            </div >
            <div className="container mx-auto lg:w-5/6 md:w-5/6 sm:w-3/6 h-full bg-gray-50 filter drop-shadow shadow-2xl border rounded-xl">
                <div className="container mx-auto w-full px-7 py-2">
                    <h3 className="text-lg text-gray-900 font-mono mb-0">Premium Plan</h3>
                    <h4 className="text-xs font-serif font-semibold text-gray-800 mb-2">Studentship: <span className="text-sm italic">6 Months</span></h4>

                    <h4 className="text-sm text-gray-900 font-mono mt-2">Fee: 400 USD</h4>
                    <div className="container w-full mx-auto flex justify-between items-center mt-2">
                        <h2 className="text-xl text-gray-900 font-mono mt-2"> All Courses Allowed</h2>

                    </div>
                </div>

            </div>
            <div className="container mx-auto lg:w-5/6 md:w-5/6 sm:w-3/6 h-full bg-gray-50 filter drop-shadow shadow-2xl border rounded-xl">
                <div className="container mx-auto w-full px-7 py-2">
                    <h3 className="text-lg text-gray-900 font-mono mb-0">Delux Plan</h3>
                    <h4 className="text-xs font-serif font-semibold text-gray-800 mb-2">Studentship: <span className="text-sm italic">1 Year</span></h4>

                    <h4 className="text-sm text-gray-900 font-mono mt-2">Fee: 600 USD</h4>
                    <div className="container w-full mx-auto flex justify-between items-center mt-2">
                        <h2 className="text-xl text-gray-900 font-mono mt-2"> All Courses Allowed</h2>

                    </div>
                </div>
            </div>


        </div >
    );
};

export default Prices;