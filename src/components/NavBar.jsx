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
      <ul>
        <h3>
          <Link to="/" className="nav-link">
            HOME
          </Link>
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`} className="nav-link">
                  {topic.slug}
                </Link>
              </li>
            );
          })}
          | My Profile
        </h3>
      </ul>
    </nav>
  );
};
