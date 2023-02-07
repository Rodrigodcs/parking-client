//import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

import TrafficScreen from "./TrafficScreen"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<TrafficScreen />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
