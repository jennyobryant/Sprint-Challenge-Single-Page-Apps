import React from "react";
import { Route } from 'react-router-dom'; 

import '.App.css'; 

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <Navigation />

      <Route path ="/Character" Comoponent = {CharacterList} />
      <Route path ="/Location" Component = {LocationsList} />
      <Route path ="/EpisodeList" Component = {EpisodeList} />

    </main>
  );
}
