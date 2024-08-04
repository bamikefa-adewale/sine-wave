import SineAnimation from "./component/SineAnimation";
import SineWave from "./component/SineWave";

function App() {
  return (
    <>
      <div className=" p-3 container bg-slate-800 md:w-[80%] mx-auto  w-screen  ">
        <div className="text-white font-semibold justify-center text-center">
          <h6>Sine Wave from 180° to 360°</h6>
          <p>Group 8</p>
        </div>

        <div className="">
          <SineWave />
          <SineAnimation />
        </div>
      </div>
    </>
  );
}

export default App;
