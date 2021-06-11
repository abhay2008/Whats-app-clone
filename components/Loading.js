import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center className="grid place-items-center h-screen">
      <div>
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
          className="h-52 mb-3"
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
