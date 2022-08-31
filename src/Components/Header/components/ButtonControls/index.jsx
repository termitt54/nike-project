import React from "react";
import './index.scss';
import accountIcon from "../../../../assets/icon/account_icon.svg"
import cartIcon from "../../../../assets/icon/basket_icon.svg"

export const ButtonControls = ({cart, cartActive, setCartActive}) => {
    return (
        <div className="header__controls"> 
            <button className="btn btn_account"><img src={accountIcon} alt="" /></button>
            <button onClick={() => setCartActive(true)} className="btn btn_cart"><img src={cartIcon} alt="" /> <span className={cart.length === 0 ? "btn__empty" : "btn__count"}>{cart.length}</span></button>
        </div>
    )
}