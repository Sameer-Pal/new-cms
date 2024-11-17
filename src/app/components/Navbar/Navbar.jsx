"use client"
import { useState,useRef, useEffect } from 'react';
import Image from 'next/image'
// import Calendar from "../Calender/Calender.jsx";
import MitrayuLogo from '../../assets/MitrayuLogo.jpg'; // Adjust the path as necessary

function NavLink({ to, children }) {
    return <a href={to} className={`mx-4`}>{children}</a>
}

function MobileNav({ open, setOpen }) {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const toggleDropdown = (dropdownName) => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdownName);
        }
    };
    const ToggleButton = ({ label, isOpen, onToggle }) => {
        return (
            <button
                onClick={onToggle}
                className="flex items-center justify-start text-xl font-medium my-4 text-white focus:outline-none w-full transform hover:scale-105 transition-transform duration-200"
            >
                <span className="mr-2 text-white">{label}</span>
                <svg
                    className={`w-4 h-4 transition-transform duration-300 transform ${isOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="White"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
        );
    };

    const router = useRouter(); // Initialize the router

    const handleCalendarToggle = () => {
        setIsCalendarOpen(!isCalendarOpen);
        setOpen(false); // Close the navbar when the calendar is toggled
        router.push('/calendar'); // Navigate to the calendar route
    };
    return (
        <div className={`fixed top-0 left-0 h-screen w-screen bg-[#262626] transform z-25 ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out filter drop-shadow-lg`}>
        <div className="flex items-center justify-center filter drop-shadow-lg h-20">
            <a href="/">
                <span className="text-2xl font-semibold text-[#ffffff]">Mitrayu</span>
            </a>
        </div>
    
        <div className="flex flex-col ml-4 bg-opacity-90">
            <a 
                className="text-xl font-medium my-4 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform"
                href="/" 
                onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
            >
                Home
            </a>
    
            {/* Masters Dropdown */}
            <div>
                <ToggleButton label="Masters" isOpen={activeDropdown === 'masters'} onToggle={() => toggleDropdown('masters')} />
                <div className={`flex flex-col ml-6 transition-all duration-300 ${activeDropdown === 'masters' ? 'max-h-screen opacity-100 delay-75' : 'max-h-0 opacity-0 overflow-hidden transition-opacity duration-300'}`}>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/masters/employees">Employees</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/masters/division">Division</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/masters/location">Location</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/masters/function">Function</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/masters/category">Category</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/masters/act">Act</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/masters/systemRoles">System Rules</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/masters/homePageComments">Home Page Comments</a>
                </div>
            </div>
    
            {/* Compliance Dropdown */}
            <div>
                <ToggleButton label="Compliance" isOpen={activeDropdown === 'compliance'} onToggle={() => toggleDropdown('compliance')} />
                <div className={`flex flex-col ml-6 transition-all duration-300 ${activeDropdown === 'compliance' ? 'max-h-screen opacity-100 delay-75' : 'max-h-0 opacity-0 overflow-hidden transition-opacity duration-300'}`}>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/compliance/create-edit-search"> Create/Edit/Search</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/compliance/create-detail-mutliple">Create/Detail/Multiple</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/compliance/create-edit-search">CreateEditSearch</a>

                  
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/compliance/future-archieved-deleted">FutureArchievedDeleted</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/compliance/replaceAuthority">Replace Authority</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/compliance/reportEventOccurence">Report Event</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/compliance/adminDetailVerification">Admin Detail Verification</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/compliance/compliance-header-count">Compliance Header Count </a>
                </div>
            </div>
    
            {/* Dashboard Dropdown */}
            <div>
                <ToggleButton label="Dashboard" isOpen={activeDropdown === 'dashboard'} onToggle={() => toggleDropdown('dashboard')} />
                <div className={`flex flex-col ml-6 transition-all duration-300 ${activeDropdown === 'dashboard' ? 'max-h-screen opacity-100 delay-75' : 'max-h-0 opacity-0 overflow-hidden transition-opacity duration-300'}`}>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/dashboard/overview">Overview</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/dashboard/stats">Stats</a>
                </div>
            </div>
    
            {/* Reports Dropdown */}
            <div>
                <ToggleButton label="Reports" isOpen={activeDropdown === 'reports'} onToggle={() => toggleDropdown('reports')} />
                <div className={`flex flex-col ml-6 transition-all duration-300 ${activeDropdown === 'reports' ? 'max-h-screen opacity-100 delay-75' : 'max-h-0 opacity-0 overflow-hidden transition-opacity duration-300'}`}>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/dashboard/overview">Overview</a>
                    <a className="text-lg font-normal my-2 text-white hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out transform" href="/dashboard/stats">Stats</a>
                </div>
            </div>
    
            <div className="flex flex-col transition-all duration-300 pr-2 mt-4">
                <button 
                    className="text-white text-lg border border-white rounded px-4 py-2 hover:bg-yellow-500 hover:text-black transition duration-300 transform hover:scale-105 ease-in-out"
                    onClick={handleCalendarToggle}
                >
                    Open Calendar
                </button>
            </div>
        </div>
    </div>
    
    );
}

// MAIN NAVBAR

import { useRouter } from 'next/navigation'; // Import useRouter

export default function Navbar() {
    const [open, setOpen] = useState(false);
    // const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // Dropdown toggle state
    const navbarRef = useRef(); // Reference for navbar

    // closing dropdown when click anywher outside toggle 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navbarRef]);

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) {
            setActiveDropdown(null); // Close the dropdown if clicked again
        } else {
            setActiveDropdown(dropdown); // Open the clicked dropdown
        }
    };


    const ToggleButton = ({ label, isOpen, onToggle }) => {
        return (
            <button
                onClick={onToggle}
                className="flex items-center justify-start text-xl font-medium my-4 text-white focus:outline-none w-full"
            >
                <span className="mr-1 text-[#ffffff]">{label}</span>
                <svg

                    className={`w-4 h-4 transition-transform   duration-500 transform ${isOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                    stroke="ffffff"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
        );
    };
    const router = useRouter(); // Initialize the router

    const handleNavigation = () => {
        // Example: Navigate to another page
        router.push('/calendar'); // Replace with your desired route
    };
    return (
        <>

            <nav ref={navbarRef}      className="relative flex items-center justify-between px-6 py-8 h-10 z-50 
             backdrop-blur-2xl bg-[#262626] shadow-md text-white"
             
>
                <MobileNav open={open} setOpen={setOpen} />
                <div className="w-3/12 flex items-center">
                <a href="/" className="flex items-center">
                    <Image 
                        src=""
                        alt=""
                        className="h-10 w-auto rounded-md"
                    />

<span className="ml-2  text-2xl font-semibold text-[#ffffff]">Mitrayu</span>
</a>                   </div>

                <div className="w-9/12 flex justify-end items-center">
                    {/* Hamburger button for mobile view */}
                    <div className=" flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => setOpen(!open)}>
                        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>

                    {/* Desktop version of the dropdown menu */}
                    <div className="hidden md:flex space-x-6">
                        {/* Masters Dropdown */}
                        <div className="relative">

    <ToggleButton
        label="Masters"
        isOpen={activeDropdown === 'masters'}
        onToggle={() => toggleDropdown('masters')}
        className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition duration-300"
    />

    {activeDropdown === 'masters' && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-black shadow-lg rounded-md z-10 w-auto overflow-hidden opacity-0 scale-95 transition-all duration-300 ease-out visible opacity-100 scale-100">
            <a
                href="/masters/employees"
                className="flex justify-center items-center text-white hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Employees
            </a>
            <a
                href="/masters/division"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Division
            </a>
            <a
                href="/masters/location"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Location
            </a>
            <a
                href="/masters/function"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Function
            </a>
            <a
                href="/masters/category"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Category
            </a>
            <a
                href="/masters/act"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Act
            </a>
            <a
                href="/masters/systemRoles"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                System Roles
            </a>
            <a
                href="/masters/homePageComments"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Home Page Comments
            </a>
        </div>
    )}
</div>

    
                        {/* Compliance Dropdown */}
<div className="relative">
    <ToggleButton
        label="Compliance"
        isOpen={activeDropdown === 'compliance'}
        onToggle={() => toggleDropdown('compliance')}
        className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition duration-300"
    />
    {activeDropdown === 'compliance' && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-black shadow-lg rounded-md z-10 w-auto overflow-hidden opacity-0 scale-95 transition-all duration-300 ease-out visible opacity-100 scale-100">
            <a
                href="/compliance/create-edit-search"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Create / Edit / Search
            </a>
            <a
                href="/compliance/create-detail-mutliple"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Create Detail - Multiple
            </a>
            <a
                href="/compliance/amendment"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Amendment
            </a>
            <a
                href="/compliance/future-archieved-deleted"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Future / Archived / Deleted
            </a>
            <a
                href="/compliance/replaceAuthority"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Replace Authority
            </a>
            <a
                href="/compliance/compliance-header-count"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Compliance Header Count
            </a>
            <a
                href="/compliance/reportEventOccurence"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Report Event Occurrence
            </a>
            <a
                href="/compliance/adminDetailVerification"
                className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200 transform hover:scale-105"
            >
                Admin Detail Verification
            </a>
        </div>
    )}
</div>


                        {/* Dashboard Dropdown */}
                        <div className="relative">
                        <ToggleButton label="Dashboard" isOpen={activeDropdown === 'dashboard'} onToggle={() => toggleDropdown('dashboard')} />
                            {activeDropdown === 'dashboard' && (
                                <div className="absolute width-auto left-1/2 transform -translate-x-1/2  mt-1 bg-black shadow-lg rounded-md z-10 w-auto overflow-hidden">
                                           <a href="/compliance/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">Submenu 1</a>
                    <a href="/compliance/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">
Statutory Requirement

</a>
                    <a href="/compliance/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">
                    Internal Control</a>
                              
                                </div>
                            )}
                        </div>

                     {/* reports Dropdown */}
                     <div className="relative">
                        <ToggleButton label="Reports" isOpen={activeDropdown === 'reports'} onToggle={() => toggleDropdown('reports')} />
                            {activeDropdown === 'reports' && (
                                <div className="absolute width-auto left-1/2 transform -translate-x-1/2  mt-1 bg-black shadow-lg rounded-md z-10 w-auto overflow-hidden">
                                           <a href="/compliance/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">Submenu 1</a>
                    <a href="/reports/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">View Event Checklist
                    </a>
                    <a href="/reports/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">Global Search
                    </a>
                    <a href="/compliance/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">Event Occurrence Report
                    </a>
                    <a href="/compliance/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">Action Plan Report
                    </a>
                    <a href="/compliance/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">View Ownerwise Compliace Count
                    </a>
                    <a href="/compliance/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">View Pending Checker Verification
                    </a>
                    <a href="/compliance/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200">User Wise Summry Report
                    </a>
                    <a href="/compliance/submenu1"                 className="flex justify-center items-center text-gray-100 hover:bg-white hover:text-black p-2 whitespace-nowrap transition duration-200"></a>
                                   
                                </div>
                            )}
                        
                        </div>
                    </div>

                    {/* Calendar Toggle Button */}
                    <div className="ml-4">
                        <button
                onClick={handleNavigation} 
                className="text-white text-lg border border-white rounded px-3 py-1 hover:bg-white hover:text-black transition duration-300 hidden md:block"
                        >
                            Calendar
                        </button>
                    </div>
                </div>
            </nav>

            {/* Calendar Component */}
            {/* {isCalendarOpen && (
                <div className="rounded-lg shadow-lg px-4 max-w-screen-sm w-full">
                    <Calendar />
                </div>
            )} */}
        </>
    );
}