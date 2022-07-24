import React from "react";
import ContentBottom from "./Bottom";
import Main from "./Content";

import './index.scss'

const Content = () => {
    return (
        <section className="content">
            <Main/>
            <ContentBottom/>
        </section>
    )
};

export default Content;