import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
  duration: 1500,
  dismissible: true,
  position: {
    x: "right",
    y: "top",
  },
});

function SingleColor({ weight, type, hexColor }) {
  const hexValue = `#${hexColor}`;
  const copyToClipBoard = () => {
    notyf.success("Color copied to clipboard!");
    navigator.clipboard.writeText(hexValue);
  };
  return (
    <>
      <div
        className={`color ${type === "shade" && "color-light"}`}
        style={{ backgroundColor: `#${hexColor}` }}
        onClick={copyToClipBoard}
      >
        <p>{weight}%</p>
        <p>{hexValue}</p>
      </div>
    </>
  );
}

export default SingleColor;
