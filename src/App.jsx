import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Calendar from "./pages/Calendar";
import Speakers from "./pages/Speakers";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Layout from "./components/Layout";
import './index.css'


function App() {


  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Layout>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </Layout>
      </div>
    </Router>
  )
}

export default App
