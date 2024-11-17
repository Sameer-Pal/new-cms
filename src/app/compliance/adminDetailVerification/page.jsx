"use client";
import { useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

// import  '';
// import  '../../assets/sqr_goldyellow.jpg';
// import '../../assets/sqr_tick_green.gif';
// import '../../assets/sqr_yellow.jpg';

const AdminDetailVerification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedOwner, setSelectedOwner] = useState("");
  const [showTable, setShowTable] = useState(false);

  const data = [
    { column1: "Row 1 Col 1", column2: "Row 1 Col 2", column3: "Owner 1", owner: "owner1" },
    { column1: "Row 2 Col 1", column2: "Row 2 Col 2", column3: "Owner 2", owner: "owner2" },
    { column1: "Row 3 Col 1", column2: "Row 3 Col 2", column3: "Owner 3", owner: "owner3" },
  ];

  const handleOwnerChange = (e) => {
    setSelectedOwner(e.target.value);
  };

  const handleShowTable = () => {
    setShowTable(true);
  };

  const filteredData = selectedOwner
    ? data.filter((row) => row.owner === selectedOwner)
    : data;


  


  const paths = [
    { label: "Home", link: "/" },
    { label: "Compliance", link: "/compliance" },
    { label: "AdminDetailVerification", link: "/compliance/ AdminDetail" },
  ];

  const handleReset = () => {
    setSearchParams({
      complianceType: '',
      requisite: '',
      priority: '',
      division: '',
      location: '',
      function: '',
      category: '',
      act: '',
      authority: '',
      employee: '',
    });
  };

  

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };



  return (

    <>
<div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
  <div className=" sm:w-1/3 flex items-center overflow-hidden ">
    <Breadcrumbs paths={paths} />
  </div>
</div> 

 <div className="min-h-screen text-white p-4 m-2 border border bg-[#FFFFFF] rounded-xl">



   {/* <div className='p-2 flex justify-between '>

  <div className="flex flex-wrap justify-end ">
        <img
          
            src="../../assets/sqr_yellow.jpg"
            className="w-10 h-10 rounded-lg "
        />
  </div>
</div> */}

<div className="mt-6 m-4 px-4 py-3 border border-gray-300 bg-[#d4d4d4] rounded-lg"> 
  {/* Container */}
  <div className="flex flex-col sm:flex-row justify-between items-center">
    {/* Left Side: Select Owner Dropdown */}
    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
     
      <select
        id="ownerSelect"
        name="owner"
        value={selectedOwner}
        onChange={handleOwnerChange}
        className="block w-full px-4 py-2  border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option className="bg-[#F5F5F5]" value="">-- Select Owner --</option>
        <option className="bg-[#F5F5F5]" value="owner1">Owner 1</option>
        <option className="bg-[#F5F5F5]" value="owner2">Owner 2</option>
        <option  className="bg-[#F5F5F5]" value="owner3">Owner 3</option>
        {/* Add more options as needed */}
      </select>
    </div>

    {/* Right Side: Show Table Button */}
    <div className="flex w-full sm:w-auto flex-col sm:flex-row sm:items-center">
      <button
        onClick={handleShowTable}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200 whitespace-nowrap"
      >
        Show Table
      </button>
    </div>
  </div>

  
</div>
    </div>
    </>
  );
};

export default AdminDetailVerification;
