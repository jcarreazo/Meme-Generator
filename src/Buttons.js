import React from 'react';
let array = [
  {
    number: 0,
    url: 'https://www.developerway.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyt_logo_rgb_dark.81490556.png&w=128&q=75',
  },
];
export default function Buttons(props) {
  const [content, setContent] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bgw.jpg',
  });
  async function fetchingSteam() {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const movies = await response.json();
    return movies;
  }
  async function handle() {
    await fetchingSteam().then((movies) => {
      array = movies.data.memes;
    });
    const random = Math.floor(Math.random() * array.length);
    await setContent((prevArray) => {
      return {
        ...prevArray,
        randomImage: array[random].url,
      };
    });
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
      <div style={{ backgroundImage: content }} className="ImageContainer">
        <p className="content-1">{setContent.topText}</p>
        <img src={content.randomImage} alt="meme" className="Image" />
        <p className="content-2">{setContent.bottomText}</p>
      </div>
    </div>
  );
}
