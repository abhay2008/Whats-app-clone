import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center className="grid place-items-center h-screen">
      <div>
        <img
          src="https://cdn.icon-icons.com/icons2/1875/PNG/512/chat_120238.png"
          className="h-52 mb-3"
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
