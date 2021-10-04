import React from 'react';
import Card from '../Card/Card';

const Services = (props) => {
    const { programming, music, drama } = props.courses;
    return (
        <div>
            <h2 className="text-center text-3xl text-gray-900">Pick Our Best Courses</h2>
            <div className="container w-2/4 mx-auto filter drop-shadow box-content shadow-2xl border-2 border-solid border-gray-900 rounded-xl my-12 py-5">
                <h2 className="text-center text-xl text-gray-900">Coding and IT Courses</h2>

            </div>
            <div className="container w-12/12 min-h-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1  gap-4 my-3 mx-auto">
                {
                    (programming !== undefined && drama !== undefined && music !== undefined) ?
                        (
                            programming.map(course => <Card data={course}></Card>)
                        )
                        :
                        <></>
                }
            </div>
            <div className="container w-2/4 mx-auto filter drop-shadow box-content shadow-2xl border-2 border-solid border-gray-900 rounded-xl my-12 py-5">
                <h2 className="text-center text-xl text-gray-900">Art, Film and Drama Courses</h2>
            </div>

            <div className="container w-12/12 min-h-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1  gap-4 my-3 mx-auto">
                {
                    (programming !== undefined && drama !== undefined && music !== undefined) ?
                        (
                            drama.map(course => <Card data={course}></Card>)
                        )
                        :
                        <></>
                }
            </div>
            <div className="container w-2/4 mx-auto filter drop-shadow box-content shadow-2xl border-2 border-solid border-gray-900 rounded-xl my-12 py-5">
                <h2 className="text-center text-xl text-gray-900">Music Courses</h2>
            </div>

            <div className="container w-12/12 min-h-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1  gap-4 my-3 mx-auto">
                {
                    (programming !== undefined && drama !== undefined && music !== undefined) ?
                        (
                            music.map(course => <Card data={course}></Card>)
                        )
                        :
                        <></>
                }
            </div>
        </div >
    );
};

export default Services;