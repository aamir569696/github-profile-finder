import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
import Topics from "./pages/Topics";
import Trending from "./pages/Trending";
import ProfileCard from './components/Profile/ProfileCard'
import { GithubProvider } from "./context/GithubContext";

const App = () => {
  return (
   
   <GithubProvider>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/profile" element={<ProfileCard/>}> </Route>
    </Routes>
     
    </GithubProvider>

  );
};

export default App;
