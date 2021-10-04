
import Card from '../Card/Card';
import './Home.css';
const Home = (props) => {
    const { programming, music, drama } = props.courses;
    return (
        <div className="container w-screen mx-auto ">
            <h2 className="text-4xl font-semibold font-mono text-gray-900 text-center">Learn Anything or Everything</h2>
            <h4 className="text-lg font-medium font-mono text-gray-800 text-center mt-12">Our Most Popular Courses</h4>
            <div className="container w-12/12 min-h-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1  gap-4 my-3 mx-auto mb-12">
                {
                    (programming !== undefined && drama !== undefined && music !== undefined) ?
                        (
                            <>
                                <Card key={0} data={programming[0]}></Card>
                                <Card key={1} data={programming[2]}></Card>
                                <Card key={2} data={music[0]}></Card>
                                <Card key={3} data={drama[0]}></Card>
                            </>
                        )
                        :
                        <></>
                }
            </div>
        </div>
    );
};

export default Home;