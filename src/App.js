import React from "react";
import { Route } from 'react-router-dom'; 



import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <TabNav />
    
      <Route exact path ="/" component = {WelcomePage} />
      <Route path ="/Character" component = {CharacterList} />
      <Route path ="/Location" component = {LocationsList} />
      <Route path ="/Episode" component = {EpisodeList} />

    </main>
  );
}
