import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import { UserContext } from "../Context/User";
import ErrorPage from "./ErrorPage";

export const NavBar = () => {
  const { isLoggedIn } = useContext(UserContext);
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) return <ErrorPage error={error} />;

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <div>
          <Link to="/">
            <h1 className="site-header">Shrelly Mail Online</h1>
          </Link>
          <h6>
            <Link to="/login">Sign In/Out</Link>{" "}
            {isLoggedIn && isLoggedIn.username}
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
