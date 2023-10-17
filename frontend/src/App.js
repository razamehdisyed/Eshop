import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      <Footer />
    </div>
    </Router >
  );
}

export default App;
