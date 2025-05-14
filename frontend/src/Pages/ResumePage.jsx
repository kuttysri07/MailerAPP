import { useState, useEffect } from "react";
import axios from "axios";
import "./resume.css";
import { APP_LINK } from "../../config";

const ResumePage = () => {
  const [resumes, setResumes] = useState([]);
  const [form, setForm] = useState({ name: "", link: "" });

  

  const fetchResumes = async () => {
    const res = await axios.get(`${APP_LINK}/api/getall`);
    setResumes(res.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = async () => {
    if (!form.name || !form.link) return alert("All fields are required");
    await axios.post(`${APP_LINK}/api/add`, form);
    setForm({ name: "", link: "" });
    fetchResumes();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${APP_LINK}/api/${id}`);
    fetchResumes();
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <div className="resume-container">
      <h2>Resume Manager</h2>

      <div className="resume-form">
        <input
          type="text"
          name="name"
          placeholder="Resume Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="link"
          placeholder="Resume Link"
          value={form.link}
          onChange={handleChange}
        />
        <button onClick={handleCreate}>Create</button>
      </div>

      <div className="resume-list">
        {resumes.map((resume) => (
          <div key={resume._id} className="resume-item">
            <p><strong>{resume.name}</strong></p>
            <a href={resume.link} target="_blank" rel="noopener noreferrer">View</a>
            <button onClick={() => handleDelete(resume._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
