import { StyledEngineProvider } from "@mui/material";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Author, Home, Post, Zettel } from "./screens";

import './App.css'

function App() {

  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/post" element={<Post />} />
          <Route path="/blog/post/:date" element={<Post />} />

          <Route path="/blog/author" element={<Author />} />
          <Route path="/blog/author/:name" element={<Author />} />

          <Route path="/service/zk/:hash?" element={<Zettel />} />
          {/* <Route path="/service/zk/:hash" element={<Zettel />} /> */}
        </Routes>
      </Router>
    </StyledEngineProvider>
  )
}

export default App
