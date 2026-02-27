import { useState } from "react";
import axios from "axios";

function Upload() {

  const [data, setData] = useState({
    title: "",
    description: "",
    host: "",
    audioUrl: "",
    thumbnail: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/podcasts", data);
    alert("🎉 Podcast Uploaded Successfully");
  };

  return (
    <div className="upload-container">
      <h1>🎬 Upload New Podcast</h1>

      <form onSubmit={handleSubmit} className="upload-form">
        <input name="title" placeholder="Podcast Title" onChange={handleChange} />
        <input name="host" placeholder="Host Name" onChange={handleChange} />
        <input name="audioUrl" placeholder="Audio URL" onChange={handleChange} />
        <input name="thumbnail" placeholder="Thumbnail URL" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>

        <button type="submit">Upload Podcast</button>
      </form>
    </div>
  );
}

export default Upload;