import React, { useState, ChangeEvent } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [dataRows, setDataRows] = useState<
    { a: string; b: string; c: string; inputValue: string }[]
  >([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (
    event: ChangeEvent<HTMLSelectElement>,
    name: string
  ) => {
    const { value } = event.target;
    if (name === "a") {
      setA(value);
    } else if (name === "b") {
      setB(value);
    } else if (name === "c") {
      setC(value);
    }
  };

  const handleSubmit = () => {
    const newRow = { a, b, c, inputValue };
    setDataRows((prevDataRows) => [...prevDataRows, newRow]);
    setInputValue("");
    setA("");
    setB("");
    setC("");
  };

  return (
    <div className="container">
      <div className="border-container">
        <div className="inputs">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your name"
            className="form-control"
          />

          <select
            className="form-select"
            name="a"
            value={a}
            onChange={(event) => handleSelectChange(event, "a")}
          >
            <option value="">Select Product</option>
            <option value="Shoes">Shoes</option>
            <option value="T-shirt">T-shirt</option>
            <option value="Necklaces">Necklaces</option>
          </select>

          <select
            className="form-select"
            name="b"
            value={b}
            onChange={(event) => handleSelectChange(event, "b")}
          >
            <option value="">Select Age</option>
            <option value="10-20">10-20</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
          </select>

          <select
            className="form-select"
            name="c"
            value={c}
            onChange={(event) => handleSelectChange(event, "c")}
          >
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <button
          className="btn btn-primary submit-button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {dataRows.length > 0 && (
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Product</th>
              <th>Age</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, index) => (
              <tr key={index}>
                <td>{row.inputValue}</td>
                <td>{row.a}</td>
                <td>{row.b}</td>
                <td>{row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;