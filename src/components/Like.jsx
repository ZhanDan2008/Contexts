import React, { useState } from "react";

export default function Like() {
  const [like, setLike] = useState(false);

  return <h2 onClick={() => setLike(!like)}>Like: {like ? "❤️" : "💙"}</h2>;
}
