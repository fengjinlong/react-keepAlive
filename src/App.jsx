import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { KeepAlive, keepAliveTransfer } from "./KeepAlive";
const AliveHome = keepAliveTransfer(Home, "home");
const AliveAbout = keepAliveTransfer(About, "about");
function App() {
  return (
    <BrowserRouter>
      <KeepAlive>
        <h3>
          下面是 切换
          <span style={{ color: "red" }}>keepAlive 包裹的组件 </span> 的按钮
        </h3>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
        <h3>
          下面是 切换<span style={{ color: "green" }}>普通的组件 </span> 的按钮
        </h3>
        <button>
          <Link to="/noCache">Home-noCache</Link>
        </button>
        <button>
          <Link to="/about-noCache">About-noCache</Link>
        </button>
        <Routes>
          <Route path="/" element={<AliveHome />} />
          <Route path="/about" element={<AliveAbout />} />
          <Route path="/noCache" element={<Home />} />
          <Route path="/about-noCache" element={<About />} />
        </Routes>
      </KeepAlive>
    </BrowserRouter>
  );
}

export default App;
