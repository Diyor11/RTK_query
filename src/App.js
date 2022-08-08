import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" replace element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
