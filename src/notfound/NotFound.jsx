import React from "react";
import { useNavigate } from "react-router-dom";
import "./notfound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="notfound">

      <div className="notfound-icon">404</div>

      <h2>User Not Found</h2>

      <p>The username does not exist on GitHub.</p>

      <button onClick={() => navigate("/")}>
        ← Return to Home
      </button>

    </section>
  );
};

export default NotFound;