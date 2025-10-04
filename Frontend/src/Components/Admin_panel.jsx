import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Siderbar from './AdminPanel/Sidebar'
import Dashboard from './AdminPanel/Dashboard'
import Students from './AdminPanel/Students'
import Settings from './AdminPanel/Settings'
import Classes from './AdminPanel//Classes'
import TeacherList from './AdminPanel/TeacherList';
import Staff from './AdminPanel/Staff';


function Admin_panel() {
  return (
    <>
     <Box sx={{ display: 'flex' }}>
     <Siderbar/>
     
    <div className='w-full px-2 mt-16 bg-gray-100'>
      <Routes>
        <Route path='/' exact element={<Dashboard/>} />
        <Route path='/Students' exact element={<Students/>} />
        <Route path='/Teachers' exact element={<TeacherList/>} />
        <Route path='/Classes' exact element={<Classes/>} />
        <Route path='/staff' exact element={<Staff/>} />
        <Route path='/Settings' exact element={<Settings/>} />
      </Routes>
    </div>
      
     </Box>
    </>
  )
}

export default Admin_panel

