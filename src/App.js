import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const iRunOnlyOnce = () => {
    console.log("i run only once."); 
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
    if(keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword);
    }
  },[keyword]);
  return (
    <div>
      <input 
      value={keyword}
      type="text" 
      placeholder="Search here..." 
      onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
