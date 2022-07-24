import React, { useState } from "react";
import userIcon from "../../../assests/icon/account_icon.svg"
import basketIcon from "../../../assests/icon/basket_icon.svg"
import Basket from "../Basket";

import './index.scss'

const HeaderControls = () => {

    const [basketActive, setBasketActive] = useState(true);

    return (
        <div className="header__button">
            <button className="btn header__button-user">
                <img className="icon icon_user" src={userIcon} alt="" />
            </button>
            <button className='btn header__button-basket' onClick={() => setBasketActive(true)}>
                <img className="icon icon_basket" src={basketIcon} alt="" />

                <span className="btn__count">2</span>
            </button>

            <Basket active={basketActive} setActive={setBasketActive} />
        </div>
    )
}

export default HeaderControls;