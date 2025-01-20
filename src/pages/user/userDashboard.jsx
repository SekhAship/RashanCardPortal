import Layout from "../../components/layout/Layout";
const products = [
    {
        id: 1,
        name: 'Nike Air Force 1 07 LV8',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
        href: '#',
        price: '₹61,999',
        color: 'Orange',
        imageAlt: 'Nike Air Force 1 07 LV8',
        quantity: 1,
    },
]

const UserDashboard = () => {
    const user= JSON.parse(localStorage.getItem('users'));
    console.log(user);
    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">
                {/* Top  */}
                <div className="top ">
                    {/* main  */}
                    <div className=" bg-pink-50 py-5 rounded-xl border border-pink-100">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text  */}
                        <div className="">
                            <h1 className=" text-center text-lg"><span className=" font-bold">Name :</span>{user.name}</h1>
                            <h1 className=" text-center text-lg"><span className=" font-bold">Email :</span> {user.email}</h1>
                        </div>
                    </div>
                </div>

                {/* bottom  */}
                <div className="bottom">
    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
        {/* Header */}
        <h2 className="text-2xl lg:text-3xl font-bold">User Info</h2>

        {/* Details Section */}
        <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
            {/* Main Info Section */}
            <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                <div className="p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                        <div className="mb-4">
                            <div className="text-sm font-semibold text-black">Ration Card Number</div>
                            <div className="text-sm font-medium text-gray-900">{user.uid}</div>
                            
                            
                        
                        </div>
                        <div className="mb-4">
                            <div className="text-sm font-semibold">Full Address:</div>
                            <div className="text-sm font-medium text-gray-900">{user.fullAddress}</div>
                        </div>

                        <div className="mb-4">
                            <div className="text-sm font-semibold">Age</div>
                            <div className="text-sm font-medium text-gray-900">{user.age}</div>
                        </div>

                        {/* Removed the Total Amount and Order Status */}
                    </div>
                </div>
            </div>

            {/* User Details */}
            <div className="flex-1">
                <div className="p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">User Details</h2>
                    <ul className="space-y-4">
                        <li>
                            <strong className="block text-sm font-semibold">Full Name:</strong>
                            <span className="text-sm text-gray-900">{user.fullName}</span>
                        </li>
                        <li>
                            <strong className="block text-sm font-semibold">Date of Birth:</strong>
                            <span className="text-sm text-gray-900">{user.dob}</span>
                        </li>
                        <li>
                            <strong className="block text-sm font-semibold">Gender:</strong>
                            <span className="text-sm text-gray-900">{user.gender}</span>
                        </li>
                        <li>
                            <strong className="block text-sm font-semibold">Phone Number:</strong>
                            <span className="text-sm text-gray-900">+91 {user.phoneNumber}</span>
                        </li>
                        <li>
                            <strong className="block text-sm font-semibold">Email Address:</strong>
                            <span className="text-sm text-gray-900">{user.email}</span>
                        </li>
                       
                        <li>
                            <strong className="block text-sm font-semibold">State:</strong>
                            <span className="text-sm text-gray-900">{user.state}</span>
                        </li>
                        <li>
                            <strong className="block text-sm font-semibold">City:</strong>
                            <span className="text-sm text-gray-900">{user.city}</span>
                        </li>
                        <li>
                            <strong className="block text-sm font-semibold">Pincode:</strong>
                            <span className="text-sm text-gray-900">{user.pincode}</span>
                        </li>
                        <li>
                            <strong className="block text-sm font-semibold">No. of Family Members:</strong>
                            <span className="text-sm text-gray-900">{user.familyMember}</span>
                        </li>
                        <li>
                            <strong className="block text-sm font-semibold">Annual Income:</strong>
                            <span className="text-sm text-gray-900">₹{user.annualIncome}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


            </div>
        </Layout>
    );
}

export default UserDashboard;
//////////////////////////////////////
// fullName: "",
// dob: "",
// gender:"",
// phoneNumber: "",
// email:"",
// state: "",
// city: "",
// pincode: "",
// familyMember: "",
// annualIncome: "",
// age: "",
// fullAddress: "",
// RationCardNumber: "",
// password: "",
// role: "user"