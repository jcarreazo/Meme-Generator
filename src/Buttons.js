import React from 'react';

export default function Buttons(props) {
  function handle() {
    console.log('IS OVER ANAKIN!');
  }
  return (
    <div>
      <div className="ButtonsContainer">
        <div className="InputContainer">
          <input type="text" className="Input-1" />
          <input type="text" className="Input-2" />
        </div>
        <button onMouseEnter={handle} className="SubmitButton">
          "Get a new meme image 🖼️"
        </button>
      </div>
    </div>
  );
}
