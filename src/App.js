import React, { useState, useEffect } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Header from './ui/components/header/Header';
import Home from "./ui/components/home/Home";
import AddressCheck from "./ui/components/address-check/AddressCheck";
import CityAndState from "./ui/components/city-state/CityAndState";
import Document from "./ui/components/document/Document";
import Footer from "./ui/components/footer/Footer";
import './App.css';

export default function App() {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="mainContainer" data-theme={darkMode ? "light" : "dark"}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addresscheck" component={AddressCheck} />
        <Route exact path="/cityandstate" component={CityAndState} />
        <Route exact path="/documents" component={Document} />
      </Switch>
      <Footer />
    </div>
  );
}