// ColorPalette.jsx
import React from "react";

function ColorPalette({ colors }) {
  return (
    <div className="color-palette">
      <table className="color-table">
        <thead>
          <tr>
            <th>Color</th>
            <th>Hex Code</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color, index) => (
            <tr key={index}>
              <td className="center-content">
                <div
                  className="color-box"
                  style={{ backgroundColor: color.hex }}
                ></div>
              </td>
              <td>{color.hex}</td>
              <td>{`${color.percentage}%`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ColorPalette;
