import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

const AddBooks = () => {

  const [formData, setFormData] = useState({
    bookName: '',
    authorName: '',
    releaseYear: '',
    charges: '',
    quantities: '',
    bookImg: null
  });


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const upload_img = (e) => {
    setFormData({
      ...formData,
      bookImg: e.target.files[0]
    })
  }

  const submitData = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append all form fields to the FormData object
    for (const key in formData) {
      data.append(key, formData[key]);
    }


    try {
      const response = await axios.post('http://localhost:5050/library/books/addBook', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data, "all data");
    } catch (error) {
      console.error('Error uploading file:', error);
    }

  }

  return (
    <div className="book_form d-flex align-items-center justify-content-center">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
        className='book-form'
        onSubmit={submitData}
      >
        <TextField id="standard-basic" label="Enter Book Name:" variant="standard" name='bookName' value={formData.bookName} onChange={handleInputChange} />
        <TextField id="standard-basic" label="Enter Author Name:" variant="standard" name='authorName' value={formData.authorName} onChange={handleInputChange} />
        <TextField id="standard-basic" label="Enter Relese Year:" variant="standard" name='releaseYear' value={formData.releaseYear} onChange={handleInputChange} />
        <TextField id="standard-basic" label="Enter Charges:" variant="standard" name='charge' value={formData.charge} onChange={handleInputChange} />
        <TextField id="standard-basic" label="Enter Quntities:" variant="standard" name='quntity' value={formData.quntity} onChange={handleInputChange} />
        <input type='file' onChange={upload_img} name='bookImg' ></input>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" type='submit' style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: '#333'
          }}>
            Submit
          </Button>
        </Stack>
      </Box>
    </div>
  )
}

export default AddBooks
