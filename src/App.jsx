import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./index.css";

function App() {
  return (
    <Router>
      <Layout>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
