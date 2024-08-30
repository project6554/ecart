import React , {useState, useEffect}from 'react'

import axios, { AxiosError } from 'axios'
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import { set } from 'react-hook-form'

const Products = () => { 
    
   
    const [items, setItems] = useState([]);




    const [loading, setLoading] = useState(true); // To handle loading state
    const [error, setError] = useState(null); // To handle errors

    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
          try {
            // Make the HTTP request
            const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API URL
            

            
            // Check if response is okay (status code in the range 200-299)
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse the JSON data
            const result = await response.json();
            
            // Update state with the fetched data
            setItems(result);
            setLoading(false);
          } catch (error) {
            // Handle errors and update state
            setError(error);
            setLoading(false);
          }
        };
    
        // Call the fetch function
        fetchData();
      }, []); // Empty dependency array means this effect runs once when the component mounts
    
      // Render loading, error, or data based on the state
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
    
    return (
        <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {items.map(item => (
          <div className="col mb-5" key={item.id}>
            <div className="card h-100">
              <img className="card-img-top" src={item.image} alt={item.title} />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{item.title}</h5>
                  ${item.price}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

