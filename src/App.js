import React, { useState } from "react";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import "./styles/style.scss"
import boots from "./assets/img/AirEdge270.png";
import { Content } from "./Components/Content";
import { Cart } from "./Components/Cart";

function App() {
  const [cartActive, setCartActive] = useState(false)
  const [card, setCard] = useState({
    subtitle: "Men's Shoe",
    title: "Nike Air Edge 270",
    describtion: "The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens.",
    picture: <img className="card__img" src={boots} alt="" />,
    price: 95.97
  })
  const [cart, setCart] = useState([])
  const [addToCart, setAddToCart] = useState()
  const addItemToCart = (newItem) => {
    setCart([...cart, newItem])
  }

  const [colorValue, setColorValue] = useState()
  const color = (e) => {
    setColorValue(e)
  }
  const [sizeValue, setSizeValue] = useState()
  const size = (e) => {
    setSizeValue(e)
  }

  console.log(card.picture)

  return (
    <div className="App">
      <Header cart={cart} cartActive={cartActive} setCartActive={setCartActive}/>
      <Content card={card} setColorValue={color} setSizeValue={size}/>
      <Footer card={card} addItem={addItemToCart} colorValue={colorValue} sizeValue={sizeValue}/>
      <Cart active={cartActive} setActive={setCartActive} cart={cart}/>
    </div>
  );
}

export default App;
