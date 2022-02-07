import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const [game, setGame] = useState({
    gamename: '',
    gameauthor: '',
    gameprice: '',
    gametags: '',
    forkids: false,
    gamedesc: '',
    gamerating: '',
  });
  const [forkids, setForkids] = useState(false);
  useEffect(() => {
    getData(count);
  }, [count]);
  const fun2 = () => {};

  const handleChange = (e) => {
    let { gamename, gameauthor, gameprice, gametags, gamedesc, gamerating } =
      e.target;
    setGame([...game, primary]);
    console.log(game);
  };

  const getData = () => {
    fetch('http://localhost:3001/games')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setItems(res);
      });
    console.log(items);
  };

  const postData = ({ game }) => {
    fetch('http://localhost:3001/games', {
      method: 'POST',
      body: json.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      });
  };
  const sortByRating = () => {
    fetch('http://localhost:3001/games')
      .then((res) => res.json())
      .then((res) => {
        res.sort((a, b) => b.gamerating - a.gamerating);
        setItems(res);
      });
  };
  const sortByPrice = () => {
    fetch('http://localhost:3001/games')
      .then((res) => res.json())
      .then((res) => {
        res.sort((a, b) => b.gameprice - a.gameprice);
        setItems(res);
      });
  };

  return (
    <div>
      <h1>Games store management</h1>
      <form
        onSubmit={(game) => postData}
        onChange={handleChange}
        id="addgame"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="">game name: </label>
        <input type="text" id="gamename" required />
        <label htmlFor="">game author: </label>
        <input type="text" id="gameauthor" required />
        <label htmlFor="">game tags: </label>
        <input type="text" id="gametags" required />
        <label htmlFor="">game price: </label>
        <input type="number" id="gameprice" required />
        <label htmlFor="">forkids: </label>
        <input type="checkbox" id="forkids" />
        <label htmlFor="">game Description: </label>
        <textarea type="text" columns="10" rows="5" id="gamedesc" required />
        <label htmlFor="">Rating</label>
        <select name="" id="gamerating" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <button onClick={sortByRating}>Sort by rating</button>
      <button onClick={sortByPrice}>Sort by price</button>
      {items.map((item, index) => {
        <div>
          <h1>{item.gamename}</h1>
          <h1>{item.gameauthor}</h1>
          <h1>{item.tags}</h1>
          <h1>{item.gameprice}</h1>
          <h1>{item.forkids}</h1>
          <h1>{item.gamedesc}</h1>
          <h1>{item.gamerating}</h1>
        </div>;
      })}
    </div>
  );
}
