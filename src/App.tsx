import React, { useState } from "react";
import "./App.css"; // Assuming you have a file named App.css for your styles
import "bootstrap/dist/css/bootstrap.min.css"; // Import the Bootstrap CSS file

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [dataRows, setDataRows] = useState<{ a: string; b: string }[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === "a") {
      setA(value);
    } else if (name === "b") {
      setB(value);
    }
  };

  const handleSubmit = () => {
    const newRow = { a, b };
    setDataRows((prevDataRows) => [...prevDataRows, newRow]);
    setA("");
    setB("");
  };

  return (
    <div className="container">
      <div className="inputs">
        <select
          className="form-select"
          name="a"
          value={a}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        >
          <option value="">Select Age</option>
          <option value="10-20">10-20</option>
          <option value="20-30">20-30</option>
          <option value="30-40">30-40</option>
        </select>
      </div>

      <button className="btn btn-primary submit-button" onClick={handleSubmit}>
        Submit
      </button>

      {dataRows.length > 0 && (
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, index) => (
              <tr key={index}>
                <td>{row.a}</td>
                <td>{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
