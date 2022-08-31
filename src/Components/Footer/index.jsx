import React from "react";
import './index.scss';

export const Footer = ({card, addItem, colorValue, sizeValue}) => {
    const addItemToCart = (e) => {
        const newItem = e
        addItem(newItem)
      }

      let price = card.price
      let title = card.title
      let color = colorValue
      let size = sizeValue
      let picture = card.picture

    return (
        <section className="footer">
            <div className="footer__bar">
                <button className="btn btn_prev">prev</button>
                <button className="btn btn_next">next</button>
            </div>
            <button onClick={(e) => addItemToCart({price, title, color, size, picture})} className="btn btn_buy">add to cart — ${card.price}</button>
        </section>
    )
}