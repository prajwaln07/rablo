import  { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import Spinner from '../components/Spinner'
import Footer from '../components/Footer'

import Hero from '../components/Hero'

//import initializeMainScript from '../script/mainFunction'
import axios from 'axios';



export default function HomePage() {
  
  //home pages
  const [categories, setCategories] = useState([]);
  

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/categories');
      setCategories(response.data);
      console.log('Categories API Response:', response.data);
    } catch (error) {
      handleFetchError('categories', error);
    }
  };





  const handleFetchError = (type, error) => {
    console.error(`Error fetching ${type}:`, error);
  };

  useEffect(() => {
    // Initialize your main script when the component mounts
    // initializeMainScript();

    fetchCategories();
  }, []);




  return (
    <div>
      <Spinner/>

      <NavBar/>

      <Hero/>

      <Footer/>




    </div>
  )
}
