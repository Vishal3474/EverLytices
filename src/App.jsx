import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";



import Test2 from "./Test2";
import Test1 from "./Test1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/test1" />} />
      <Route path="/" element={<MainLayout />}>

        <Route path="Test1" element={<Test1 />} />
        <Route path="Test2" element={<Test2 />} />
      </Route>
    </Routes>
  );
}

export default App;
