import React, { useState, useEffect } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Header from './ui/components/header/Header';
import AddressValidation from "./ui/components/address-validation/AddressValidation";
import Footer from "./ui/components/footer/Footer"

export default function App() {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="mainContainer" data-theme={darkMode ? "dark" : "light"}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Switch>
        <Route exact path="/" component={AddressValidation} />
      </Switch>
      <Footer />
    </div>
  );
}