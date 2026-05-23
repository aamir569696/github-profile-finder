import React, { useContext, useState } from "react";
import "./hero.scss";
import { useNavigate } from "react-router-dom";
import GithubContext from "../context/GithubContext";

const Hero = () => {
  const { setUserData, setLoading, setError } = useContext(GithubContext);

  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  

  const fatchGithubUser = async () => {
    try {
      setLoading(true);
      setError("");
      let response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        const data = await response.json();
        setUserData(data);
        navigate("/profile");
      } else {
        setUserData(null);
        setError("User not found");
      }

      const data = await response.json();
      setUserData(data);

      navigate("/profile");
    } catch (error) {
      setError(error.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <>
      <section className="hero">
        <div className="badge">
          <span className="badge-dot">.</span>
          100M+ GitHub developers indexed
        </div>
        <h1>
          Find any <span className="highlight">GitHub</span>
          <br />
          profile instantly
        </h1>
        <p className="subtitle">
          Search developers by username, explore their repos, <br />{" "}
          contributions, and open-source footprint.
        </p>

        <div className="search-wrapper">
          <div className="search-box">
            <div className="search-icon">⌕</div>
            <input
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="search-input"
              placeholder="Enter username"
              type="text"
            />
            {/* <div ></div> */}
            <div onClick={fatchGithubUser} className="search-btn">
              Search
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="stat-item">
          <span className="stat-num">
            <span>100</span>
            M+
          </span>
          <span className="stat-label">Developer</span>
        </div>

        <div className="stat-item">
          <span className="stat-num">
            <span>330</span>
            M+
          </span>
          <span className="stat-label">Repositories</span>
        </div>

        <div className="stat-item">
          <span className="stat-num">
            <span>4</span>
            B+
          </span>
          <span className="stat-label">Contributions</span>
        </div>

        <div className="stat-item">
          <span className="stat-num">
            <span>500</span>
            M+
          </span>
          <span className="stat-label">Languages</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
