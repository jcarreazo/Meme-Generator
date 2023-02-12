import React from 'react';
var url = '';
let array = '';
export default function Buttons(props) {
  async function fetchingSteam() {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const movies = await response.json();
    return movies;
  }

  async function handle() {
    fetchingSteam().then((movies) => {
      array = movies.data.memes;
    });
    fetchingSteam().then((movies) => {
      array = movies.data.memes;
    });

    const random = Math.floor(Math.random() * array.length);
    url = array[random].url;
    console.log(url);
  }
  return (
    <div className="App">
      <div className="ButtonsContainer">
        <div className="InputContainer">
          <input type="text" className="Input-1" />
          <input type="text" className="Input-2" />
        </div>
        <button onClick={handle} className="SubmitButton">
          "Get a new meme image 🖼️"
        </button>
      </div>
      <div className="ImageContainer">
        <img src={url} alt="meme" className="Image" />
      </div>
    </div>
  );
}
