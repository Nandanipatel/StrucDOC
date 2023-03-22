import React, { useState, useEffect } from "react";
import InputControl from "./InputControl";

function ColumnInput({ activeInfo, sections, sectionTitle, information, activeDetailIndex, ...props }) {
  const [clValues, setClValues] = useState({});
  const [clData, setClData] = useState({});
  const [columnImages, setColumnImages] = useState([]);

  useEffect(() => {
    setClData({
      columnImg: activeInfo?.columnData?.columnImages || "",
      columnRemark: activeInfo?.columnData?.columnRemark || "",
      columnDisc: activeInfo?.columnData?.columnDisc || "",
    })
  }, [activeInfo])
  const handleColumnAdd = () => {
    const tempDetail = {
      columnImg: clValues.columnImg,
      columnRemark: clValues.columnRemark,
      columnDisc: clValues.columnDisc,
    }

    const tempDetails = [...information[sections.groundFloor]?.columnData];
        tempDetails[activeDetailIndex] = tempDetail;

    props.setInformation((prev) => ({
      ...prev,
      [sections.groundFloor]: {
        ...prev[sections.groundFloor],
        columnData: tempDetails,
        sectionTitle,
      },
    }));

  };

  return (
    <tr>
      <td>Columns</td>
      <td>
        <InputControl
          type="file"
          accept="image/*"
          placeholder="Select Image"
          onChange={(event) =>
            setColumnImages((prev) => ({
              ...prev,
              columnImg: URL.createObjectURL(event.target.files[0]),
            }))
          }
        />
      </td>
      <td>
        <InputControl
          placeholder="Enter Remarks"
          value={clValues.columnRemark}
          onChange={(event) =>
            setClValues((prev) => ({
              ...prev,
              columnRemark: event.target.value,
            }))
          }
        />
      </td>
      <td>
        <InputControl
          placeholder="Enter Description"
          value={clValues.columnMoisture}
          onChange={(event) =>
            setClValues((prev) => ({
              ...prev,
              columnDisc: event.target.value,
            }))
          }
        />
      </td>
      <td>
        <button onClick={handleColumnAdd}>Add</button>
      </td>
    </tr>
  );
}

export default ColumnInput;