import React from 'react'
import './topic.scss'
import Navbar from '../components/Navbar'

const topics = [
  { icon: "⚡", name: "JavaScript",      count: "2.1M repos", tag: "Most Popular" },
  { icon: "🔷", name: "TypeScript",      count: "890K repos",  tag: "Trending"     },
  { icon: "⚛️", name: "React",           count: "760K repos",  tag: "Frontend"     },
  { icon: "🐍", name: "Python",          count: "1.8M repos",  tag: "Data & AI"    },
  { icon: "☕", name: "Java",            count: "980K repos",  tag: "Backend"      },
  { icon: "🟢", name: "Node.js",         count: "540K repos",  tag: "Backend"      },
  { icon: "🎨", name: "Vue.js",          count: "320K repos",  tag: "Frontend"     },
  { icon: "🤖", name: "Machine Learning",count: "430K repos",  tag: "AI"           },
  { icon: "❤️", name: "Laravel",         count: "210K repos",  tag: "PHP"          },
];

const Topics = () => {
   return (
    <> 
    <Navbar/>
    <section className="topics">
 
      <div className="topics-header">
        <h2>🏷 Browse Topics</h2>
        <p>Choose our favourite language</p>
      </div>
 
      <div className="topics-grid">
        {topics.map((topic) => (
          <div className="topic-card" key={topic.name}>
            <span className="topic-icon">{topic.icon}</span>
            <h3>{topic.name}</h3>
            <p>{topic.count}</p>
            <span className="topic-tag">{topic.tag}</span>
          </div>
        ))}
      </div>
 
    </section>
    </>
  );

}

export default Topics