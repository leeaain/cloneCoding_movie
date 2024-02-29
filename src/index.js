import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./routes/Nav";
import Detail from "./routes/Detail";

const root = createRoot(document.getElementById("root"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Nav />
//         <Home />
//       </div>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <div>
//         <Nav />
//         <About />
//       </div>
//     ),
//   },
//   {
//     path: "/movie-detail",
//     element: (
//       <div>
//         <Nav />
//         <Detail />
//       </div>
//     ),
//   },
// ]);
// root.render(<App />); // 맨첨 코드

root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie-detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);
