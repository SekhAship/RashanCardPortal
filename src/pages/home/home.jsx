import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/herosection/herosection";
import HomePageProductCard from "../../components/homePageProductCard/homePageProducgtCard";
import Testimonial from "../../components/testimonial/testimonial";
import { useContext } from "react";
import myContext from "../../context/myContext";


const Home = () => {
    // Navigation list data
    const navList = (
        <ul className="space-y-4">
            <li>
                <Link
                    to={'/'}
                    className="block bg-green-100 text-green-800 font-bold py-3 px-5 rounded-lg shadow hover:bg-green-200"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to={'/signup'}
                    className="block bg-green-100 text-green-800 font-bold py-3 px-5 rounded-lg shadow hover:bg-green-200"
                >
                    Signup
                </Link>
            </li>
            <li>
                <Link
                    to={'/'}
                    className="block bg-green-100 text-green-800 font-bold py-3 px-5 rounded-lg shadow hover:bg-green-200"
                >
                    Kamal
                </Link>
            </li>
            <li>
                <Link
                    to={'/applynewcard'}
                    className="block bg-green-100 text-green-800 font-bold py-3 px-5 rounded-lg shadow hover:bg-green-200"
                >
                    Apply New Card
                </Link>
            </li>
        </ul>
    );

    // Important links
    const importantLinks = (
        <ul className="space-y-4">
            <li>
                <Link
                    to={'/status'}
                    className="block bg-green-100 text-green-800 font-bold py-3 px-5 rounded-lg shadow hover:bg-green-200"
                >
                    Check Status
                </Link>
            </li>
            <li>
                <Link
                    to={'/update'}
                    className="block bg-green-100 text-green-800 font-bold py-3 px-5 rounded-lg shadow hover:bg-green-200"
                >
                    Update Details
                </Link>
            </li>
            <li>
                <Link
                    to={'/help'}
                    className="block bg-green-100 text-green-800 font-bold py-3 px-5 rounded-lg shadow hover:bg-green-200"
                >
                    Help
                </Link>
            </li>
        </ul>
    );
    // const context=useContext(myContext);
    // const name=context;
    return (
        
        <div>
            
        <Layout>
            <nav className="bg-green-700 sticky top-0 min-h-screen flex">
                {/* Left side navigation */}
                <div className="w-1/4 bg-green-800 text-white p-5">
                    <h2 className="font-bold text-2xl text-center mb-5">E-Bharat</h2>
                    {navList}
                </div>

                {/* Middle images */}
                <div className="w-2/4 flex flex-col items-center justify-start bg-white p-5 space-y-3">
                    <HeroSection />
                    {name}
                    <Testimonial />
                </div>


                {/* Right side important links */}
                <div className="w-1/4 bg-green-800 text-white p-5">
                    <h2 className="font-bold text-2xl text-center mb-5">Important Links</h2>
                    {importantLinks}
                </div>
            </nav>
            <div>

           
            
            </div>
        </Layout>
       
        </div>
    );
};

export default Home;
