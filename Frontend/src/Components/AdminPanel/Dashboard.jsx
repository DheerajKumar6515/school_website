import React from "react";

import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import Groups2Icon from '@mui/icons-material/Groups2';
import Piechart from "../Charts/Piechart";
import LineChart from "../Charts/Linechart";


 const Dashboard = () => {
  return (
    <div>
    <div className="mt-5">
      {/* <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">

        <div className="bg-radial-[at_10%_75%] from-[#fc9957] to-white flex w-80 h-40 shadow-lg shadow-[#fc9957ab] rounded-3xl p-5
        ">
          <div className="w-48 flex flex-col-reverse justify-center gap-5">
          <h3 className="text-xs font-medium text-white">Students</h3>
          <p className="text-3xl text-white font-bold">150</p>
          </div>
          <div className="w-32 flex items-center justify-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white">
              <h1 className="text-[#fc9957]">
              <SchoolIcon/>
              </h1>
              </div>
            </div>         
        </div>

        <div className="bg-radial-[at_10%_75%] from-[#7c76dc] to-white flex w-80 h-40 shadow-lg shadow-[#7c76dc9c] rounded-3xl p-5">
          <div className="w-48 flex flex-col-reverse justify-center gap-5">
          <h3 className="text-xs font-medium text-white">Teachers</h3>
          <p className="text-3xl text-white font-bold">30</p>
          </div>
          <div className="w-32 flex items-center justify-center">
            <div className="w-24 h-24 flex items-center text-[#7c76dc] justify-center rounded-full bg-white"><GroupIcon/></div>
            </div>         
        </div>

        <div className="bg-radial-[at_10%_75%] from-[#08b1d5] to-white flex w-80 h-40 shadow-lg shadow-[#08b1d1ba] rounded-3xl p-5">
          <div className="w-48 flex flex-col-reverse justify-center gap-5">
          <h3 className="text-xs font-medium text-white">Classes</h3>
          <p className="text-3xl text-white font-bold">10</p>
          </div>
          <div className="w-32 flex items-center justify-center">
            <div className="w-24 h-24 flex items-center text-[#08b1d5] justify-center rounded-full bg-white"><HomeIcon/></div>
            </div>         
        </div>

        <div className="bg-radial-[at_10%_75%] from-[#48569ac7] to-white flex w-80 h-40 shadow-lg shadow-[#48569aab] rounded-3xl p-5">
          <div className="w-48 flex flex-col-reverse justify-center gap-5">
          <h3 className="text-xs font-medium text-white">Staff</h3>
          <p className="text-3xl text-white font-bold">10</p>
          </div>
          <div className="w-32 flex items-center justify-center">
            <div className="w-24 h-24 flex items-center text-[#48569ac7] justify-center rounded-full bg-white"><Groups2Icon/></div>
            </div>         
        </div>
          
      </div>
    </div>

     {/* for grapgh */}
     <div className="mt-5">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className="bg-white  shadow-lg rounded-lg p-6 ">
           <LineChart/>
        </div>
        <div className="bg-white  shadow-lg rounded-lg p-6">
           <Piechart/>
        </div>
        {/* <div className="bg-white w-80 shadow-lg rounded-lg p-6">
           <Calender/>
        </div> */}
        
      </div>
    </div>


    </div>
  );
};

export default Dashboard




