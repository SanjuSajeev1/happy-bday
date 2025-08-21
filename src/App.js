import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Proposal from "./components/Proposal";
import Yes from "./components/Yes";
import EnvelopeAnimation from "./components/EnvelopeAnimation";
import LoveStory from "./components/LoveStory";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/love-story" replace />} />
        <Route path="/env" element={<EnvelopeAnimation />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/yes" element={<Yes />} />
        <Route path="/love-story" element={<LoveStory />} />
      </Routes>
    </Router>
  );
};

export default App;
