"use client";
import React, { useState } from "react";
type UserType = {
  name: string;
  sessionId: number;
};

const UseStateExample = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };
  return (
    <div className="useStateExample">
      {user ? (
        `${user.name} logged in`
      ) : (
        <form>
          <input type="text" placeholder="username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>
      )}
      {user?.name}
    </div>
  );
};

export default UseStateExample;
