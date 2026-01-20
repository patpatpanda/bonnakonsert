import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saloon from "./pages/Saloon";
import Catering from "./pages/Catering";
import Booking from "./pages/Booking";
import Burgers from "./pages/Burgers";
import Footer from "./components/Footer";
import Burgare from "./pages/Burgare";
import Karta from "./pages/Karta";

import CateringBooking from "./pages/CateringBooking";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saloon" element={<Saloon />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/burgers" element={<Burgers />} />
            <Route path="/cateringbooking" element={<CateringBooking />} />
            <Route path="/burgare" element={<Burgare />} />
            <Route path="/karta" element={<Karta />} />


          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
