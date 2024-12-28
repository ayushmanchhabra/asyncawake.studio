import { StyledEngineProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home, Post } from "./screens";

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
        </Routes>
      </Router>
    </StyledEngineProvider>
  )
}

export default App
