import React, { useEffect, useState } from "react";

const Home = () => {
  const [number, setNumber] = useState(0);

  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    console.log("hello");
  });

  return (
    <div style={{ display: "flex", gap: "200px" }}>
      <button onClick={() => setNumber(number + 1)}>plus</button>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number - 1)}>minus</button>

      <button onClick={() => setNumber2(number2 + 1)}>plus</button>
      <h2>{number2}</h2>
      <button onClick={() => setNumber2(number2 - 1)}>minus</button>
    </div>
  );
};

export default Home;
