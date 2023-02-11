import React, { useState, useEffect } from "react";
import InputControl from "./InputControl";

function CrackInput() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [sumArray, setSumArray] = useState([]);

  const addValues = () => {
    const sum = parseInt(input1) + parseInt(input2);
    setSumArray([...sumArray, sum]);
  };

  const findAverage = () => {
    if (sumArray.length === 0) return 0;
    return sumArray.reduce((a, b) => a + b) / sumArray.length;
  };

  let condition = "";
  if (0 < findAverage() && findAverage() <= 2) {
    condition = "Mild";
  } else if (2 < findAverage() && findAverage() <= 4) {
    condition = "Moderate";
  } else if (4 < findAverage() && findAverage() <= 6) {
    condition = "Severe";
  } else if (6 < findAverage() && findAverage() <= 8) {
    condition = "Very Severe";
  } else if (8 < findAverage() && findAverage() <= 10) {
    condition = "Extreme";
  } else {
    condition = "";
  }

  return (
    <>
      <table>
        <tr>
          <th>Element No</th>
          <th>Crack Length</th>
        </tr>
        <tr>
          <td>
            <InputControl
              onChange={(e) => setInput1(e.target.value)}
              value={input1}
            />
          </td>
          <td>
            <InputControl
              onChange={(e) => setInput2(e.target.value)}
              value={input2}
            />
          </td>
          <td>
            <button
              onClick={() => {
                addValues();
                //add element instead of time
                // setBarChart((prev) => [...prev, { test: test, ph: ph }])
                //   setCTotal((prev) => [
                //     ...prev,
                //     parseInt(elementNo) + parseInt(crackLength),
                //   ]);
                //   setVelues((prev) => ({ ...prev, totalCrackValue: cTotal }));
                setInput1(0);
                setInput2(0);

                // const tempDetail = {
                //   totalCrackValue: values.totalCrackValue,
                // }

                // const tempDetails = [...information[sections.cracksInfo]?.details];
                // tempDetails[activeDetailIndex] = tempDetail;

                // props.setInformation((prev) => ({
                //   ...prev,
                //   [sections.cracksInfo] : {
                //     ...prev[sections.cracksInfo],
                //     details: tempDetails,
                //     sectionTitle,
                //   }
                // }))
              }}
            >
              Add
            </button>
          </td>
        </tr>
        <tr>
          {" "}
          <p>Average: {findAverage()}</p>
        </tr>
        <tr> Condition: {condition}</tr>
      </table>
    </>
  );
}

export default CrackInput;
