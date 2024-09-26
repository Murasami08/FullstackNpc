import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import  Employe  from '../components/Employe';
import Departments from '../components/Departments';

const Home = ()=>{
    return (
        <div>
         <Router>
             <nav>
                 <ul>
                     <li><Link className='link' to="/">Home</Link></li>
                     <li><Link className='link' to="/employees">Employees</Link></li>
                     <li><Link className='link' to="/departments">Departments</Link></li>
                 </ul>
             </nav>
             <main>
                 <Routes>
                     <Route path="employees" element={<Employe />} />
                     <Route path="departments" element={<Departments />} />
                 </Routes>
             </main>
         </Router>
        </div>
    )
}
export default Home;




