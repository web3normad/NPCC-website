import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Publications from "./pages/Publications";
import Members from "./pages/Members";
import Events from "./pages/Events";
import MembersArea from "./pages/MembersArea";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members-area" element={<MembersArea />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
