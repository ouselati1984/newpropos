import logo from './logo.svg';
import React from "react";
import ItemList from './compo/ItemList';

import { Component } from 'react';

function App() {

  const ItemArray = [
  {
imgsrc :`https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg`,
name :`IPHONE 12`,
price :`1255,49$`,
  },
  {
imgsrc :`https://lh3.googleusercontent.com/3oKnbxCaRs6Oz2u9-tXQC0LCtdcu0OgXU9SpcUGBgtMu9xbVQ7sfhxif0zoQyQ7Ky6LrpIIp_C95OomncZ7jKro4_g=w640-h400-e365-rj-sc0x00ffffff`,
name :`BMW `,
price :`1255,49 $`


  },



]


  return (
    <div className="App">

  <ItemList ItemArray={ItemArray} />

    </div>
  );
}

export default App;
