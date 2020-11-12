import React from 'react'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider';
import './NavBar.css'

function valuetext(value) {
    return `${value}°C`;
}

function NavBar(props) {


    return (
        <nav>
            <div className="">
                <h1>REACT SORTING VISUALIZER</h1>
                <div className="params">
                    <div className="param">
                    <Typography className="label" id="array-size" gutterBottom> Array size </Typography>
                    <Slider 
                        defaultValue={50}
                        getAriaValueText={valuetext}
                        aria-labelledby="array-size"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={100}
                    />
                    </div>
                    <div className="param">
                    <Typography className="label" id="algorithm-speed" gutterBottom> Algorithm speed </Typography>
                    <Slider 
                        defaultValue={1}
                        getAriaValueText={valuetext}
                        aria-labelledby="algorithm-speed"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={5}
                    />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
