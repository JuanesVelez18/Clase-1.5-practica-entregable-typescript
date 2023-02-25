import { useState } from "react";

import "./App.css";
import friendsList from "./assets/friendsJs.json";
import Card from "./components/Card/Card";

function App() {
  const [visibleFriend, setVisibleFriend] = useState(0);

  const changeFriend = () => {
    const newVisibleFriend = visibleFriend + 1;

    if (newVisibleFriend === friendsList.length) setVisibleFriend(0);
    else setVisibleFriend(newVisibleFriend);
  };

  return (
    <div className="App">
      <h1>Javascript y sus amigos</h1>
      <Card friend={friendsList[visibleFriend]} changeFriend={changeFriend} />
    </div>
  );
}

export default App;
