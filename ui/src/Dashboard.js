import React, { useState } from "react";
import axios from "axios";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Upload failed!");
    }
  };

  return (
    <>
    <ResponsiveAppBar/>
    <div>
      <h1 >AI POWERED DOCUMENT SUMMARISER</h1>
      <h2>Upload a Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
    </div>
    </>
  );
}

export default App;
