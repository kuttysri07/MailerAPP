import { useState, useEffect } from "react";
import axios from "axios";
import "./appliedPage.css";
import { APP_LINK } from "../../config.js";

const AppliedPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${APP_LINK}/api/all`);
      console.log(response.data);
      
      setApplications(response.data.fetchAllapplies);
    } catch (err) {
      setError("Failed to fetch applications.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  if (loading) return <div className="loading">Loading applications...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="card-container">
      {applications?.map((app) => (
        <div key={app._id} className="job-card">
          <h2 className="job-position">{app.position}</h2>
          <p>
            <strong>Name:</strong> {app.name}
          </p>
          <p>
            <strong>Company:</strong> {app.companyName}
          </p>
          <p>
            <strong>Email:</strong> {app.companyEmail}
          </p>
          <p>
            <strong>Applied At:</strong>{" "}
            {new Date(app.sentAt).toLocaleString()}
          </p>
          <a
            href={app.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            View Resume
          </a>
        </div>
      ))}
    </div>
  );
};

export default AppliedPage;
