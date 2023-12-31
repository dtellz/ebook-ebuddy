import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import { Button, TextField, Box, OutlinedInput } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';

const Input = styled('input')({
  display: 'none',
});

function App() {
  const [file, setFile] = useState('');
  const [isFileLoaded, setIsFileLoaded] = useState(false);
  const [textFieldWidth, setTextFieldWidth] = useState(13);

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let doc = event.target.files![0];
    if (!isFileLoaded) setTextFieldWidth(Math.min(doc.name.length, 30));
    setFile(doc ? doc.name : '');
    setIsFileLoaded(true);
    // Send file to backend
    const formData = new FormData();
    formData.append('file', doc);
    const serverResponse = await axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('DEBUG -> ', serverResponse);
  }

  const onFileUpload = () => {
    console.log('Uploading file')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Upload your ePub file to start chating with your new 🤖 eBuddy 🤖!
        </p>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="contained-button-file">
            <Input
              accept=".epub"
              id="contained-button-file"
              type="file"
              onChange={onFileChange}
            />
            <Button variant="contained" component="span" sx={{ color: 'white', bgcolor: '#1976d2' }}>
              Upload
            </Button>
          </label>
          <Box sx={{ ml: 2 }}>
            <TextField
              disabled
              id="outlined-disabled"
              label="Selected file"
              variant="outlined"
              value={file}
              InputProps={{
                style: {
                  color: "white !important",
                  width: `${textFieldWidth}ch`,
                  maxWidth: "450px"
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'white',
                },
                '& .MuiInputLabel-outlined': {
                  color: 'white',
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-input': {
                  color: 'white !important',
                  '-webkit-text-fill-color': 'white !important',
                },
              }}
            />
          </Box>
        </Box>
      </header>
    </div>
  );
}

export default App;
