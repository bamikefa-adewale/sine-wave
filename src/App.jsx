import "./App.css";
import SineAnimation from "./component/SineAnimation";
import SineWave from "./component/SineWave";

function App() {
  return (
    <>
      <div className="">
        {" "}
        <h6 className="  text-2xl text-customCyan">
          Sine Wave from 180° to 360°
        </h6>
        <p className="text-customCyan font-semibold">Group 8</p>
        <div className="max-w-lg mx-auto p-4">
          <SineWave />
          <SineAnimation />
        </div>
      </div>
    </>
  );
}

export default App;
