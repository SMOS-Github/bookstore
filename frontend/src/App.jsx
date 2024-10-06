import { Route, Routes } from "react-router-dom";

import Home from "./home/Home";
import Course from "./component/Course";
import Signup from "./component/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup/>} />
       
      </Routes>
    </>
  );
}

export default App;
