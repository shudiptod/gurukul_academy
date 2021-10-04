import React from 'react';

const About = () => {
    return (
        <div className=" w-10/12 mx-auto text-center mb-5 border rounded">
            <div className="bg-indigo-500 p-5 py-16 border rounded filter drop-shadow">
                <h2
                    className="text-white text-3xl text-center  font-sans font-semibold  filter drop-shadow text ">
                    About Us</h2>
                <hr className="w-3/6 h-8 mt-3 mx-auto" />
                <h3 className="text-3xl font-mono text-gray-50 font-semibold my-5 italic">Our Vision</h3>
                <p className="text-xl font-mono text-white  font-medium px-16 mb-8 text-justify">
                    There is no such thing as "one size fits all" in education;
                    each educator and child has unique challenges and goals.
                    We celebrate the diversity of our users by offering differentiated resources that
                    can meet a wide range of educational needs - and raise kids' confidence in learning.
                </p>
                <h3 className="text-3xl font-mono text-gray-50  font-semibold my-5 italic">Proven learning approaches</h3>
                <p className="text-xl font-mono text-gray-50  font-medium px-16 text-justify">
                    Teaching is one of the most challenging and complex jobs on the planet. Our digital resources, tools, and learning materials are developed by educational experts to incorporate leading pedagogical practices. They are useful in any type of teaching moment and many can be used to support national education standards.
                </p>
            </div>


        </div>
    );
};

export default About;