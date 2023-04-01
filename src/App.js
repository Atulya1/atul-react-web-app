import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import HelloWorld from "./labs/a6/HelloWorld";
import Tuiter from "./tuiter";
import Labs from "./labs";
function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Routes>
              <Route path="/*" element={<Labs/>}/>
              <Route path="/hello" element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;

