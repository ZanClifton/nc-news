import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

export const NavBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <div>
          <Link to="/">
            <h1 className="site-header">Shrelly Mail Online</h1>
          </Link>
        </div>
        <div className="nav-links">
          {topics.map((topic) => {
            return (
              <li className="nav-item" key={topic.slug}>
                <Link to={`/topics/${topic.slug}`} className="nav-link">
                  {topic.slug}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
};
