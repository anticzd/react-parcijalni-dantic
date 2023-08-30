import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import "./App.css";
import Account from "./components/Account";
import Repositories from "./components/Repositories";

function App() {
  const [searchUser, setSearchUser] = useState("");
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  function searchItem() {
    if (searchUser.trim() === "") {
      alert("Enter some text");
    }

    fetch(`https://api.github.com/users/${searchUser}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });

    fetch(`https://api.github.com/users/${searchUser}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  }

  function resetItem() {
    setUser(null);
    setRepositories([]);
  }

  return (
    <div className="main-screen">
      <h1>GitHub username:</h1>
      <p>
        <input
          type="text"
          value={searchUser}
          placeholder="e.g.instagram"
          onChange={(e) => setSearchUser(e.target.value)}
        />
      </p>
      <Button variant="secondary" onClick={searchItem}>
        Search!
      </Button>
      {user !== null && (
        <Account
          avatarURL={user.avatar_url}
          name={user.name}
          location={user.location}
          bio={user.bio}
        />
      )}
      {repositories.length > 0 && <Repositories repositories={repositories} />}
      {user !== null && (
        <Button variant="secondary" onClick={resetItem}>
          Reset
        </Button>
      )}
    </div>
  );
}

export default App;
