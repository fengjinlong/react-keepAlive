import { useState } from "react";
const About = () => {
  const [data, setData] = useState(1);
  return (
    <div>
      <h1>{data}</h1>
      <input
        type="text"
        value={data}
        onInput={(e) => setData(e.target.value)}
      />
    </div>
  );
};
export default About;
