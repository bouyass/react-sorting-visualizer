import React, {useEffect} from 'react'
import SortTwoToneIcon from '@material-ui/icons/SortTwoTone';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import SelectAllIcon from '@material-ui/icons/SelectAll';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import SpeedIcon from '@material-ui/icons/Speed';
import FilterTiltShiftIcon from '@material-ui/icons/FilterTiltShift';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import './SideBar.css'

function SideBar(props) {

    useEffect(() => {
        document.getElementById('0').style.fontWeight = 'bold'
        document.getElementById('0').style.fontSize = '1.4em'
    }, [])


    return (
        <div className="sideBar-container">

            <div className="sideBar-header"> <SortTwoToneIcon /> <h2>Creative mind</h2> </div>
            <hr />

            <div className="list-container">
                <ul>
                    <li id="0" onClick={props.changeSort}>  <BubbleChartIcon /> Bubble Sort </li>
                    <li id="1" onClick={props.changeSort}> <InsertChartIcon /> Insertion Sort </li>
                    <li id="2" onClick={props.changeSort}> <SelectAllIcon /> Selection Sort </li>
                    <li id="3" onClick={props.changeSort}> <MergeTypeIcon /> Merge Sort </li>
                    <li id="4" onClick={props.changeSort}> <SpeedIcon /> Quick Sort </li>
                    <li id="5" onClick={props.changeSort}> <FilterTiltShiftIcon /> Heap Sort </li>
                </ul>
            </div>

            <div onClick={props.triggerSort} className="sideBar-footer">
                <hr />
                <div className="sideBar-footer-button"> <PlayCircleFilledWhiteIcon /> <button disabled={props.running}> Start demo </button> </div>
            </div>

        </div>
    )
}

export default SideBar
