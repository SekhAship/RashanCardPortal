import { useContext } from "react";
import myContext from "../../context/myContext";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import toast from "react-hot-toast";


const HomePageProductCard = () => {
    const { getAllUsers, loading,setLoading,getAllUsersFunction} = useContext(myContext);
    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'user', id))
            toast.success('User Deleted successfully')
            getAllUsersFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className="mt-10">
            {/* Heading */}
            <div className="">
                <h1 className="text-center mb-5 text-2xl font-semibold">All Users</h1>
            </div>

            {/* Main Section */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    {loading ? (
                        <p className="text-center text-lg">Loading...</p>
                    ) : (
                        <div className="flex flex-wrap -m-4">
                            {getAllUsers.map((user, index) => {
                                const { id,fullName, phoneNumber, dob, image } = user;
                                // console.log(user);
                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                className="lg:h-80 h-50 w-full"
                                                src='https://imgs.search.brave.com/36KX1br_epGfarv_IP_WcGeRoKFxbcpXhocqYPNvM2Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDct/dXMuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2dRSUU4djhhcUhC/LWdZZy1WaTVhSmgy/dUVWLUc0QWRNUnho/MllDYXM3TU1SNDV4/ZDJnZ1h6MFg1Wm5Y/eDZrV1c2bk5BRGFq/V1o4MG5XV2ozcGwx/enJIWm5DaC0xYmNs/NGlPRVZrS1FLd0ZI/a2VyZTRGY1M2SWJx/Q2Y1NlRoRlRnbDA3/NzJPUm5KZUJKQW5E/Z2FSM0cyT1k.jpeg'
                                                alt="User"
                                            />
                                            <div className="p-6">
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    Name: {fullName}
                                                </h1>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    Phone Number: {phoneNumber || "N/A"}
                                                </h1>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    DOB: {dob || "N/A"}
                                                </h1>

                                                <div className="flex justify-center space-x-2">
                                                    <button onClick={()=> deleteProduct(id)} className="bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Delete
                                                    </button>
                                                    <button className="bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Update
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePageProductCard;
