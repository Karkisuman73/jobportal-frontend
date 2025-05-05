import './App.css';
import Apply from './components/Apply';
import DetailsOfJob from './Pages/DetailsOfJob';
import Explore from './Pages/Explore';
import Header from './components/Header';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import PopularCategory from './components/PopularCategory';
import PromotedCompanies from './components/PromotedCompanies';
import {  Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import PostJob from "./Pages/PostJob"
import { useEffect, useState } from 'react';
import axios from 'axios';
import AdvanceSearch from './components/AdvanceSearch';
import Footer from './components/Footer';


function App() {
const [user,setUser]=useState(null)
// const navigate=useNavigate()


   useEffect(() => {
      const token = localStorage.getItem("token");
    
      const verify = async () => {
        try {
          const response = await axios.post("http://localhost:3001/verify", {}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response.data)
          
        

          setUser(response?.data?.user)
        } catch (err) {
          console.log(err);
        }
      };
      
      verify();

    }, []);
    console.log(user)
   

  return (
    
    <>
    
    <Navbar user={user} />
      
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/explore" element={<Explore />} />
        <Route path="/details/:id" element={<DetailsOfJob/>}/>
        <Route path='/apply/:id' element={<Apply/>}/>
        <Route path='/PostJob' element={<PostJob/>}/>
        <Route path='/advancesearch' element={<AdvanceSearch/>}/>
        <Route
          path="/"
          element={
            <>
              <Header />
              <PopularCategory />
              <PromotedCompanies />
              
          
            </>
            
          }
        />
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
