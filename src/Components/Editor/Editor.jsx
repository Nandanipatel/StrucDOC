import React, { useState, useEffect } from "react";
import InputControl from "../InputControl/InputControl";
import { XCircle, Save, PlusCircle } from "react-feather";
import style from "./Editor.module.css";
import CrackInput from "../InputControl/CrackInput";
import ColumnInput from "../InputControl/ColumnInput";

function Editor(props) {
  const sections = props.sections;

  const information = props.information;

  const [activeSecKey, setActiveSecKey] = useState(Object.keys(sections)[0]);

  const [activeInfo, setActiveInfo] = useState(
    information[sections[Object.keys(sections)[0]]]
  );

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  const [values, setVelues] = useState({});

  const [images, setImages] = useState({});

  // const [chartData, setChartData] = useState([]);

  const [time, setTime] = useState(0);
  const [data, setData] = useState(0);
  const [chart, setChart] = useState([{}]);
  const [test, setTest] = useState(0);
  const [ph, setPh] = useState(0);
  const [barchart, setBarChart] = useState([]);


  // Body components of editor part
  //****** basic info */
  const basicInfoBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Name of the client"
          placeholder="Enter your name"
          value={values.clientName}
          onChange={(event) =>
            setVelues((prev) => ({ ...prev, clientName: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Name of the Engineer"
          placeholder="Enter name of Engineer"
          value={values.engineerName}
          onChange={(event) =>
            setVelues((prev) => ({ ...prev, engineerName: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Date Of Monitoring"
        type="date"
        placeholder="Enter Current Date"
        value={values.monitoringDate}
        onChange={(event) =>
          setVelues((prev) => ({ ...prev, monitoringDate: event.target.value }))
        }
      />
      <div className={style.row}>
        <InputControl
          label="Enter the Location details"
          placeholder="Enter your location"
          value={values.location}
          onChange={(event) =>
            setVelues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>

      <div className={style.row}>
        <InputControl
          label="Type of Building"
          placeholder="Eg.----"
          value={values.buildingType}
          onChange={(event) =>
            setVelues((prev) => ({ ...prev, buildingType: event.target.value }))
          }
        />
        <InputControl
          label="Year Of Construction"
          placeholder="Eg. june-2001"
          value={values.constDate}
          onChange={(event) =>
            setVelues((prev) => ({ ...prev, constDate: event.target.value }))
          }
        />
      </div>

      <InputControl
        label="Prior Information"
        placeholder="Prior Information given by client to the engineer"
        value={values.priorInfo}
        onChange={(event) =>
          setVelues((prev) => ({ ...prev, priorInfo: event.target.value }))
        }
      />
      <div className={style.row}>
        <InputControl
          label="Area of Plot"
          placeholder="Eg. 100 Square Feet"
          value={values.plotArea}
          onChange={(event) =>
            setVelues((prev) => ({ ...prev, plotArea: event.target.value }))
          }
        />
        <InputControl
          label="Shape of Plot"
          placeholder="Eg. Square"
          value={values.plotShape}
          onChange={(event) =>
            setVelues((prev) => ({ ...prev, plotShape: event.target.value }))
          }
        />
      </div>

      <span>Approx Dimensions of building</span>
      <div className={style.row}>
        <table>
          <td>
            <td>Length</td>
            <td>
              <InputControl
                value={values.buildingLength}
                placeholder="Eg. 20m"
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    buildingLength: event.target.value,
                  }))
                }
              />
            </td>
            <td>Width</td>
            <td>
              <InputControl
                value={values.buildingWidth}
                placeholder="Eg. 20m"
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    buildingWidth: event.target.value,
                  }))
                }
              />
            </td>
            <td>Height</td>
            <td>
              <InputControl
                value={values.buildingHeight}
                placeholder="Eg. 20m"
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    buildingHeight: event.target.value,
                  }))
                }
              />
            </td>
          </td>
        </table>
      </div>

      <div className={style.row}>
        <InputControl
          label="Image of Structure"
          type="file"
          accept="image/*"
          placeholder="Select Image"
          onChange={(event) =>
            setImages((prev) => ({
              ...prev,
              planImg: URL.createObjectURL(event.target.files[0]),
            }))
          }
        />
        <InputControl
          label="Number of floors"
          placeholder="including ground floor "
          value={values.noOfFloors}
          onChange={(event) =>
            setVelues((prev) => ({ ...prev, noOfFloors: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Changes done in original structure"
          placeholder="YES/NO - If yes provide details"
          value={values.changesDone}
          onChange={(event) =>
            setVelues((prev) => ({ ...prev, changesDone: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Failures in structure or part of it, if any"
          value={values.failurePart}
          type="name"
          onChange={(event) =>
            setVelues((prev) => ({ ...prev, failurePart: event.target.value }))
          }
        />
        <InputControl
          label="Failure of adjoining structure, if any"
          value={values.failureAdjoining}
          onChange={(event) =>
            setVelues((prev) => ({
              ...prev,
              failureAdjoining: event.target.value,
            }))
          }
        />
      </div>
      <span>Maintanence details</span>
      <table>
        <tr>
          <td>Structural</td>
          <td>
            <InputControl
              value={values.structuralBM}
              onChange={(event) =>
                setVelues((prev) => ({
                  ...prev,
                  structuralBM: event.target.value,
                }))
              }
            />
          </td>
        </tr>
        <tr>
          <td>Non-Structural</td>
          <td>
            <InputControl
              value={values.nonStructuralBM}
              onChange={(event) =>
                setVelues((prev) => ({
                  ...prev,
                  nonStructuralBM: event.target.value,
                }))
              }
            />
          </td>
        </tr>
        <tr>
          <td>Water supply/sanitary</td>
          <td>
            <InputControl
              value={values.waterSupplyBM}
              onChange={(event) =>
                setVelues((prev) => ({
                  ...prev,
                  waterSupplyBM: event.target.value,
                }))
              }
            />
          </td>
        </tr>
      </table>
      {/* <span>Other Details</span>
      <table>
        <tr>
          <th>No.</th>
          <th>Name of person</th>
          <th>Position</th>
          <th>Contact</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <InputControl
              value={values.name1}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, name1: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              value={values.name2}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, name2: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              value={values.name3}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, name3: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              value={values.}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <InputControl
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <InputControl
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
          <td>
            <InputControl
              //   label="Failure of adjoining structure, if any"
              //   placeholder="Eg. Square"
              value={values.title}
              onChange={(event) =>
                setVelues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
          </td>
        </tr>
      </table> */}
    </div>
  );
  //****** technical details */
  const techDetailBody = (
    <div className={style.detail}>
      <div className={style.center}>Upload Available Documents</div>
      <InputControl
        label="Plan"
        type="file"
        accept="image/*"
        placeholder="Select Image"
        onChange={(event) =>
          setImages((prev) => ({
            ...prev,
            planImg: URL.createObjectURL(event.target.files[0]),
          }))
        }
      />
      <InputControl
        label="Elevation"
        type="file"
        accept="image/*"
        placeholder="Select Image"
        onChange={(event) =>
          setImages((prev) => ({
            ...prev,
            elevationImg: URL.createObjectURL(event.target.files[0]),
          }))
        }
      />
      <InputControl
        label="Cross section"
        type="file"
        accept="image/*"
        placeholder="Select Image"
        onChange={(event) =>
          setImages((prev) => ({
            ...prev,
            crossSecImg: URL.createObjectURL(event.target.files[0]),
          }))
        }
      />
      <InputControl
        label="Structural drawing"
        type="file"
        accept="image/*"
        placeholder="Select Image"
        onChange={(event) =>
          setImages((prev) => ({
            ...prev,
            struckDrawImg: URL.createObjectURL(event.target.files[0]),
          }))
        }
      />
      <InputControl
        label="Test report of materials"
        type="file"
        accept="image/*"
        placeholder="Select Image"
        onChange={(event) =>
          setImages((prev) => ({
            ...prev,
            testRepoImg: URL.createObjectURL(event.target.files[0]),
          }))
        }
      />

      <span>Maintenance Type</span>
      <div className={style.row}>
        <table>
          <tr>
            <td>Water Proofing</td>
            <td>
              <InputControl
                placeholder="Enter Frequency"
                value={values.waterProofingTM}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    waterProofingTM: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Plastering</td>
            <td>
              <InputControl
                placeholder="Enter Frequency"
                value={values.plasteringTM}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    plasteringTM: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Coloring</td>
            <td>
              <InputControl
                placeholder="Enter Frequency"
                value={values.coloringTM}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    coloringTM: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Strengthening</td>
            <td>
              <InputControl
                placeholder="Enter Frequency"
                value={values.strengtheningTM}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    strengtheningTM: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Water supply</td>
            <td>
              <InputControl
                placeholder="Enter Frequency"
                value={values.waterSupplyTM}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    waterSupplyTM: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Drainage</td>
            <td>
              <InputControl
                placeholder="Enter Frequency"
                value={values.drainageTM}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    drainageTM: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
        </table>
      </div>
      {/* <span>First time/Previous monitoring </span>
      <div className={style.row}>
        <table>
          <tr>
            <td>Date</td>
            <td>
              <InputControl
                value={values.endDate}
                type="date"
                placeholder="Enter date"
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    endDate: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Remarks</td>
            <td>
              <InputControl
                //   label="Failure of adjoining structure, if any"
                placeholder="Enter Remarks"
                value={values.title}
                onChange={(event) =>
                  setVelues((prev) => ({ ...prev, title: event.target.value }))
                }
              />
            </td>
          </tr>
        </table>
      </div> */}
      <InputControl
        label="Any structural defects observed"
        placeholder="Enter Your Remarks"
        value={values.struckRemark}
        onChange={(event) =>
          setVelues((prev) => ({ ...prev, struckRemark: event.target.value }))
        }
      />
    </div>
  );

  //****** Ground Floor */
  const groundFloorBody = (
    <div className={style.detail}>
      <label>Ground Floor</label>
      <div className={style.row}>
        <span>Elements of building / structure: </span>
        <label>Corrosion</label>
      </div>
      <div className={style.row}>
        <table>
          <tr>
            <th>Element</th>
            <th>Image</th>
            <th>Remarks</th>
            <th>Description</th>
          </tr>
          {/* Columns */}
          <ColumnInput activeInfo={activeInfo} section={sections} sectionTitle={sectionTitle} information={information} activeDetailIndex={activeDetailIndex} />
          {/* Beams */}
          <tr>
            <td>Beams</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    beamImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.beamRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    beamRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.beamMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    beamMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Slabs */}
          <tr>
            <td>Slabs</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    slabImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.slabRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    slabRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.slabMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    slabMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Lintel */}
          <tr>
            <td>Lintel/Chajja</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    lintelImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.lintelRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    lintelRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.lintelMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    lintelMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* porch/canopy/balcony */}
          <tr>
            <td>porch/canopy/balcony</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    balconyImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.balconyRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    balconyRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.balconyMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    balconyMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* External Wall */}
          <tr>
            <td>External wall</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    exWallImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.exWallRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    exWallRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.exWallMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    exWallMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Internal Wall */}
          <tr>
            <td>Internal wall</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    inWallImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.inWallRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    inWallRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.inWallMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    inWallMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Flooring */}
          <tr>
            <td>Flooring</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    flooringImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.flooringRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    flooringRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.flooringMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    flooringMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Doors / Windowa */}
          <tr>
            <td>Doors & Windows</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    doorWinImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.doorWinRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    doorWinRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.doorWinMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    doorWinMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Slab */}
          <tr>
            <td>Staircase Slab</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairSlabImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairSlabRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairSlabRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.stairSlabMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairSlabMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Steps */}
          <tr>
            <td>Staircase Steps</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairStepImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairStepRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairStepRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.stairStepMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairStepMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Railings */}
          <tr>
            <td>Staircase Railings</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairRailImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairRailRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairRailRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.stairRailMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairRailMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Passage */}
          <tr>
            <td>Passage</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    passageImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.passageRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    passageRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.passageMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    passageMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
  //****** Floors details */
  const floorsBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <table>
          <tr>
            <th>Member/Elements</th>
            <th>Images</th>
            <th>Remark</th>
            <th>Description</th>
          </tr>
          {/* Columns */}
          <tr>
            <td>Columns</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    columnImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.columnRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    columnRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.columnMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    columnMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Beams */}
          <tr>
            <td>Beams</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    beamImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.beamRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    beamRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.beamMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    beamMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Slabs */}
          <tr>
            <td>Slabs</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    slabImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.slabRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    slabRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.slabMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    slabMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Lintel */}
          <tr>
            <td>Lintel/Chajja</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    lintelImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.lintelRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    lintelRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.lintelMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    lintelMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* porch/canopy/balcony */}
          <tr>
            <td>porch/canopy/balcony</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    balconyImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.balconyRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    balconyRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.balconyMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    balconyMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* External Wall */}
          <tr>
            <td>External wall</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    exWallImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.exWallRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    exWallRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.exWallMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    exWallMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Internal Wall */}
          <tr>
            <td>Internal wall</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    inWallImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.inWallRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    inWallRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.inWallMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    inWallMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Flooring */}
          <tr>
            <td>Flooring</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    flooringImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.flooringRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    flooringRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.flooringMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    flooringMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Doors / Windowa */}
          <tr>
            <td>Doors & Windows</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    doorWinImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.doorWinRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    doorWinRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.doorWinMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    doorWinMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Slab */}
          <tr>
            <td>Staircase Slab</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairSlabImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairSlabRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairSlabRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.stairSlabMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairSlabMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Steps */}
          <tr>
            <td>Staircase Steps</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairStepImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairStepRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairStepRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.stairStepMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairStepMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Railings */}
          <tr>
            <td>Staircase Railings</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairRailImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairRailRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairRailRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.stairRailMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairRailMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Passage */}
          <tr>
            <td>Passage</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    passageImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.passageRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    passageRemark: event.target.value,
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Description"
                value={values.passageMoisture}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    passageMoisture: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
  //**** terraceFloor */
  const terraceFloorBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <table>
          <tr>
            <th>Member/Elements</th>
            <th>Images</th>
            <th>Remark</th>
          </tr>

          {/* porch/canopy/balcony */}
          <tr>
            <td>porch/canopy/balcony</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    balconyImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.balconyRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    balconyRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* External Wall */}
          <tr>
            <td>External wall</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    exWallImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.exWallRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    exWallRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>

          {/* Flooring */}
          <tr>
            <td>Flooring</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    flooringImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.flooringRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    flooringRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Doors / Windowa */}
          <tr>
            <td>Doors & Windows</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    doorWinImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.doorWinRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    doorWinRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Slab */}
          <tr>
            <td>Staircase Slab</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairSlabImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairSlabRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairSlabRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Steps */}
          <tr>
            <td>Staircase Steps</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairStepImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairStepRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairStepRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Railings */}
          <tr>
            <td>Staircase Railings</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairRailImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairRailRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairRailRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Passage */}
          <tr>
            <td>Passage</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    passageImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.passageRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    passageRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );

  //------------for basement------------//
  const basementBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <table>
          <tr>
            <th>Member/Elements</th>
            <th>Images</th>
            <th>Remark</th>
          </tr>
          {/* Columns */}
          <tr>
            <td>Columns</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    columnImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.columnRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    columnRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Beams */}
          <tr>
            <td>Beams</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    beamImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.beamRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    beamRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Slabs */}
          <tr>
            <td>Slabs</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    slabImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.slabRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    slabRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Lintel */}
          <tr>
            <td>Lintel/Chajja</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    lintelImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.lintelRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    lintelRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>

          {/* External Wall */}
          <tr>
            <td>External wall</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    exWallImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.exWallRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    exWallRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Internal Wall */}
          <tr>
            <td>Internal wall</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    inWallImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.inWallRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    inWallRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Flooring */}
          <tr>
            <td>Flooring</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    flooringImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.flooringRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    flooringRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Ventilation*/}
          <tr>
            <td>Ventilation</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    ventilationImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.ventilationRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    ventilationRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Slab */}
          <tr>
            <td>Staircase Slab</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairSlabImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairSlabRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairSlabRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Steps */}
          <tr>
            <td>Staircase Steps</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairStepImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairStepRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairStepRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Staircase Railings */}
          <tr>
            <td>Staircase Railings</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    stairRailImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.stairRailRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    stairRailRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
          {/* Passage */}
          <tr>
            <td>Passage</td>
            <td>
              <InputControl
                type="file"
                accept="image/*"
                placeholder="Select Image"
                onChange={(event) =>
                  setImages((prev) => ({
                    ...prev,
                    passageImg: URL.createObjectURL(event.target.files[0]),
                  }))
                }
              />
            </td>
            <td>
              <InputControl
                placeholder="Enter Remarks"
                value={values.passageRemark}
                onChange={(event) =>
                  setVelues((prev) => ({
                    ...prev,
                    passageRemark: event.target.value,
                  }))
                }
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );

  const foundationBody = (
    <div className={style.detail}>
      <label>Moisture Sensor Data</label>
      <div className={style.row}>
        <table>
          <tr>
            <th>No.</th>
            <th>Time</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <InputControl
                onChange={(e) => setTime(e.target.value)}
                value={time}
              />
            </td>
            <td>
              <InputControl
                onChange={(e) => setData(e.target.value)}
                value={data}
              />
            </td>
            <td>
              <button
                onClick={() => {
                  setChart((prev) => [...prev, { time: time, value: data }]);
                  setTime(0);
                  setData(0);
                  setVelues((prev) => ({ ...prev, graphData: chart }));
                }}
              >
                Add
              </button>
            </td>
          </tr>
        </table>
      </div>
      <label>PH Test Data</label>
      <div className={style.row}>
        <table>
          <tr>
            <th>No.</th>
            <th>No. Of Attempt</th>
            <th>pH Value</th>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <InputControl
                onChange={(e) => setTest(e.target.value)}
                value={test}
              />
            </td>
            <td>
              <InputControl
                onChange={(e) => setPh(e.target.value)}
                value={ph}
              />
            </td>
            <td>
              <button
                onClick={() => {
                  setBarChart((prev) => [...prev, { test: test, ph: ph }]);
                  setTest(0);
                  setPh(0);
                  setVelues((prev) => ({ ...prev, bargraphData: barchart }));
                }}
              >
                Add
              </button>
            </td>
          </tr>
        </table>
      </div>
      <label>Footing details</label>
      <div className={style.row}>
        <table>
          <tr>
            <td>Depth</td>
            <td>
              <InputControl
                placeholder="Enter data"
                value={values.depth}
                onChange={(event) =>
                  setVelues((prev) => ({ ...prev, depth: event.target.value }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Length</td>
            <td>
              <InputControl
                placeholder="Enter data"
                value={values.length}
                onChange={(event) =>
                  setVelues((prev) => ({ ...prev, length: event.target.value }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Width</td>
            <td>
              <InputControl
                placeholder="Enter data"
                value={values.width}
                onChange={(event) =>
                  setVelues((prev) => ({ ...prev, width: event.target.value }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>ASTx</td>
            <td>
              <InputControl
                placeholder="Enter data"
                value={values.astx}
                onChange={(event) =>
                  setVelues((prev) => ({ ...prev, astx: event.target.value }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>ASTy</td>
            <td>
              <InputControl
                placeholder="Enter data"
                value={values.asty}
                onChange={(event) =>
                  setVelues((prev) => ({ ...prev, asty: event.target.value }))
                }
              />
            </td>
          </tr>
        </table>
      </div>
      <label>Tilting Observed or not</label>
      <InputControl
        placeholder="Enter your Objective"
        value={values.objective}
        onChange={(event) =>
          setVelues((prev) => ({ ...prev, objective: event.target.value }))
        }
      />
      <label>Surrounding soil/water condition</label>
      <InputControl
        placeholder="Enter condition"
        value={values.condition}
        onChange={(event) =>
          setVelues((prev) => ({ ...prev, condition: event.target.value }))
        }
      />
      <InputControl
        label="Any suggestions from your side"
        placeholder="Enter here"
        value={values.suggestion}
        onChange={(event) =>
          setVelues((prev) => ({ ...prev, suggestion: event.target.value }))
        }
      />
    </div>
  );

  const cracksBody = (
    <div className={style.detail}>
      <label>Cracks Data</label>
      <div className={style.row}>
        <table align="center">
          <tr>
            <th>No.</th>
            <th>Structural Element</th>
            <th>No.</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Walls</td>
            <td>1</td>
            <td>less than 1mm</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Slab</td>
            <td>2</td>
            <td>less than 5mm</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Beam</td>
            <td>3</td>
            <td>less than 15mm</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Column</td>
            <td>4</td>
            <td>less than 25mm</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Juction</td>
            <td>5</td>
            <td>Greater than 25mm</td>
          </tr>
        </table>
        <CrackInput />
      </div>
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSecKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.techDetail:
        return techDetailBody;
      case sections.groundFloor:
        return groundFloorBody;
      case sections.floors:
        return floorsBody;
      case sections.terraceFloor:
        return terraceFloorBody;
      case sections.basementInfo:
        return basementBody;
      case sections.foundationInfo:
        return foundationBody;
      case sections.cracksInfo:
        return cracksBody;
      default:
        return null;
    }
  };

  {
    /* Danger Zone */
  }
  // update details & save datails in setResumeInfo --> body
  const handleSubmission = () => {
    switch (sections[activeSecKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          clientName: values.clientName,
          engineerName: values.engineerName,
          monitoringDate: values.monitoringDate,
          location: values.location,
          buildingType: values.buildingType,
          constDate: values.constDate,
          priorInfo: values.priorInfo,
          plotArea: values.plotArea,
          plotShape: values.plotShape,
          nDirection: values.nDirection,
          nDetailF: values.nDetailF,
          nDetailAS: values.nDetailAS,
          sDirection: values.sDirection,
          sDetailF: values.sDetailF,
          sDetailAS: values.sDetailAS,
          eDirection: values.eDirection,
          eDetailF: values.eDetailF,
          eDetailAS: values.eDetailAS,
          wDirection: values.wDirection,
          wDetailF: values.wDetailF,
          wDetailAS: values.wDetailAS,
          buildingLength: values.buildingLength,
          buildingWidth: values.buildingWidth,
          buildingHeight: values.buildingHeight,
          planImg: images.planImg,
          noOfFloors: values.noOfFloors,
          changesDone: values.changesDone,
          failurePart: values.failurePart,
          failureAdjoining: values.failureAdjoining,
          structuralBM: values.structuralBM,
          nonStructuralBM: values.nonStructuralBM,
          waterSupplyBM: values.waterSupplyBM,
        };
        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.techDetail: {
        const tempDetail = {
          planImg: images.planImg,
          elevationImg: images.elevationImg,
          crossSecImg: images.crossSecImg,
          struckDrawImg: images.struckDrawImg,
          testRepoImg: images.testRepoImg,
          otherMatImg: images.otherMatImg,
          waterProofingTM: values.waterProofingTM,
          plasteringTM: values.plasteringTM,
          coloringTM: values.coloringTM,
          strengtheningTM: values.strengtheningTM,
          waterSupplyTM: values.waterSupplyTM,
          drainageTM: values.drainageTM,
          struckRemark: values.struckRemark,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.techDetail]: {
            ...prev[sections.techDetail],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.groundFloor: {
        const tempDetail = {
          columnRemark: values.columnRemark,
          columnImg: images.columnImg,
          columnMoisture: values.columnMoisture,
          beamImg: images.beamImg,
          beamRemark: values.beamRemark,
          beamMoisture: values.beamMoisture,
          slabImg: images.slabImg,
          slabRemark: values.slabRemark,
          slabMoisture: values.slabMoisture,
          lintelImg: images.lintelImg,
          lintelRemark: values.lintelRemark,
          lintelMoisture: values.lintelMoisture,
          balconyImg: images.balconyImg,
          balconyRemark: values.balconyRemark,
          balconyMoisture: values.balconyMoisture,
          exWallImg: images.exWallImg,
          exWallRemark: values.exWallRemark,
          exWallMoisture: values.exWallMoisture,
          inWallImg: images.inWallImg,
          inWallRemark: values.inWallRemark,
          inWallMoisture: values.inWallMoisture,
          flooringImg: images.flooringImg,
          flooringRemark: values.flooringRemark,
          flooringMoisture: values.flooringMoisture,
          doorWinImg: images.doorWinImg,
          doorWinRemark: values.doorWinRemark,
          doorWinMoisture: values.doorWinMoisture,
          stairSlabImg: images.stairSlabImg,
          stairSlabRemark: values.stairSlabRemark,
          stairSlabMoisture: values.stairSlabMoisture,
          stairStepImg: images.stairStepImg,
          stairStepRemark: values.stairStepRemark,
          stairStepMoisture: values.stairStepMoisture,
          stairRailImg: images.stairRailImg,
          stairRailRemark: values.stairRailRemark,
          stairRailMoisture: values.stairRailMoisture,
          passageImg: images.passageImg,
          passageRemark: values.passageRemark,
          passageMoisture: values.passageMoisture,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.groundFloor]: {
            ...prev[sections.groundFloor],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.floors: {
        const tempDetail = {
          columnImg: images.columnImg,
          columnRemark: values.columnRemark,
          columnMoisture: values.columnMoisture,
          beamImg: images.beamImg,
          beamRemark: values.beamRemark,
          beamMoisture: values.beamMoisture,
          slabImg: images.slabImg,
          slabRemark: values.slabRemark,
          slabMoisture: values.slabMoisture,
          lintelImg: images.lintelImg,
          lintelRemark: values.lintelRemark,
          lintelMoisture: values.lintelMoisture,
          balconyImg: images.balconyImg,
          balconyRemark: values.balconyRemark,
          balconyMoisture: values.balconyMoisture,
          exWallImg: images.exWallImg,
          exWallRemark: values.exWallRemark,
          exWallMoisture: values.exWallMoisture,
          inWallImg: images.inWallImg,
          inWallRemark: values.inWallRemark,
          inWallMoisture: values.inWallMoisture,
          flooringImg: images.flooringImg,
          flooringRemark: values.flooringRemark,
          flooringMoisture: values.flooringMoisture,
          doorWinImg: images.doorWinImg,
          doorWinRemark: values.doorWinRemark,
          doorWinMoisture: values.doorWinMoisture,
          stairSlabImg: images.stairSlabImg,
          stairSlabRemark: values.stairSlabRemark,
          stairSlabMoisture: values.stairSlabMoisture,
          stairStepImg: images.stairStepImg,
          stairStepRemark: values.stairStepRemark,
          stairStepMoisture: values.stairStepMoisture,
          stairRailImg: images.stairRailImg,
          stairRailRemark: values.stairRailRemark,
          stairRailMoisture: values.stairRailMoisture,
          passageImg: images.passageImg,
          passageRemark: values.passageRemark,
          passageMoisture: values.passageMoisture,
        };

        const tempDetails = [...information[sections.floors]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.floors]: {
            ...prev[sections.floors],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.terraceFloor: {
        const tempDetail = {
          columnImg: images.columnImg,
          columnRemark: values.columnRemark,
          beamImg: images.beamImg,
          beamRemark: values.beamRemark,
          slabImg: images.slabImg,
          slabRemark: values.slabRemark,
          lintelImg: images.lintelImg,
          lintelRemark: values.lintelRemark,
          balconyImg: images.balconyImg,
          balconyRemark: values.balconyRemark,
          exWallImg: images.exWallImg,
          exWallRemark: values.exWallRemark,
          inWallImg: images.inWallImg,
          inWallRemark: values.inWallRemark,
          flooringImg: images.flooringImg,
          flooringRemark: values.flooringRemark,
          doorWinImg: images.doorWinImg,
          doorWinRemark: values.doorWinRemark,
          stairSlabImg: images.stairSlabImg,
          stairSlabRemark: values.stairSlabRemark,
          stairStepImg: images.stairStepImg,
          stairStepRemark: values.stairStepRemark,
          stairRailImg: images.stairRailImg,
          stairRailRemark: values.stairRailRemark,
          passageImg: images.passageImg,
          passageRemark: values.passageRemark,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.terraceFloor]: {
            ...prev[sections.terraceFloor],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.basementInfo: {
        const tempDetail = {
          columnImg: images.columnImg,
          columnRemark: values.columnRemark,
          beamImg: images.beamImg,
          beamRemark: values.beamRemark,
          slabImg: images.slabImg,
          slabRemark: values.slabRemark,
          lintelImg: images.lintelImg,
          lintelRemark: values.lintelRemark,
          balconyImg: images.balconyImg,
          balconyRemark: values.balconyRemark,
          exWallImg: images.exWallImg,
          exWallRemark: values.exWallRemark,
          inWallImg: images.inWallImg,
          inWallRemark: values.inWallRemark,
          flooringImg: images.flooringImg,
          flooringRemark: values.flooringRemark,
          ventilationImg: images.ventilationImg,
          ventilationRemark: values.ventilationRemark,
          stairSlabImg: images.stairSlabImg,
          stairSlabRemark: values.stairSlabRemark,
          stairStepImg: images.stairStepImg,
          stairStepRemark: values.stairStepRemark,
          stairRailImg: images.stairRailImg,
          stairRailRemark: values.stairRailRemark,
          passageImg: images.passageImg,
          passageRemark: values.passageRemark,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.basementInfo]: {
            ...prev[sections.basementInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.foundationInfo: {
        const tempDetail = {
          depth: values.depth,
          length: values.length,
          width: values.width,
          astx: values.astx,
          asty: values.asty,
          objective: values.objective,
          condition: values.condition,
          suggestion: values.suggestion,
          graphData: values.graphData,
          bargraphData: values.bargraphData,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.foundationInfo]: {
            ...prev[sections.foundationInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.crackesInfo: {
        const tempDetail = {
          totalCrackValue: values.totalCrackValue,
        };

        const tempDetails = [...information[sections.cracksInfo]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.cracksInfo]: {
            ...prev[sections.cracksInfo],
            details: tempDetails,
            sectionTitle,
          },
        }));
      }
      // default: return null;
    }
  };

  const handleAddChip = () => {
    const details = activeInfo?.details;
    const lastDetail = details.slice(-1)[0];
    if (!details || !Object.keys(lastDetail).length) return;
    details?.push({});
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSecKey]]: {
        ...information[sections[activeSecKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };

  const handleRemoveChip = (index) => {
    const details = activeInfo?.details ? [...activeInfo?.details] : "";
    if (!details) return;
    details.splice(index, 1);
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSecKey]]: {
        ...information[sections[activeSecKey]],
        details: details,
      },
    }));
    setActiveDetailIndex((prev) => (prev === index ? prev - 1 : 0));
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSecKey]];
    setActiveInfo(activeInfo);
    setSectionTitle(sections[activeSecKey]);
    setActiveDetailIndex(0);
    setVelues({
      clientName: activeInfo?.detail?.clientName || "",
      engineerName: activeInfo?.detail?.engineerName || "",
      monitoringDate: activeInfo?.detail?.monitoringDate || "",
      location: activeInfo?.detail?.location || "",
      buildingType: activeInfo?.detail?.buildingType || "",
      constDate: activeInfo?.detail?.constDate || "",
      priorInfo: activeInfo?.detail?.priorInfo || "",
      plotArea: activeInfo?.detail?.plotArea || "",
      plotShape: activeInfo?.detail?.plotShape || "",
      nDirection: activeInfo?.detail?.nDirection || "",
      nDetailF: activeInfo?.detail?.nDetailF || "",
      nDetailAS: activeInfo?.detail?.nDetailAS || "",
      sDirection: activeInfo?.detail?.sDirection || "",
      sDetailF: activeInfo?.detail?.sDetailF || "",
      sDetailAS: activeInfo?.detail?.sDetailAS || "",
      eDirection: activeInfo?.detail?.eDirection || "",
      eDetailF: activeInfo?.detail?.eDetailF || "",
      eDetailAS: activeInfo?.detail?.eDetailAS || "",
      wDirection: activeInfo?.detail?.wDirection || "",
      wDetailF: activeInfo?.detail?.wDetailF || "",
      wDetailAS: activeInfo?.detail?.wDetailAS || "",
      buildingLength: activeInfo?.detail?.buildingLength || "",
      buildingWidth: activeInfo?.detail?.buildingWidth || "",
      buildingHeight: activeInfo?.detail?.buildingHeight || "",
      planImg: activeInfo?.detail?.planImg || "",
      noOfFloors: activeInfo?.detail?.noOfFloors || "",
      changesDone: activeInfo?.detail?.changesDone || "",
      failurePart: activeInfo?.detail?.failurePart || "",
      failureAdjoining: activeInfo?.detail?.failureAdjoining || "",
      structuralBM: activeInfo?.detail?.structuralBM || "",
      nonStructuralBM: activeInfo?.detail?.nonStructuralBM || "",
      waterSupplyBM: activeInfo?.detail?.waterSupplyBM || "",
      //----------technical details-------------------
      // planImg: activeInfo?.detail?.planImg || "",
      elevationImg: activeInfo?.detail?.elevationImg || "",
      crossSecImg: activeInfo?.detail?.crossSecImg || "",
      struckDrawImg: activeInfo?.detail?.struckDrawImg || "",
      testRepoImg: activeInfo?.detail?.testRepoImg || "",
      otherMatImg: activeInfo?.detail?.otherMatImg || "",
      waterProofingTM: activeInfo?.detail?.waterProofingTM || "",
      plasteringTM: activeInfo?.detail?.plasteringTM || "",
      coloringTM: activeInfo?.detail?.coloringTM || "",
      strengtheningTM: activeInfo?.detail?.strengtheningTM || "",
      waterSupplyTM: activeInfo?.detail?.waterSupplyTM || "",
      drainageTM: activeInfo?.detail?.drainageTM || "",
      struckRemark: activeInfo?.detail?.struckRemark || "",
      //--------------ground floor--------------
      columnRemark: activeInfo?.detail?.columnRemark || "",
      columnImg: activeInfo?.detail?.columnImg || "",
      columnMoisture: activeInfo?.detail?.columnMoisture || "",
      beamImg: activeInfo?.detail?.beamImg || "",
      beamRemark: activeInfo?.detail?.beamRemark || "",
      beamMoisture: activeInfo?.detail?.beamMoisture || "",
      slabImg: activeInfo?.detail?.slabImg || "",
      slabRemark: activeInfo?.detail?.slabRemark || "",
      slabMoisture: activeInfo?.detail?.slabMoisture || "",
      lintelImg: activeInfo?.detail?.lintelImg || "",
      lintelRemark: activeInfo?.detail?.lintelRemark || "",
      lintelMoisture: activeInfo?.detail?.lintelMoisture || "",
      balconyImg: activeInfo?.detail?.balconyImg || "",
      balconyRemark: activeInfo?.detail?.balconyRemark || "",
      balconyMoisture: activeInfo?.detail?.balconyMoisture || "",
      exWallImg: activeInfo?.detail?.exWallImg || "",
      exWallRemark: activeInfo?.detail?.exWallRemark || "",
      exWallMoisture: activeInfo?.detail?.exWallMoisture || "",
      inWallImg: activeInfo?.detail?.inWallImg || "",
      inWallRemark: activeInfo?.detail?.inWallRemark || "",
      inWallMoisture: activeInfo?.detail?.inWallMoisture || "",
      flooringImg: activeInfo?.detail?.flooringImg || "",
      flooringRemark: activeInfo?.detail?.flooringRemark || "",
      flooringMoisture: activeInfo?.detail?.flooringMoisture || "",
      doorWinImg: activeInfo?.detail?.doorWinImg || "",
      doorWinRemark: activeInfo?.detail?.doorWinRemark || "",
      doorWinMoisture: activeInfo?.detail?.doorWinMoisture || "",
      stairSlabImg: activeInfo?.detail?.stairSlabImg || "",
      stairSlabRemark: activeInfo?.detail?.stairSlabRemark || "",
      stairSlabMoisture: activeInfo?.detail?.stairSlabMoisture || "",
      stairStepImg: activeInfo?.detail?.stairStepImg || "",
      stairStepRemark: activeInfo?.detail?.stairStepRemark || "",
      stairStepMoisture: activeInfo?.detail?.stairStepMoisture || "",
      stairRailImg: activeInfo?.detail?.stairRailImg || "",
      stairRailRemark: activeInfo?.detail?.stairRailRemark || "",
      stairRailMoisture: activeInfo?.detail?.stairRailMoisture || "",
      passageImg: activeInfo?.detail?.passageImg || "",
      passageRemark: activeInfo?.detail?.passageRemark || "",
      passageMoisture: activeInfo?.detail?.passageMoisture || "",
      //---------------floor details------------------------
      columnRemark: activeInfo.details
        ? activeInfo.details[0]?.columnRemark || ""
        : "",
      columnImg: activeInfo.details
        ? activeInfo.details[0]?.columnImg || ""
        : "",
      columnMoisture: activeInfo.details
        ? activeInfo.details[0]?.columnMoisture || ""
        : "",
      beamImg: activeInfo.details ? activeInfo.details[0]?.beamImg || "" : "",
      beamRemark: activeInfo.details
        ? activeInfo.details[0]?.beamRemark || ""
        : "",
      beamMoisture: activeInfo.details
        ? activeInfo.details[0]?.beamMoisture || ""
        : "",
      slabImg: activeInfo.details ? activeInfo.details[0]?.slabImg || "" : "",
      slabRemark: activeInfo.details
        ? activeInfo.details[0]?.slabRemark || ""
        : "",
      slabMoisture: activeInfo.details
        ? activeInfo.details[0]?.slabMoisture || ""
        : "",
      lintelImg: activeInfo.details
        ? activeInfo.details[0]?.lintelImg || ""
        : "",
      lintelRemark: activeInfo.details
        ? activeInfo.details[0]?.lintelRemark || ""
        : "",
      lintelMoisture: activeInfo.details
        ? activeInfo.details[0]?.lintelMoisture || ""
        : "",
      balconyImg: activeInfo.details
        ? activeInfo.details[0]?.balconyImg || ""
        : "",
      balconyRemark: activeInfo.details
        ? activeInfo.details[0]?.balconyRemark || ""
        : "",
      balconyMoisture: activeInfo.details
        ? activeInfo.details[0]?.balconyMoisture || ""
        : "",
      exWallImg: activeInfo.details
        ? activeInfo.details[0]?.exWallImg || ""
        : "",
      exWallRemark: activeInfo.details
        ? activeInfo.details[0]?.exWallRemark || ""
        : "",
      exWallMoisture: activeInfo.details
        ? activeInfo.details[0]?.exWallMoisture || ""
        : "",
      inWallImg: activeInfo.details
        ? activeInfo.details[0]?.inWallImg || ""
        : "",
      inWallRemark: activeInfo.details
        ? activeInfo.details[0]?.inWallRemark || ""
        : "",
      inWallMoisture: activeInfo.details
        ? activeInfo.details[0]?.inWallMoisture || ""
        : "",
      doorWinImg: activeInfo.details
        ? activeInfo.details[0]?.doorWinImg || ""
        : "",
      doorWinRemark: activeInfo.details
        ? activeInfo.details[0]?.doorWinRemark || ""
        : "",
      doorWinMoisture: activeInfo.details
        ? activeInfo.details[0]?.doorWinMoisture || ""
        : "",
      stairSlabImg: activeInfo.details
        ? activeInfo.details[0]?.stairSlabImg || ""
        : "",
      stairSlabRemark: activeInfo.details
        ? activeInfo.details[0]?.stairSlabRemark || ""
        : "",
      stairSlabMoisture: activeInfo.details
        ? activeInfo.details[0]?.stairSlabMoisture || ""
        : "",
      stairRailImg: activeInfo.details
        ? activeInfo.details[0]?.stairRailImg || ""
        : "",
      stairRailRemark: activeInfo.details
        ? activeInfo.details[0]?.stairRailRemark || ""
        : "",
      stairRailMoisture: activeInfo.details
        ? activeInfo.details[0]?.stairRailMoisture || ""
        : "",
      passageImg: activeInfo.details
        ? activeInfo.details[0]?.passageImg || ""
        : "",
      passageRemark: activeInfo.details
        ? activeInfo.details[0]?.passageRemark || ""
        : "",
      passageMoisture: activeInfo.details
        ? activeInfo.details[0]?.passageMoisture || ""
        : "",
      //--------- basement --/
      ventilationImg: activeInfo.detail?.ventilationImg || "",
      ventilationRemark: activeInfo.detail?.ventilationRemark || "",
      //-------- foundation ----/
      depth: activeInfo.detail?.depth || "",
      length: activeInfo.detail?.length || "",
      width: activeInfo.detail?.width || "",
      astx: activeInfo.detail?.astx || "",
      asty: activeInfo.detail?.asty || "",
      objective: activeInfo.detail?.objective || "",
      condition: activeInfo.detail?.condition || "",
      suggestion: activeInfo.detail?.suggestion || "",
      graphData: activeInfo?.detail?.graphData || "",
      bargraphData: activeInfo?.detail?.bargraphData || "",
      // cracks
      totalCrackValue: activeInfo?.details
        ? activeInfo.details[0]?.totalCrackValue || ""
        : "",
      // crackLength: activeInfo?.details
      // ? activeInfo.details[0]?.crackLength || ""
      // : "",
      // elementNo: activeInfo?.details8
      // ? activeInfo.details[0]?.elementNo || ""
      // : "",
    });
  }, [activeSecKey]);

  useEffect(() => {
    setActiveInfo(information[sections[activeSecKey]]);
  }, [information]);

  //Multi Value Sections with --> DetailS {floors}
  useEffect(() => {
    const details = activeInfo?.details;
    if (!details) return;
    setVelues({
      columnImg: activeInfo.details[activeDetailIndex]?.columnImg || "",
      columnRemark: activeInfo.details[activeDetailIndex]?.columnRemark || "",
      columnMoisture:
        activeInfo.details[activeDetailIndex]?.columnMoisture || "",
      beamImg: activeInfo.details[activeDetailIndex]?.beamImg || "",
      beamRemark: activeInfo.details[activeDetailIndex]?.beamRemark || "",
      beamMoisture: activeInfo.details[activeDetailIndex]?.beamMoisture || "",
      slanImg: activeInfo.details[activeDetailIndex]?.slanImg || "",
      slabRemark: activeInfo.details[activeDetailIndex]?.slabRemark || "",
      slabMoisture: activeInfo.details[activeDetailIndex]?.slabMoisture || "",
      lintelImg: activeInfo.details[activeDetailIndex]?.lintelImg || "",
      lintelRemark: activeInfo.details[activeDetailIndex]?.lintelRemark || "",
      lintelMoisture:
        activeInfo.details[activeDetailIndex]?.lintelMoisture || "",
      balconyImg: activeInfo.details[activeDetailIndex]?.balconyImg || "",
      balconyRemark: activeInfo.details[activeDetailIndex]?.balconyRemark || "",
      balconyMoisture:
        activeInfo.details[activeDetailIndex]?.balconyMoisture || "",
      exWallImg: activeInfo.details[activeDetailIndex]?.exWallImg || "",
      exWallRemark: activeInfo.details[activeDetailIndex]?.exWallRemark || "",
      exWallMoisture:
        activeInfo.details[activeDetailIndex]?.exWallMoisture || "",
      inWallImg: activeInfo.details[activeDetailIndex]?.inWallImg || "",
      inWallRemark: activeInfo.details[activeDetailIndex]?.inWallRemark || "",
      inWallMoisture:
        activeInfo.details[activeDetailIndex]?.inWallMoisture || "",
      flooringImg: activeInfo.details[activeDetailIndex]?.flooringImg || "",
      flooringRemark:
        activeInfo.details[activeDetailIndex]?.flooringRemark || "",
      flooringMoisture:
        activeInfo.details[activeDetailIndex]?.flooringMoisture || "",
      doorWinImg: activeInfo.details[activeDetailIndex]?.doorWinImg || "",
      doorWinRemark: activeInfo.details[activeDetailIndex]?.doorWinRemark || "",
      doorWinMoisture:
        activeInfo.details[activeDetailIndex]?.doorWinMoisture || "",
      stairSlabImg: activeInfo.details[activeDetailIndex]?.stairSlabImg || "",
      stairSlabRemark:
        activeInfo.details[activeDetailIndex]?.stairSlabRemark || "",
      stairSlabMoisture:
        activeInfo.details[activeDetailIndex]?.stairSlabMoisture || "",
      stairStepImg: activeInfo.details[activeDetailIndex]?.stairStepImg || "",
      stairStepRemark:
        activeInfo.details[activeDetailIndex]?.stairStepRemark || "",
      stairStepMoisture:
        activeInfo.details[activeDetailIndex]?.stairStepMoisture || "",
      stairRailImg: activeInfo.details[activeDetailIndex]?.stairRailImg || "",
      stairRailRemark:
        activeInfo.details[activeDetailIndex]?.stairRailRemark || "",
      stairRailMoisture:
        activeInfo.details[activeDetailIndex]?.stairRailMoisture || "",
      passageImg: activeInfo.details[activeDetailIndex]?.passageImg || "",
      passageRemark: activeInfo.details[activeDetailIndex]?.passageRemark || "",
      passageMoisture:
        activeInfo.details[activeDetailIndex]?.passageMoisture || "",
      // crackes
      totalCrackValue:
        activeInfo.details[activeDetailIndex]?.totalCrackValue || "",
      // elementNo: activeInfo.details[activeDetailIndex]?.elementNo || "",
      // crackLength: activeInfo.details[activeDetailIndex]?.crackLength || "",
    });
  }, [activeDetailIndex]);
  return (
    <div className={style.container}>
      <div className={style.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${style.section} ${
              activeSecKey === key ? style.active : ""
            }`}
            onClick={() => setActiveSecKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={style.body}>
        <InputControl
          label="Section Title"
          placeholder="Enter Section title"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
        />
        <div className={style.chips}>
          {activeInfo?.details
            ? activeInfo?.details.map((item, index) => (
                <div
                  className={`${style.chip} ${
                    activeDetailIndex === index ? style.active_chip : ""
                  }`}
                  key={item.title}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeSecKey]} {index + 1}
                  </p>
                  <XCircle
                    className={style.chip_btn}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleRemoveChip(index);
                    }}
                  />
                </div>
              ))
            : ""}
          {activeInfo?.details?.length > 0 ? (
            <div className={style.chip}>
              <p>Add</p>
              <PlusCircle className={style.chip_btn} onClick={handleAddChip} />
            </div>
          ) : (
            ""
          )}
        </div>
        {generateBody()}
        {values.totalCrackValue}
        <div className={style.savebtn}>
          <button className={style.save} onClick={handleSubmission}>
            <p>Save</p>
            <Save />
          </button>
          {/* calculateAverage() {
    const { values } = this.state;
    if (values.length === 0) return 0;
    const sum = values.reduce((acc, value) => acc + parseFloat(value), 0);
    return sum / values.length;
  } */}
        </div>
      </div>
    </div>
  );
}

export default Editor;
