import { useState } from "react";
const Home = () => {
  const [data, setData] = useState("home");
  console.log("home render");
  return (
    <div className="home">
      <h1>{data}</h1>
      <button onClick={() => setData("首页")}>btn</button>
    </div>
  );
};
export default Home;
