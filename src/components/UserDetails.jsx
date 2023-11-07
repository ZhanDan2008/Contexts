import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [oneUser, setOneUser] = useState(null);
  const { id } = useParams();
  console.log(id, "param");
  useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setOneUser(data));
    }, 1500);
  }, []);
  console.log(oneUser);
  return (
    <div>
      {oneUser ? (
        <div>
          <h3>Name: {oneUser.name}</h3>
          <h4>Job: {oneUser.company.name}</h4>
          <a target="_blank" href={`mailto:${oneUser.email}`}>
            Write a message in email
          </a>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default UserDetails;
