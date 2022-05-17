import { useEffect, useState, useContext } from "react";
import { getUsers } from "../utils/api";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/User";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const { setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
      setIsLoading(false);
      console.log(usersFromApi);
    });
  }, []);

  if (isLoading)
    return (
      <h2 className="article-head">I like that user. That is a nice user.</h2>
    );
  return (
    <>
      <ul className="user-container">
        <h2 className="article-head">Select A User</h2>
        <div className="user-list">
          {users.map((user) => {
            return (
              <li className="user-item" key={user.username}>
                {/* {user.username} */}
                <Link to="/">
                  <button
                    className="user-button"
                    onClick={() => setIsLoggedIn(user)}
                  >
                    {user.username}
                  </button>
                </Link>
                <Link to="/">
                  <button
                    className="user-button"
                    onClick={() => setIsLoggedIn("")}
                  >
                    ❌
                  </button>
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};
