import React, { useEffect, useState } from 'react';
const Home = (props) => {
    const { programming, music, drama } = props.courses;
    console.log(typeof (music));
    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-semibold font-mono text-gray-900 text-center">Learn Anything or Everything</h2>
            <div className="my-3">
                <h2 className="text-3xl text-center font-medium">{programming?.length} Programming Courses</h2>
                <h2 className="text-3xl text-center font-medium">{music?.length} Music Courses</h2>
                <h2 className="text-3xl text-center font-medium">{drama?.length} Drama Courses</h2>
            </div>
        </div>
    );
};

export default Home;