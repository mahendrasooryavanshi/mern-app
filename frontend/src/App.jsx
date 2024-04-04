import Header from "./components/Header/Header";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Service from "./components/Service/Service";
import Client from "./components/client/Client";
import Work from "./components/Work/Work";
import Team from "./components/Team/Team";
import Footer from "./components/footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/register/Register";
import Page404 from "./components/404page/Page404";
import Contact from "./components/contact/Contact";
import Index from "./components/Home/Index";
import Login from "./components/login/Login";
import Dashboard from "./components/User/dashboard/Dashboard";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  let token = localStorage.getItem("token");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        transition={Flip}
        draggable={true}
        style={{
          width: "25%",
        }}
        toastStyle={{
          filter: "drop-shadow(5px 5px 8px rgb(104, 97, 119))",
        }}
        autoClose={3000}
      />
      <Footer />
    </>
  );
}

export default App;
