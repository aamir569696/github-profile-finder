import React, { useContext, useEffect, useState } from "react";
import "./ProfileCard.scss";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import GithubContext from "../../context/GithubContext";
import NotFound from "../../notfound/NotFound";


const ProfileCard = () => {
  const { userdata } = useContext(GithubContext);
  const navigate = useNavigate();
  
if (!userdata || Object.keys(userdata).length === 0) {
   return <NotFound/>
 
}

  return (
    <>

      <Navbar></Navbar>
      <button className="back-search" onClick={() => navigate("/")}>
        ↩ Back To search
      </button>

      <div className="card">
        <div className="card-left">
          <img className="profile-image" src={userdata.avatar_url} alt="" />
          <h2 className="Profile-name">{userdata.name}</h2>
          <p className="location">location: {userdata.location} </p>
        </div>

        <div className="card-right">
          <div className="bio">
            <span className="bold">Bio: </span>
            {userdata.bio}
          </div>

          <a href={userdata.html_url} target="_blank" rel="noreferrer">
            <button>Visit Github Profile</button>
          </a>
          <p>
            <span className="bold">username:</span> {userdata.login}
          </p>
          <p>
            <span>
              <span className="bold">website: </span>
              {userdata.blog}
            </span>
          </p>
        </div>
      </div>

      <div className="card-bottom">
        <div className="card-two">
          <div className="follwers">Follwers: {userdata.followers}</div>
          <div className="follwing">Follweing: {userdata.following}</div>
          <div className="repos">Public Repos: {userdata.public_repos}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
