import React from "react";
import ReactDom from 'react-dom';
import MainJSApp from "./components/App";

it ('renders without crashing',()=>{
    const div = document.createElement('div');
    ReactDom.render(<MainJSApp/>,div);
    ReactDom.unmountComponentAtNode(div);
});