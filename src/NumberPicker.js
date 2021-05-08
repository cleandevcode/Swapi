import React, { useState } from "react";
import UpArrow from "./UpArrow.svg";
import DownArrow from "./DownArrow.svg";
import useKeyPress from "./UseKeypress";

const NumberPicker = (props) => {
  console.log("props--->", props);
  const [value, setValue] = useState(props.value);

  useKeyPress("Keyup", () => {
    if (props.focused) {
      add();
    }
  });

  useKeyPress("Keydown", () => {
    if (props.focused) {
      minus();
    }
  });

  const add = () => {
    setValue(value + 1);
    props.setValue(value + 1);
  };

  const minus = () => {
    if (value > 1) {
      setValue(value - 1);
      props.setValue(value - 1);
    }
  };

  if (props.visible) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={UpArrow} onClick={add} style={{ width: 8 }} />
        <img src={DownArrow} onClick={minus} style={{ width: 8 }} />
      </div>
    );
  } else {
    return <></>;
  }
};

export default NumberPicker;
