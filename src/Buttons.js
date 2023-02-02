import React from 'react';

export default function Buttons(props) {
  return (
    <div>
      <div className="ButtonsContainer">
        <div className="InputContainer">
          <input type="text" className="Input-1" />
          <input type="text" className="Input-2" />
        </div>
        <input
          type="submit"
          className="SubmitButton"
          value="Get a new meme image"
        />
      </div>
    </div>
  );
}
