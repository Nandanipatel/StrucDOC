import React, { useState, useEffect, useRef } from 'react';
import { Download } from 'react-feather';
import ReactToPrint from 'react-to-print';
import Editor from '../Editor/Editor';
import Resume from '../Report/Report';
import style from "./Body.module.css";

function Body() {
    const sections = {
        basicInfo: "Basic Info",
        techDetail: "Technical Details",
        groundFloor: "Ground Floor",
        floors: "Floor Details",
        terraceFloor: "Terrace floor",
        basementInfo: "Basement",
        foundationInfo: "Foundation Type",
        cracksInfo: "Cracks Info"

    };
    const defaultcolor = '#226291';
    const [activeColor, setActiveColor] = useState(defaultcolor);

    const reportRef = useRef();

    const [reportInfo, setReportInfo] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.techDetail]: {
            id: sections.techDetail,
            sectionTitle: sections.techDetail,
            detail: {},
        },
        [sections.groundFloor]: {
            id: sections.groundFloor,
            sectionTitle: sections.groundFloor,
            detail: {},
        },
        [sections.floors]: {
            id: sections.floors,
            sectionTitle: sections.floors,
            details: [],
        },
        [sections.terraceFloor]: {
            id: sections.terraceFloor,
            sectionTitle: sections.terraceFloor,
            detail: {},
        },
        [sections.basementInfo]: {
            id: sections.basementInfo,
            sectionTitle: sections.basementInfo,
            detail: {},
        },
        [sections.foundationInfo]: {
            id: sections.foundationInfo,
            sectionTitle: sections.foundationInfo,
            detail: {},
        },
        [sections.cracksInfo] : {
            id: sections.cracksInfo,
            sectionTitle: sections.cracksInfo,
            details: []
        }
    });

    useEffect(() => {
    }, [reportInfo])
    console.log(reportInfo);
    return (
        <div className={style.container}>
            <p className={style.heading}>
                Structural Health Monitoring Report
            </p>
            <div>
            <iframe width="500" height="250" scrolling="no" title={`Moisture Sensor Value`} src={`https://thingspeak.com/channels/1886568/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15`}></iframe>
            </div>
            <div className={style.toolbar}>
                <ReactToPrint
                    trigger={() => {
                        return (
                            <button className={style.downloadbtn}>
                                <span>Download!&nbsp;<Download />
                                </span>
                            </button>
                        );
                    }}
                    content={() => reportRef.current}
                />

            </div>
            <div className={style.main}>
                <Editor
                    sections={sections}
                    information={reportInfo}
                    setInformation={setReportInfo}
                />
                <Resume
                    ref={reportRef}
                    sections={sections}
                    information={reportInfo}
                    activeColor={activeColor}
                />
            </div>
        </div>
    )
}

export default Body;