import { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // for React, Vue and Svelte

const notyf = new Notyf({
  duration: 2000,
  dismissible: true,
  position: {
    x: "right",
    y: "top",
  },
});
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colors, setColors] = useState(new Values("#f47351").all());
  const handelChange = (e) => setColor(e.target.value);
  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      const listColors = new Values(color).all();
      setColors(listColors);
      setError(false);
    } catch (error) {
      setError(true);
      notyf.error(error.message);
    }
  };

  return (
    <>
      <div className="header-section">
        <h2>Color Generator</h2>
        <form>
          <input
            type="color"
            className="color-picker"
            onChange={handelChange}
          />
          <input
            type="text"
            placeholder="#F47351"
            className={error ? "error" : null}
            value={color}
            onChange={handelChange}
          />
          <button
            type="submit"
            style={{ backgroundColor: color }}
            onClick={handelSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="colors-section">
        {colors.map((color, i) => {
          return <SingleColor key={i} {...colors} hexColor={color.hex} />;
        })}
      </div>
    </>
  );
}

export default App;
