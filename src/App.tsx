import { StyledEngineProvider } from "@mui/material";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Author, Home, Post } from "./screens";

import './App.css'

function App() {

  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route
            element={<Home />}
            path='/'
          />
          <Route
            element={<Post />}
            path='/post'
          >
            <Route
              element={<Post />}
              path=':date'
            />
          </Route>
          <Route
            element={<Author />}
            path='/author'
          >
            <Route
              element={<Author />}
              path=':name'
            />
          </Route>
        </Routes>
      </Router>
    </StyledEngineProvider>
  )
}

export default App
