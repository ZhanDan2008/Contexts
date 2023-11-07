import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);
  return (
    <div>
      <h2>Users list:</h2>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UsersPage;
