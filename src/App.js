import "./common/basics.scss";
import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "../src/pages/Home";
import MovieDetails from "./pages/MovieDetails";
import MyMovie from "./pages/MyMovie";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/favorite" element={<MyMovie />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
