import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import { UserContext } from "../Context/User";

export const NavBar = () => {
  const [topics, setTopics] = useState([]);
  const { isLoggedIn } = useContext(UserContext);

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
          {console.log(isLoggedIn, "<< NavBar")}
          <h6>
            <Link to="/login">Sign In/Out</Link> {isLoggedIn.username}
          </h6>
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
