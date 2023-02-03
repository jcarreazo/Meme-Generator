import React from 'react';
var Logo =
  'https://www.seekpng.com/png/small/57-576320_rage-guy-png-svg-black-and-white-stock.png';
export default function Header(props) {
  return (
    <div>
      <div className="HeaderContainer">
        <img src={Logo} alt="logo" className="Logo" />
        <p className="TextHeader">Meme Generator</p>
      </div>
    </div>
  );
}
