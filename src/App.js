import "./styles.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function App() {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const currentTime = dayjs().unix();
    const localTime = JSON.parse(localStorage.getItem("storedTime"))?.time;
    console.log(currentTime, localTime);
    console.log(dayjs(currentTime).isAfter(localTime));
    console.log(currentTime - localTime);
    setDisabled(currentTime - localTime > 86400 ? false : true);
  }, []);

  const handleClick = () => {
    localStorage.setItem(
      "storedTime",
      JSON.stringify({ time: dayjs().unix() })
    );
  };

  return (
    <div className="App">
      <h1></h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleClick}>Set Time</button>

      <button disabled={disabled}>disabled button</button>
    </div>
  );
}
