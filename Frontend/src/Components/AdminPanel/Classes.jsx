import React, { useState } from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Classes = () => {
  const [classes, setClasses] = useState([
    { id: 1, className: "Math 101" },
    { id: 2, className: "Science 101" },
  ]);

      const [showForm, setShowForm] = useState(false);
      const [showEditForm, setShowEditForm] = useState(false);
      const [formData, setFormData] = useState({
        classname: '',
      roomno: '',
        //rollNo: '',
        //fatherName: '',
        //className: '',
      });
      
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, e.g., adding the student to a list.
        console.log('New student added:', formData);
        // After submitting, reset form and hide it
        setFormData({
          classname: '',
          roomno: '',
          //subject: '',
          //email: '',
          //salary: '',
        });
        setShowForm(false);
      };

      const handleUpdateFormSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, e.g., adding the student to a list.
        console.log('New student added:', formData);
        // After submitting, reset form and hide it
        setFormData({
          classname: '',
          roomno: '',
          //subject: '',
          //email: '',
          //salary: '',
        });
        setShowForm(false);
      };
 

  return (
   
    <div className="p-6 bg-gray-100 min-h-screen">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-semibold text-gray-800">Manage Classes</h1>
      <button onClick={() => setShowForm(true)} className=" bg-blue-400 hover:bg-blue-500 w-24 text-center font-bold text-white h-8 rounded-lg  ">Add <ControlPointIcon/></button>
    </div>

        {/* Overlay for Background Blur */}
        {showForm && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}

    {/* Add Student Form */}
    {showForm && (
        <div className="top-8 mt-18 z-50 left-47 md:left-[38%] w-96 absolute bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">Add New Classes</h2>
          <form onSubmit={handleFormSubmit}>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Room No</label>
              <input
                type="text"
                name="name"
                value={formData.roomno}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Class Name</label>
              <input
                type="text"
                name="name"
                value={formData.classname}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            {/* <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="fatherName"
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                name="className"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Salary</label>
              <input
                type="text"
                name="rollNo"
                value={formData.salary}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div> */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Add Class
              </button>
            </div>
          </form>
        </div>   
      )}

       {/* Overlay for Background Blur for edit */}
       {showEditForm && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}

    {/* Add Student Form  for edit form*/}
    {showEditForm && (
        <div className="top-8 mt-18 z-50 left-47 md:left-[38%] w-96 absolute bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">Update Classes</h2>
          <form onSubmit={handleUpdateFormSubmit}>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Room No</label>
              <input
                type="text"
                name="name"
                value={formData.roomno}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Class Name</label>
              <input
                type="text"
                name="name"
                value={formData.classname}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            {/* <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="fatherName"
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                name="className"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Salary</label>
              <input
                type="text"
                name="rollNo"
                value={formData.salary}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div> */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                update
              </button>
            </div>
          </form>
        </div>   
      )}


    {/* Table */}
    <div className="mt-6 bg-white shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="hover:bg-gray-300">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SNO</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">class Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 hover:bg-gray-300">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">01</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">101</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Math</td>
                     
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
            <div className="flex gap-3">
              <button onClick={() => setShowEditForm(true)} className="cursor-pointer text-blue-400"><EditIcon/></button>
              <button className="cursor-pointer text-red-500"><DeleteIcon/></button>
            </div>  
            </td>
          </tr>
          {/* More rows */}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Classes;
