/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { auth, fireDB } from "../../firebase/firebaseConfig";
import Loader from "../../components/loader/loader";
/* eslint-disable react/no-unescaped-entities */
import myContext from "../../context/myContext";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        fullName: "",
        dob: "",
        gender: "",
        phoneNumber: "",
        email: "",
        password: "",
        role: "user",
        state: "",
        city: "",
        pincode: "",
        familyMember: "",
        annualIncome: "",
        age: "",
        fullAddress: "",
    });

    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation 
        if (
            userSignup.fullName === "" ||
            userSignup.email === "" ||
            userSignup.password === ""
        ) {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                fullName: userSignup.fullName,
                dob: userSignup.dob,
                gender: userSignup.gender,
                phoneNumber: userSignup.phoneNumber,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                state: userSignup.state,
                city: userSignup.city,
                pincode: userSignup.pincode,
                familyMember: userSignup.familyMember,
                annualIncome: userSignup.annualIncome,
                age: userSignup.age,
                fullAddress: userSignup.fullAddress,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            };

            // create user Reference
            const userReference = collection(fireDB, "user");

            // Add User Detail
            await addDoc(userReference, user);

            setUserSignup({
                fullName: "",
                dob: "",
                gender: "",
                phoneNumber: "",
                email: "",
                password: "",
                role: "user",
                state: "",
                city: "",
                pincode: "",
                familyMember: "",
                annualIncome: "",
                age: "",
                fullAddress: "",
            });

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    };

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Signup
                    </h2>
                </div>

                {Object.keys(userSignup).map((key) => (
                    <div className="mb-3" key={key}>
                        <input
                            type={key === "password" ? "password" : "text"}
                            placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                            value={userSignup[key]}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    [key]: e.target.value
                                });
                            }}
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                        />
                    </div>
                ))}

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
};

export default Signup;
