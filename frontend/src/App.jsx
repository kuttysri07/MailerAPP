import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import ResumePage from "./Pages/ResumePage";
import AppliedPage from "./Pages/AppliedPage";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/resumes" element={<ResumePage />} />
        <Route path="/applied" element={<AppliedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
