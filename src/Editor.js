import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import MicSVG from "../../assets/images/mic.svg";
// import CalendarSVG from "../../assets/images/calendar.svg";

import NumberPicker from "./NumberPicker";

const medicationOpt = ["chocolate", "strawberry", "vanilla"];

const durationOpt = [
  { value: 10, label: "10 Days" },
  { value: 30, label: "30 Days" },
  { value: 60, label: "60 Days" }
];

const quantityOpt = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" }
];

const refillOpt = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" }
];

const CustomInput = React.forwardRef((props, ref) => {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>", props);
  return (
    <div className="customDatePickContent">
      <label onClick={props.onClick} ref={ref}>
        {props.value || props.placeholder}
      </label>
      {/* <img src={CalendarSVG} onClick={props.onClick} /> */}
    </div>
  );
});

const Editor = () => {
  const [state, setState] = useState({
    medication: null,
    duration: 0,
    quantity: 0,
    refills: 0,
    instructions: null,
    notes: null
  });

  const [focus, setFocus] = useState("");

  const [startDate, setStartDate] = useState("2021-05-07");
  const [endDate, setEndDate] = useState(null);

  const [visible, setVisible] = useState(false);

  console.log(typeof startDate);

  const handleChange = (name, data) => {
    setState({ ...state, [name]: data });
  };

  console.log(">>>>>>>>>>>>>>>>>>>>>>>", state.instructions);
  console.log("<<<<<<<<<<<<<<<<<<<<<<<<", state.notes);

  const handleChangeNumber = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleChangeText = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSetForcus = (value) => {
    setFocus(value);
  };

  const onTouchMove = (e) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    setVisible(true);
  };

  const submit = () => {};

  const [medicine, setMedicine] = useState("testtest");

  const handleChangeSelect = (e) => {
    setMedicine(e.target.value);
  };

  return (
    <>
      <div className="page-header">
        <h3 className="page-title">Summary</h3>
        <button className="submitBtn" onClick={submit}>
          <span className="btn-icon">C</span>Continue
        </button>
      </div>
      <div className="home-edit-board d-flex flex-column">
        <div className="d-flex align-items-center mb-2">
          <span className="mr-2">Medication : </span>
          <select onChange={handleChangeSelect} value={medicine}>
            {medicationOpt.map((item, idx) => (
              <option value={item} key={idx}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex align-items-center mb-2">
          <span className="mr-2">Duration : </span>
          <Select
            value={state.duration}
            onChange={(data) => handleChange("duration", data)}
            options={durationOpt}
            name="duration"
          />
        </div>
        <div
          className="d-flex align-items-center mb-2"
          onMouseMove={() => setVisible(true)}
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(true)}
          onMouseOut={() => setVisible(false)}
          style={{ background: "red" }}
        >
          <span className="mr-2">Quantity : </span> {state.quantity}
          <NumberPicker
            value={state.quantity}
            focused={focus == "quantity" ? true : false}
            setValue={(value) => handleChangeNumber("quantity", value)}
            visible={visible}
          />
        </div>
        <div className="d-flex align-items-center mb-2">
          <span className="mr-2">Refills : </span>
          <Select
            value={state.refills}
            onChange={(data) => handleChange("refills", data)}
            options={refillOpt}
            name="refills"
          />
        </div>
        <div className="d-flex align-items-center mb-2">
          <div className="d-flex align-items-center mr-3">
            <span className="mr-2">Start Date: </span>
            <div className="datePickerContent">
              {/* <DatePicker
                selected={startDate}
                name="startDate"
                onChange={(date) => {
                  setStartDate(date);
                }}
                customInput={CustomInput}
              /> */}
              <label for="start">Start date:</label>

              <input
                type="date"
                id="start"
                name="trip-start"
                value={startDate}
                onChange={(date) => {
                  console.log(">>>>>>>>>>>>>", date.target.value);
                  setStartDate(date.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="d-flex align-items-center mr-3">
            <span className="mr-2">End Date: </span>
            <div className="datePickerContent">
              {/* <DatePicker
                selected={endDate}
                name="endDate"
                onChange={(date) => {
                  setEndDate(date);
                }}
                customInput={CustomInput}
              /> */}
            </div>
          </div>
        </div>
        <div className="w-100 p-10 bg-grey">
          <p>Medication</p>
          <div className="d-flex align-items-center">
            <input
              value={state.instructions}
              onChange={handleChangeText}
              name="instructions"
            />
            {/* <img src={MicSVG} /> */}
          </div>
        </div>
        <div className="w-100 p-10 bg-grey">
          <p>Notes</p>
          <div
            className="d-flex align-items-center h-100 "
            style={{ height: 100 }}
          >
            <input
              value={state.notes}
              onChange={handleChangeText}
              name="notes"
            />
            {/* <img src={MicSVG} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
