import React, { useState } from 'react';
import { useRef } from 'react';
import Papa from 'papaparse';
import product from './product.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import axios from 'axios';



const AddNewProducts = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const requiredFields = ['unique_number', 'name', 'selling_price', 'land_price'];
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setError(null); // Clear any previous errors
  };

  const handleCancel = () => {
     fileInputRef.current.value = null;
     setFile(null);
     return;
  }

  const alertClose = () => {
    if(error) {
      setError(null);
    }
    return;
  }

  const handleUpload = () => {
    setIsLoading(true);
    setError(null); // Clear any previous errors
    console.log(!file);
    if (!file) {
      setError('Please select a CSV file to upload.');
      setIsLoading(false);
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const header = results.meta.fields;
        const missingFields = requiredFields.filter((field) => !header.includes(field));
        // if(missingFields.length > 0) {
        //   setError(`Missing required fields: ${missingFields.join(', ')}`);
        //   return;
        // }
        axios.post('http://localhost:8000/api/addNewProducts', results.data,
        {
          headers: {
            'Content-Type': 'application/json, multipart/form-data', // Adjust content type as needed (e.g., multipart/form-data for file uploads)
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include authorization token if applicable
            // Add any other custom headers required by your Laravel API
          },
        })
          .then((response) => {
            console.log('API response:', response.data);
          })
          .catch((error) => {
            console.error('API request error:', error.message);
          });
        console.log(results.data);
        setData(results.data);
        setIsLoading(false);
      },
      error: (error) => {
        setError(error.message);
        setIsLoading(false);
      },
    });
  };

  return (
    <div className={product.addProducts}>
      <form onSubmit={(e) => e.preventDefault()} enctype="multiple/form-data">
      <div class="form-group form-outline mb-4">
          <label for="productsFile" class="me-2 col-form-label">Upload File</label>
          <input type="file" ref={fileInputRef} id="productsFile" accept=".csv, .xlsx" onChange={handleFileChange} placeholder="Upload File" class="form-control-file"/>
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <button type="button" disabled={isLoading} onClick={handleUpload} class={["btn-outline-primary", "btn-sm","btn","me-2"].join(' ')}>
          {isLoading ? 'Uploading...' : 'Upload CSV'}
        </button>
        <button type="button" onClick={handleCancel} class="btn btn-outline-danger btn-sm">Cancel</button>
        {error && 
        <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
          {error}
          <button type="button" class="btn-close" onClick={alertClose} aria-label="Close">
          </button>
        </div>}
      </form>
    </div>
  );
};
  
  export default AddNewProducts;