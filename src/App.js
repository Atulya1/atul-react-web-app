import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Labs from "./labs";
import HomeComponent from "./tuiter/home";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index element={<Labs/>}/>
            <Route path="/hello" element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;

