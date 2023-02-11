import React, { useState, useEffect, useRef, forwardRef } from "react";
import style from "./Report.module.css";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

const Report = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;

  const containerRef = useRef();

  const info = {
    basicInfo: information[sections.basicInfo],
    techDetail: information[sections.techDetail],
    groundFloor: information[sections.groundFloor],
    floors: information[sections.floors],
    terraceFloor: information[sections.terraceFloor],
    basementInfo: information[sections.basementInfo],
    foundationInfo: information[sections.foundationInfo],
  };

  // let result = '';
  // if (result < 7.5) {
  //   result = 'Structure in mild condition';
  // } else if (){

  // }

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;
    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  const BasicInfo = () => {
    return (
      <div className={style.container}>
        {info.basicInfo?.detail?.clientName && (
          <div className={style.heading}>
            Client Name: {info.basicInfo?.detail?.clientName}
          </div>
        )}
        {info.basicInfo?.detail?.engineerName && (
          <div className={style.subHeading}>
            Engineer's Name: {info.basicInfo?.detail?.engineerName}
          </div>
        )}
        {info.basicInfo?.detail?.monitoringDate && (
          <div className={style.title}>Basic Details</div>
        )}
        {info.basicInfo?.detail?.monitoringDate && (
          <div className={style.topContent}>
            {info.basicInfo?.detail?.monitoringDate && (
              <div className={style.data}>
                Date of Monitoring: {info.basicInfo?.detail?.monitoringDate}
              </div>
            )}
            {info.basicInfo?.detail?.location && (
              <div className={style.data}>
                Location: {info.basicInfo?.detail?.location}
              </div>
            )}
            {info.basicInfo?.detail?.buildingType && (
              <div className={style.data}>
                Type of Building: {info.basicInfo?.detail?.buildingType}
              </div>
            )}
            {info.basicInfo?.detail?.constDate && (
              <div className={style.data}>
                Year of Construction: {info.basicInfo?.detail?.constDate}
              </div>
            )}
            {info.basicInfo?.detail?.priorInfo && (
              <div className={style.data}>
                Prior Information: {info.basicInfo?.detail?.priorInfo}
              </div>
            )}
            {info.basicInfo?.detail?.plotArea && (
              <div className={style.data}>
                Area of Plot: {info.basicInfo?.detail?.plotArea}
              </div>
            )}
            {info.basicInfo?.detail?.plotShape && (
              <div className={style.data}>
                Shape of Plot: {info.basicInfo?.detail?.plotShape}
              </div>
            )}
          </div>
        )}
        {info.basicInfo?.detail?.nDirection && (
          <div className={style.title}>Orientation of plot</div>
        )}

        {info.basicInfo?.detail?.nDirection && (
          <table className={style.table}>
            <tr>
              <th colSpan={2}>Directions</th>
              <th>Details of features</th>
              <th>Details of Adjoining Structure</th>
            </tr>
            <tr>
              <td className={style.direction}>North-</td>
              <td>
                {info.basicInfo?.detail?.nDirection && (
                  <div>{info.basicInfo?.detail?.nDirection}</div>
                )}
              </td>
              <td>
                {info.basicInfo?.detail?.nDetailF && (
                  <div>{info.basicInfo?.detail?.nDetailF}</div>
                )}
              </td>
              <td>
                {info.basicInfo?.detail?.nDetailAS && (
                  <div>{info.basicInfo?.detail?.nDetailAS}</div>
                )}
              </td>
            </tr>
            <tr>
              <td className={style.direction}>South-</td>
              <td>
                {info.basicInfo?.detail?.sDirection && (
                  <div>{info.basicInfo?.detail?.sDirection}</div>
                )}
              </td>
              <td>
                {info.basicInfo?.detail?.sDetailF && (
                  <div>{info.basicInfo?.detail?.sDetailF}</div>
                )}
              </td>
              <td>
                {info.basicInfo?.detail?.sDetailAS && (
                  <div>{info.basicInfo?.detail?.sDetailAS}</div>
                )}
              </td>
            </tr>
            <tr>
              <td className={style.direction}>East-</td>
              <td>
                {" "}
                {info.basicInfo?.detail?.eDirection && (
                  <div>{info.basicInfo?.detail?.eDirection}</div>
                )}
              </td>
              <td>
                {" "}
                {info.basicInfo?.detail?.eDetailF && (
                  <div>{info.basicInfo?.detail?.eDetailF}</div>
                )}
              </td>
              <td>
                {info.basicInfo?.detail?.eDetailAS && (
                  <div>{info.basicInfo?.detail?.eDetailAS}</div>
                )}
              </td>
            </tr>
            <tr>
              <td className={style.direction}>West-</td>
              <td>
                {" "}
                {info.basicInfo?.detail?.wDirection && (
                  <div> {info.basicInfo?.detail?.wDirection}</div>
                )}
              </td>
              <td>
                {" "}
                {info.basicInfo?.detail?.wDetailF && (
                  <div>{info.basicInfo?.detail?.wDetailF}</div>
                )}
              </td>
              <td>
                {info.basicInfo?.detail?.wDetailAS && (
                  <div>{info.basicInfo?.detail?.wDetailAS}</div>
                )}
              </td>
            </tr>
          </table>
        )}
        {info.basicInfo?.detail?.buildingLength && (
          <div className={style.title}>Approx Dimensions of building</div>
        )}
        {info.basicInfo?.detail?.buildingLength && (
          <table className={style.table}>
            <tr>
              <td>Length</td>
              <td>
                {info.basicInfo?.detail?.buildingLength && (
                  <div>{info.basicInfo?.detail?.buildingLength}</div>
                )}
              </td>
              <td>Width</td>
              <td>
                {info.basicInfo?.detail?.buildingWidth && (
                  <div>{info.basicInfo?.detail?.buildingWidth}</div>
                )}
              </td>
              <td>Height</td>
              <td>
                {info.basicInfo?.detail?.buildingHeight && (
                  <div>{info.basicInfo?.detail?.buildingHeight}</div>
                )}
              </td>
            </tr>
          </table>
        )}
        {info.basicInfo?.detail?.planImg && (
          <div className={style.title}>Image of Structure</div>
        )}
        {info.basicInfo?.detail?.planImg && (
          <img src={info.basicInfo?.detail?.planImg} />
        )}

        {info.basicInfo?.detail?.planImg && (
          <div className={style.title}>Structure details</div>
        )}
        {info.basicInfo?.detail?.planImg && (
          <div className={style.topContent}>
            {info.basicInfo?.detail?.noOfFloors && (
              <div>{info.basicInfo?.detail?.noOfFloors}</div>
            )}
            {info.basicInfo?.detail?.changesDone && (
              <div>{info.basicInfo?.detail?.changesDone}</div>
            )}
            {info.basicInfo?.detail?.failurePart && (
              <div>{info.basicInfo?.detail?.failurePart}</div>
            )}
            {info.basicInfo?.detail?.failureAdjoining && (
              <div>{info.basicInfo?.detail?.failureAdjoining}</div>
            )}
          </div>
        )}
        {info.basicInfo?.detail?.structuralBM && (
          <div className={style.title}>Maintenance details</div>
        )}
        {info.basicInfo?.detail?.structuralBM && (
          <div>
            <table className={style.table}>
              <tr>
                <td className={style.direction}>Structural - </td>
                <td>
                  {info.basicInfo?.detail?.structuralBM && (
                    <div>{info.basicInfo?.detail?.structuralBM}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td className={style.direction}>Non-Structural - </td>
                <td>
                  {info.basicInfo?.detail?.nonStructuralBM && (
                    <div>{info.basicInfo?.detail?.nonStructuralBM}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td className={style.direction}>Water supply/sanitary - </td>
                <td>
                  {info.basicInfo?.detail?.waterSupplyBM && (
                    <div>{info.basicInfo?.detail?.waterSupplyBM}</div>
                  )}
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    );
  };

  //------------Technical Details----------------
  const TechnicalDetails = () => {
    return (
      <>
        <div>
          <div className={style.titleName}>Technical Details</div>
        </div>
        <div className={style.container}>
          {info.techDetail?.detail?.planImg && (
            <div className={style.title}>Image of Plan</div>
          )}
          {info.techDetail?.detail?.planImg && (
            <img src={info.techDetail?.detail?.planImg} />
          )}
          {info.techDetail?.detail?.elevationImg && (
            <div className={style.title}>Image of Elevation</div>
          )}
          {info.techDetail?.detail?.elevationImg && (
            <img src={info.techDetail?.detail?.elevationImg} />
          )}
          {info.techDetail?.detail?.crossSecImg && (
            <div className={style.title}>Image of Cross Section</div>
          )}
          {info.techDetail?.detail?.crossSecImg && (
            <img src={info.techDetail?.detail?.crossSecImg} />
          )}
          {info.techDetail?.detail?.struckDrawImg && (
            <div className={style.title}>Image of Structural drawing</div>
          )}
          {info.techDetail?.detail?.struckDrawImg && (
            <img src={info.techDetail?.detail?.struckDrawImg} />
          )}
          {info.techDetail?.detail?.testRepoImg && (
            <div className={style.title}>Image of Test report of materials</div>
          )}
          {info.techDetail?.detail?.testRepoImg && (
            <img src={info.techDetail?.detail?.testRepoImg} />
          )}
          {info.techDetail?.detail?.otherMatImg && (
            <div className={style.title}>Image of Other material</div>
          )}
          {info.techDetail?.detail?.otherMatImg && (
            <img src={info.techDetail?.detail?.otherMatImg} />
          )}
          {info.techDetail?.detail?.waterProofingTM && (
            <div className={style.title}>Maintenance Type</div>
          )}
          {info.techDetail?.detail?.waterProofingTM && (
            <table className={style.table}>
              <tr>
                <td className={style.direction}>Water Proofing</td>
                <td>
                  {info.techDetail?.detail?.waterProofingTM && (
                    <div>{info.techDetail?.detail?.waterProofingTM}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td className={style.direction}>Plastering</td>
                <td>
                  {info.techDetail?.detail?.plasteringTM && (
                    <div>{info.techDetail?.detail?.plasteringTM}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td className={style.direction}>Coloring</td>
                <td>
                  {info.techDetail?.detail?.coloringTM && (
                    <div>{info.techDetail?.detail?.coloringTM}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td className={style.direction}>Strengthening</td>
                <td>
                  {info.techDetail?.detail?.strengtheningTM && (
                    <div>{info.techDetail?.detail?.strengtheningTM}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td className={style.direction}>Water supply</td>
                <td>
                  {info.techDetail?.detail?.waterSupplyTM && (
                    <div>{info.techDetail?.detail?.waterSupplyTM}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td className={style.direction}>Drainage</td>
                <td>
                  {info.techDetail?.detail?.drainageTM && (
                    <div>{info.techDetail?.detail?.drainageTM}</div>
                  )}
                </td>
              </tr>
            </table>
          )}
          {info.techDetail?.detail?.struckRemark && (
            <div className={style.title}>Any structural defects observed</div>
          )}
          {info.techDetail?.detail?.struckRemark && (
            <table>
              {info.techDetail?.detail?.struckRemark && (
                <div className={style.direction}>
                  {info.techDetail?.detail?.struckRemark}
                </div>
              )}
            </table>
          )}
        </div>
      </>
    );
  };

  //------------Ground Floor--------------------

  const GroundFloor = () => {
    return (
      <>
        <div>
          <div className={style.titleName}>Ground Floor</div>
        </div>
        <div className={style.floorContent}>
          {info.groundFloor?.detail?.columnImg && (
            <div className={style.title}>Columns</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.columnImg && (
                <img src={info.groundFloor?.detail?.columnImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.columnMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.columnMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.columnRemark && (
                <div className={style.direction}>
                  Remarks: {info.groundFloor?.detail?.columnRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.beamImg && (
            <div className={style.title}>Beams</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.beamImg && (
                <img src={info.groundFloor?.detail?.beamImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.beamMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.beamMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.beamRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.beamRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.slabImg && (
            <div className={style.title}>Slabs</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.slabImg && (
                <img src={info.groundFloor?.detail?.slabImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.slabMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.slabMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.slabRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.slabRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.lintelImg && (
            <div className={style.title}>Lintel/Chajja</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.lintelImg && (
                <img src={info.groundFloor?.detail?.lintelImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.lintelMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.lintelMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.lintelRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.lintelRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.balconyImg && (
            <div className={style.title}>porch/canopy/balcony</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.balconyImg && (
                <img src={info.groundFloor?.detail?.balconyImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.balconyMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.balconyMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.balconyRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.balconyRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.exWallImg && (
            <div className={style.title}>External wall</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.exWallImg && (
                <img src={info.groundFloor?.detail?.exWallImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.exWallMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.exWallMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.exWallRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.exWallRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.inWallImg && (
            <div className={style.title}>Internal wall</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.inWallImg && (
                <img src={info.groundFloor?.detail?.inWallImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.inWallMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.inWallMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.inWallRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.inWallRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.flooringImg && (
            <div className={style.title}>Flooring</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.flooringImg && (
                <img src={info.groundFloor?.detail?.flooringImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.flooringMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.flooringMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.flooringRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.flooringRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.doorWinImg && (
            <div className={style.title}>Doors & Windows</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.doorWinImg && (
                <img src={info.groundFloor?.detail?.doorWinImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.doorWinMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.doorWinMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.doorWinRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.doorWinRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.stairSlabImg && (
            <div className={style.title}>Staircase Slab</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.stairSlabImg && (
                <img src={info.groundFloor?.detail?.stairSlabImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.stairSlabMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.stairSlabMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.stairSlabRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.stairSlabRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.stairStepImg && (
            <div className={style.title}>Staircase Steps</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.stairStepImg && (
                <img src={info.groundFloor?.detail?.stairStepImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.stairStepMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.stairStepMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.stairStepRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.stairStepRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.stairRailImg && (
            <div className={style.title}>Staircase Railings</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.stairRailImg && (
                <img src={info.groundFloor?.detail?.stairRailImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.stairRailMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.stairRailMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.stairRailRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.stairRailRemark}
                </div>
              )}
            </div>
          </div>

          {info.groundFloor?.detail?.passageImg && (
            <div className={style.title}>Passage</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.groundFloor?.detail?.passageImg && (
                <img src={info.groundFloor?.detail?.passageImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.groundFloor?.detail?.passageMoisture && (
                <div className={style.direction}>
                  Description: {info.groundFloor?.detail?.passageMoisture}
                </div>
              )}
              {info.groundFloor?.detail?.passageRemark && (
                <div className={style.direction}>
                  {info.groundFloor?.detail?.passageRemark}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };
  //------------------floors---------------------
  const Floors = () => {
    return (
      <>
        <div>
          <div className={style.titleName}>Floors</div>
        </div>
        <div className={style.floorContent}>
          {info.floors?.details?.map((item, index) => (
            <div className={style.item} key={index}>
              <div className={style.title}>Floor - {index + 1}</div>

              {item.columnImg && <div className={style.title}>Columns</div>}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.columnImg && <img src={item.columnImg} />}
                </div>
                <div className={style.lContent}>
                  {item.columnMoisture && (
                    <div className={style.direction}>
                      Description: {item.columnMoisture}
                    </div>
                  )}
                  {item.columnRemark && (
                    <div className={style.direction}>{item.columnRemark}</div>
                  )}
                </div>
              </div>

              {item.beamImg && <div className={style.title}>Beam</div>}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.beamImg && <img src={item.beamImg} />}
                </div>
                <div className={style.lContent}>
                  {item.beamMoisture && (
                    <div className={style.direction}>
                      Description:{item.beamMoisture}
                    </div>
                  )}
                  {item.beamRemark && (
                    <div className={style.direction}>{item.beamRemark}</div>
                  )}
                </div>
              </div>

              {item.slabImg && <div className={style.title}>Slabs</div>}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.slabImg && <img src={item.slabImg} />}
                </div>
                <div className={style.lContent}>
                  {item.slabMoisture && (
                    <div className={style.direction}>
                      Description:{item.slabMoisture}
                    </div>
                  )}
                  {item.slabRemark && (
                    <div className={style.direction}>{item.slabRemark}</div>
                  )}
                </div>
              </div>

              {item.lintelImg && (
                <div className={style.title}>Lintel/Chajja</div>
              )}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.lintelImg && <img src={item.lintelImg} />}
                </div>
                <div className={style.lContent}>
                  {item.lintelMoisture && (
                    <div className={style.direction}>
                      Description:{item.lintelMoisture}
                    </div>
                  )}
                  {item.lintelRemark && (
                    <div className={style.direction}>{item.lintelRemark}</div>
                  )}
                </div>
              </div>

              {item.balconyImg && (
                <div className={style.title}>porch/canopy/balcony</div>
              )}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.balconyImg && <img src={item.balconyImg} />}
                </div>
                <div className={style.lContent}>
                  {item.balconyMoisture && (
                    <div className={style.direction}>
                      Description:{item.balconyMoisture}
                    </div>
                  )}
                  {item.balconyRemark && (
                    <div className={style.direction}>{item.balconyRemark}</div>
                  )}
                </div>
              </div>

              {item.exWallImg && (
                <div className={style.title}>External wall</div>
              )}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.exWallImg && <img src={item.exWallImg} />}
                </div>
                <div className={style.lContent}>
                  {item.exWallMoisture && (
                    <div className={style.direction}>
                      Description:{item.exWallMoisture}
                    </div>
                  )}
                  {item.exWallRemark && (
                    <div className={style.direction}>{item.exWallRemark}</div>
                  )}
                </div>
              </div>

              {item.inWallImg && (
                <div className={style.title}>Internal wall</div>
              )}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.inWallImg && <img src={item.inWallImg} />}
                </div>
                <div className={style.lContent}>
                  {item.inWallMoisture && (
                    <div className={style.direction}>
                      Description:{item.inWallMoisture}
                    </div>
                  )}
                  {item.inWallRemark && (
                    <div className={style.direction}>{item.inWallRemark}</div>
                  )}
                </div>
              </div>

              {item.flooringImg && <div className={style.title}>Flooring</div>}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.flooringImg && <img src={item.flooringImg} />}
                </div>
                <div className={style.lContent}>
                  {item.flooringMoisture && (
                    <div className={style.direction}>
                      Description:
                      {item.flooringMoisture}
                    </div>
                  )}
                  {item.flooringRemark && (
                    <div className={style.direction}>{item.flooringRemark}</div>
                  )}
                </div>
              </div>

              {item.doorWinImg && (
                <div className={style.title}>Doors & Windows</div>
              )}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.doorWinImg && <img src={item.doorWinImg} />}
                </div>
                <div className={style.lContent}>
                  {item.doorWinMoisture && (
                    <div className={style.direction}>
                      Description:{item.doorWinMoisture}
                    </div>
                  )}
                  {item.doorWinRemark && (
                    <div className={style.direction}>{item.doorWinRemark}</div>
                  )}
                </div>
              </div>

              {item.stairSlabImg && (
                <div className={style.title}>Staircase Slab</div>
              )}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.stairSlabImg && <img src={item.stairSlabImg} />}
                </div>
                <div className={style.lContent}>
                  {item.stairSlabMoisture && (
                    <div className={style.direction}>
                      Description:
                      {item.stairSlabMoisture}
                    </div>
                  )}
                  {item.stairSlabRemark && (
                    <div className={style.direction}>
                      {item.stairSlabRemark}
                    </div>
                  )}
                </div>
              </div>

              {item.stairStepImg && (
                <div className={style.title}>Staircase Steps</div>
              )}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.stairStepImg && <img src={item.stairStepImg} />}
                </div>
                <div className={style.lContent}>
                  {item.stairStepMoisture && (
                    <div className={style.direction}>
                      Description:
                      {item.stairStepMoisture}
                    </div>
                  )}
                  {item.stairStepRemark && (
                    <div className={style.direction}>
                      {item.stairStepRemark}
                    </div>
                  )}
                </div>
              </div>

              {item.stairRailImg && (
                <div className={style.title}>Staircase Railings</div>
              )}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.stairRailImg && <img src={item.stairRailImg} />}
                </div>
                <div className={style.lContent}>
                  {item.stairRailMoisture && (
                    <div className={style.direction}>
                      Description:
                      {item.stairRailMoisture}
                    </div>
                  )}
                  {item.stairRailRemark && (
                    <div className={style.direction}>
                      {item.stairRailRemark}
                    </div>
                  )}
                </div>
              </div>

              {item.passageImg && <div className={style.title}>Passage</div>}
              <div className={style.imgData}>
                <div className={style.rContent}>
                  {item.passageImg && <img src={item.passageImg} />}
                </div>
                <div className={style.lContent}>
                  {item.passageMoisture && (
                    <div className={style.direction}>
                      Description:{item.passageMoisture}
                    </div>
                  )}
                  {item.passageRemark && (
                    <div className={style.direction}>{item.passageRemark}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  //-----------------TerraceFloor------------------
  const TerraceFloor = () => {
    return (
      <>
        <div>
          <div className={style.titleName}>Terrace Floor</div>
        </div>
        <div className={style.floorContent}>
          {info.terraceFloor?.detail?.columnImg && (
            <div className={style.title}>Columns</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.columnImg && (
                <img src={info.terraceFloor?.detail?.columnImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.columnRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.columnRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.beamImg && (
            <div className={style.title}>Beams</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.beamImg && (
                <img src={info.terraceFloor?.detail?.beamImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.beamRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.beamRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.slabImg && (
            <div className={style.title}>Slabs</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.slabImg && (
                <img src={info.terraceFloor?.detail?.slabImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.slabRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.slabRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.lintelImg && (
            <div className={style.title}>Lintel/Chajja</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.lintelImg && (
                <img src={info.terraceFloor?.detail?.lintelImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.lintelRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.lintelRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.balconyImg && (
            <div className={style.title}>porch/canopy/balcony</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.balconyImg && (
                <img src={info.terraceFloor?.detail?.balconyImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.balconyRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.balconyRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.exWallImg && (
            <div className={style.title}>External wall</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.exWallImg && (
                <img src={info.terraceFloor?.detail?.exWallImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.exWallRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.exWallRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.inWallImg && (
            <div className={style.title}>Internal wall</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.inWallImg && (
                <img src={info.terraceFloor?.detail?.inWallImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.inWallRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.inWallRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.flooringImg && (
            <div className={style.title}>Flooring</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.flooringImg && (
                <img src={info.terraceFloor?.detail?.flooringImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.flooringRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.flooringRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.doorWinImg && (
            <div className={style.title}>Doors & Windows</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.doorWinImg && (
                <img src={info.terraceFloor?.detail?.doorWinImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.doorWinRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.doorWinRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.stairSlabImg && (
            <div className={style.title}>Staircase Slab</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.stairSlabImg && (
                <img src={info.terraceFloor?.detail?.stairSlabImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.stairSlabRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.stairSlabRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.stairStepImg && (
            <div className={style.title}>Staircase Steps</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.stairStepImg && (
                <img src={info.terraceFloor?.detail?.stairStepImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.stairStepRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.stairStepRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.stairRailImg && (
            <div className={style.title}>Staircase Railings</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.stairRailImg && (
                <img src={info.terraceFloor?.detail?.stairRailImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.stairRailRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.stairRailRemark}
                </div>
              )}
            </div>
          </div>

          {info.terraceFloor?.detail?.passageImg && (
            <div className={style.title}>Passage</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.terraceFloor?.detail?.passageImg && (
                <img src={info.terraceFloor?.detail?.passageImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.terraceFloor?.detail?.passageRemark && (
                <div className={style.direction}>
                  Remarks: {info.terraceFloor?.detail?.passageRemark}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  //----------------Basement----------------------
  const Basement = () => {
    return (
      <>
        <div>
          <div className={style.titleName}>Basement</div>
        </div>
        <div className={style.floorContent}>
          {info.basementInfo?.detail?.columnImg && (
            <div className={style.title}>Columns</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.columnImg && (
                <img src={info.basementInfo?.detail?.columnImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.columnRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.columnRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.beamImg && (
            <div className={style.title}>Beams</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.beamImg && (
                <img src={info.basementInfo?.detail?.beamImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.beamRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.beamRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.slabImg && (
            <div className={style.title}>Slabs</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.slabImg && (
                <img src={info.basementInfo?.detail?.slabImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.slabRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.slabRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.lintelImg && (
            <div className={style.title}>Lintel/Chajja</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.lintelImg && (
                <img src={info.basementInfo?.detail?.lintelImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.lintelRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.lintelRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.balconyImg && (
            <div className={style.title}>porch/canopy/balcony</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.balconyImg && (
                <img src={info.basementInfo?.detail?.balconyImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.balconyRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.balconyRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.exWallImg && (
            <div className={style.title}>External wall</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.exWallImg && (
                <img src={info.basementInfo?.detail?.exWallImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.exWallRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.exWallRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.inWallImg && (
            <div className={style.title}>Internal wall</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.inWallImg && (
                <img src={info.basementInfo?.detail?.inWallImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.inWallRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.inWallRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.flooringImg && (
            <div className={style.title}>Flooring</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.flooringImg && (
                <img src={info.basementInfo?.detail?.flooringImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.flooringRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.flooringRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.ventilationImg && (
            <div className={style.title}>Validation</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.ventilationImg && (
                <img src={info.basementInfo?.detail?.ventilationImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.ventilationRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.ventilationRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.stairSlabImg && (
            <div className={style.title}>Staircase Slab</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.stairSlabImg && (
                <img src={info.basementInfo?.detail?.stairSlabImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.stairSlabRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.stairSlabRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.stairStepImg && (
            <div className={style.title}>Staircase Steps</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.stairStepImg && (
                <img src={info.basementInfo?.detail?.stairStepImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.stairStepRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.stairStepRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.stairRailImg && (
            <div className={style.title}>Staircase Railings</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.stairRailImg && (
                <img src={info.basementInfo?.detail?.stairRailImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.stairRailRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.stairRailRemark}
                </div>
              )}
            </div>
          </div>

          {info.basementInfo?.detail?.passageImg && (
            <div className={style.title}>Passage</div>
          )}
          <div className={style.imgData}>
            <div className={style.rContent}>
              {info.basementInfo?.detail?.passageImg && (
                <img src={info.basementInfo?.detail?.passageImg} />
              )}
            </div>
            <div className={style.lContent}>
              {info.basementInfo?.detail?.passageRemark && (
                <div className={style.direction}>
                  Remarks: {info.basementInfo?.detail?.passageRemark}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  //----------------Foundation---------------------
  const Foundation = () => {
    return (
      <>
        <div>
          <div className={style.titleName}>Foundation</div>
        </div>
        <div className={style.container}>
          {info.foundationInfo?.detail?.graphData && (
            <>
              <label className={style.title}>Moisture sensor Graph</label>
              <AreaChart data={info.foundationInfo?.detail?.graphData} />
            </>
          )}
          {info.foundationInfo?.detail?.bargraphData && (
            <>
              <label className={style.title}>PH Test Graph</label>
              <BarChart data={info.foundationInfo?.detail?.bargraphData} />
            </>
          )}
          {info.foundationInfo?.detail?.depth && (
            <>
              <label className={style.title}>Footing Details</label>
              <table className={style.table}>
                <tr>
                  <td>Depth</td>
                  <td>{info.foundationInfo?.detail?.depth}</td>
                </tr>
                <tr>
                  <td>Length</td>
                  <td>{info.foundationInfo?.detail?.length}</td>
                </tr>
                <tr>
                  <td>width</td>
                  <td>{info.foundationInfo?.detail?.width}</td>
                </tr>
                <tr>
                  <td>ASTx</td>
                  <td>{info.foundationInfo?.detail?.astx}</td>
                </tr>
                <tr>
                  <td>ASTy</td>
                  <td>{info.foundationInfo?.detail?.asty}</td>
                </tr>
              </table>
            </>
          )}
          {info.foundationInfo?.detail?.objective && (
            <>
              <label className={style.title}>Tilting Observed or not</label>
              <div>{info.foundationInfo?.detail?.objective}</div>
            </>
          )}
          {info.foundationInfo?.detail?.condition && (
            <>
              <label className={style.title}>
                Surrounding soil/water condition
              </label>
              <div>{info.foundationInfo?.detail?.condition}</div>
            </>
          )}
          {info.foundationInfo?.detail?.suggestion && (
            <>
              <label className={style.title}>Suggestion</label>
              <div>{info.foundationInfo?.detail?.suggestion}</div>
            </>
          )}
        </div>
      </>
    );
  };

  // let arr = info.foundationInfo?.bargraphData
  // for(i = 0; i < arr.length; i++){

  // }
  return (
    <div ref={ref}>
      <div ref={containerRef} className={style.container}>
        {info.basicInfo?.detail && <BasicInfo />}
        {info.techDetail?.detail && <TechnicalDetails />}
        {info.groundFloor?.detail && <GroundFloor />}
        {info.floors?.details && <Floors />}
        {info.terraceFloor?.detail && <TerraceFloor />}
        {info.basementInfo?.detail && <Basement />}
        {info.foundationInfo?.detail && <Foundation />}
      </div>
    </div>
  );
});

export default Report;
