import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/
const Navigation = () => {
    return (
    <div>
        <div>
            <Link to="/home">Home Page</Link>   
        </div>

        <div>
            <Link to ="/Character">Character</Link>
        </div>

        <div>
            <Link to ="/Location">Location</Link>
        </div>

        <div>
            <Link to ="/Episode">Episode</Link>
        </div>
    </div>
    ); 
}; 
export default function TabNav() {

};
