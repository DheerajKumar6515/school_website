import React,{useState} from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TeacherList = () => {

   const [showForm, setShowForm] = useState(false);
   const [showEditForm, setShowEditForm] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      rollNo: '',
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
        age: '',
        subject: '',
        email: '',
        fathername: '',
        joiningdate: '',
        salary: '',
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
        age: '',
        subject: '',
        email: '',
        fathername: '',
        joiningdate: '',
        salary: '',
      });
      setShowForm(false);
    };

  
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">Teachers</h1>
        <button  onClick={() => setShowForm(true)} className=" bg-blue-400 hover:bg-blue-500 w-24 text-center font-bold text-white h-8 rounded-lg  ">Add <ControlPointIcon/></button>
      </div>

       {/* Overlay for Background Blur */}
    {showForm && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}

    {/* Add Student Form */}
    {showForm && (
        <div className="top-2 mt-18 z-50 left-47 md:left-[38%] w-96 absolute bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">Add New Teacher</h2>
          <form onSubmit={handleFormSubmit}>
            
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
                 placeholder="0-60"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="fatherName"
                value={formData.subject}
                 placeholder="xyz"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                name="className"
                value={formData.email}
                 placeholder="abc123@gmail.com"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Father Name</label>
              <input
                type="text"
                name="className"
                value={formData.fathername}
                 placeholder="xyz"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Joining Date</label>
              <input
                type="text"
                name="className"
                value={formData.joiningdate}
                 placeholder="day-month-year"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Salary</label>
              <input
                type="text"
                name="rollNo"
                value={formData.salary}
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
                Add Teacher
              </button>
            </div>
          </form>
        </div>   
      )}

         {/* Overlay for Background Blur for update form */}
    {showEditForm && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}

    {/* update Student Form */}
    {showEditForm && (
        <div className="top-2 mt-18 z-50 left-47 md:left-[38%] w-96 absolute bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">Update Teacher</h2>
          <form onSubmit={handleUpdateFormSubmit}>
            
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
                placeholder="0-60"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="fatherName"
                placeholder="xyz"
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                name="className"
                value={formData.email}
                placeholder="abc123@gmail.com"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Father Name</label>
              <input
                type="text"
                name="className"
                value={formData.fathername}
                placeholder="xyz"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Joining Date</label>
              <input
                type="text"
                name="className"
                value={formData.joiningdate}
                placeholder="day-month-year"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Salary</label>
              <input
                type="text"
                name="rollNo"
                value={formData.salary}
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
                Update
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
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">SNO</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Father Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Joining Date</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Salary</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 hover:bg-gray-300">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">01</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">Mr. Smith</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">30</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Math</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">smith@mail.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">deepak singh</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">10-05-2000</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15,000</td>
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

export default TeacherList;
