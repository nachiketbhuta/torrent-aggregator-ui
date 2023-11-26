import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/results" element={<SearchResults />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
