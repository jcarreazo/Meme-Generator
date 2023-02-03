import React from 'react';
var url = '';

export default function Image(props) {
  return (
    <div className="ImageContainer">
      <img src={url} alt="meme" className="Image" />
    </div>
  );
}
