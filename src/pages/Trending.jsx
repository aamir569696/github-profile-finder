import React from "react";
import "./trending.scss";
import Navbar from "../components/Navbar";

const developers = [
  {
    rank: "01",
    emoji: "👨‍💻",
    name: "Dan Abramov",
    handle: "gaearon",
    bio: "Working on React · Co-author of Redux",
    badge: "🔥 Hot",
    lang: "JavaScript",
    stars: "87k",
  },
  {
    rank: "02",
    emoji: "🧑‍🔬",
    name: "Sindre Sorhus",
    handle: "sindresorhus",
    bio: "Full-time open-sourcerer · 1000+ npm packages",
    badge: "↑ Rising",
    lang: "TypeScript",
    stars: "145k",
  },
  {
    rank: "03",
    emoji: "🎯",
    name: "TJ Holowaychuk",
    handle: "tj",
    bio: "Creator of Express.js · Koa · Apex",
    badge: "✦ New",
    lang: "Go",
    stars: "62k",
  },
  {
    rank: "04",
    emoji: "🚀",
    name: "Evan You",
    handle: "yyx990803",
    bio: "Creator of Vue.js & Vite",
    badge: "↑ Rising",
    lang: "JavaScript",
    stars: "98k",
  },
  {
    rank: "05",
    emoji: "⚡",
    name: "Linus Torvalds",
    handle: "torvalds",
    bio: "Creator of Linux & Git",
    badge: "🔥 Hot",
    lang: "C",
    stars: "220k",
  },
];

const Trending = () => {
  return (
    <>
      <Navbar />
      <section className="trending">
        <div className="trending-header">
          <h2>🔥 Trending Developers</h2>
          <p>This weak popular GitHub developers</p>
        </div>

        <div className="dev-list">
          {developers.map((dev) => (
            <div className="dev-card" key={dev.handle}>
              <span className="dev-rank">{dev.rank}</span>

              <div className="dev-avatar">{dev.emoji}</div>

              <div className="dev-info">
                <h3>{dev.name}</h3>
                <span className="dev-handle">@{dev.handle}</span>
                <p>{dev.bio}</p>
              </div>

              <div className="dev-right">
                <span className="dev-badge">{dev.badge}</span>
                <span className="dev-lang">{dev.lang}</span>
                <span className="dev-stars">★ {dev.stars}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Trending;
