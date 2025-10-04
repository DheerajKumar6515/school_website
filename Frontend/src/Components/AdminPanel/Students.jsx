import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


function Students() {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    age: '',
    fatherName: '',
    className: '',
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
      name: '',
      rollNo: '',
      age: '',
      fatherName: '',
      className: '',
      admissiondate: '',
      admissionFee: '',
    });
    setShowForm(false);
  };

  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., adding the student to a list.
    console.log('New student added:', formData);
    // After submitting, reset form and hide it
    setFormData({
      name: '',
      rollNo: '',
      age: '',
      fatherName: '',
      className: '',
      admissiondate: '',
      admissionFee: '',
    });
    setShowForm(false);
  };



  return (
  
    <div className="px-6 relative bg-gray-100 min-h-screen">

    <div className="flex py-5 justify-between items-center">
      <h1 className="text-3xl font-semibold text-gray-800">Students</h1>
       <button  onClick={() => setShowForm(true)} className=" bg-blue-400 hover:bg-blue-500 w-24 text-center font-bold text-white h-8 rounded-lg  ">Add <ControlPointIcon/></button>
    </div>

    {/* Overlay for Background Blur */}
    {showForm && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}

    {/* Add Student Form */}
    {showForm && (
        <div className="top-2  z-50 left-28 md:left-[38%] w-96 absolute bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">Add New Student</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Roll No.</label>
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                 placeholder="01"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                 placeholder="xyz"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="text"
                name="name"
                value={formData.age}
                 placeholder=" Student age"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                 placeholder="xyz"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Class</label>
              <input
                type="text"
                name="className"
                value={formData.className}
                onChange={handleInputChange}
                 placeholder="1st to 12th"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Admission Date</label>
              <input
                type="text"
                name="className"
                 placeholder="day-month-year"
                value={formData.admissiondate}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Total Admission Fee</label>
              <input
                type="text"
                name="className"
                value={formData.admissionFee}
                onChange={handleInputChange}
                 placeholder="xyz"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Add Student
              </button>
            </div>
          </form>
        </div>   
      )}

       {/* Overlay for Background Blur for update form */}
    {showEditForm && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}

      {/* Edit Student Form */}
     {showEditForm && (
        <div className="top-2  z-50 left-28 md:left-[38%] w-96 absolute bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">Update Student</h2>
          <form onSubmit={handleUpdateFormSubmit}>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Roll No.</label>
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleInputChange}
                 placeholder="01"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                 placeholder="xyz"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="text"
                name="name"
                value={formData.age}
                onChange={handleInputChange}
                 placeholder="Student age"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                 placeholder="xyz"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Class</label>
              <input
                type="text"
                name="className"
                value={formData.className}
                 placeholder="1st to 12th"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Admission Date</label>
              <input
                type="text"
                name="className"
                value={formData.admissiondate}
                placeholder="day-month-year"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Total Admission Fee</label>
              <input
                type="text"
                name="className"
                value={formData.admissionFee}
                 placeholder="xyz"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Update Student
              </button>
            </div>
          </form>
        </div>   
           )}
   
      

    {/* Table */}
    <div className="mt-2 bg-white shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="hover:bg-gray-300">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">SNO.</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Roll No.</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Father Name</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Class</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Admission Date</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 hover:bg-gray-300">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">01</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Raju</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10th</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01-02-2022</td>
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

  
  )
}

export default Students
