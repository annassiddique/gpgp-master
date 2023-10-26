import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { News } from "./pages/News";
import NewsDetail from "./components/news/NewsDetail";
import NewsCategoryList from "./components/news/NewsCategoryList";
import { NewsLayout } from "./components/news/NewsLayout";
import Contribute from "./pages/Contribute";
import InvitationArtist from "./pages/InvitationArtist";
import InvitationSponsor from "./pages/InvitationSponsor";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App= () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/news" element={<NewsLayout />}>
           <Route index element={<News />} />
           <Route path=":id" element={<NewsDetail />} />
           <Route path="category/:categoryId" element={<NewsCategoryList />} />
        </Route>
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/contribute/inviteArtist" element={<InvitationArtist />} />
        <Route path="/contribute/inviteSponsor" element={<InvitationSponsor />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
