import { useEffect, useState } from "react";
import "./form.css";
import axios from "axios";
import { APP_LINK } from "../../../config";
import { toast } from "react-toastify";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    position: "",
    companyName: "",
    companyEmail: "",
    resumeLink: "",
  });

  const [resumes, setResumes] = useState([]);
  const [loading , setLoading] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;

    setData((perv) => ({
      ...perv,
      [name]: value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post(`${APP_LINK}/api/send`, data);
      console.log("Success:", response.data);
      setData({
        name: "",
        position: "",
        companyName: "",
        companyEmail: "",
        resumeLink: "",
      });
      setLoading(false);
      toast.success("Email Sent Successfully")
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const fetchResumes = async () => {
    try {
      const response = await axios.get(`${APP_LINK}/api/getall`);
      console.log(response.data);
      setResumes(response.data);
      toast.success("Server Connected Successfully")
    } catch (error) {
      console.log("Error fetching resumes:", error);
      toast.loading("Wait For Server Connection")
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  if(loading) {
    return <div className="loader-container">
  <div className="loader"></div>
</div>


  }

  return (
    <div className="contact-container">
      <h2 className="contact-title">Send Instant Mail</h2>
      <form onSubmit={handelSubmit} className="contact-form">
        <div className="row">
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Name"
            onChange={handelChange}
          />
          <input
            type="text"
            name="position"
            value={data.position}
            placeholder="Appling Position"
            onChange={handelChange}
          />
        </div>
        <div className="row">
          <input
            type="text"
            name="companyName"
            value={data.companyName}
            placeholder="Company Name"
            onChange={handelChange}
          />
          <input
            type="email"
            name="companyEmail"
            value={data.companyEmail}
            placeholder="Company Email"
            onChange={handelChange}
          />
        </div>
        <select
          name="resumeLink"
          value={data.resumeLink}
          onChange={handelChange}
        >
          <option value="">Select Resume</option>
          {resumes.map((resume) => (
            <option key={resume._id} value={resume.link}>
              {resume.name}
            </option>
          ))}
        </select>

        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
