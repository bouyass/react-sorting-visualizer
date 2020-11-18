import React from 'react'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider';
import './NavBar.css'



function NavBar(props) {


    return (
        <nav>
            <div className="">
                <h1>REACT SORTING VISUALIZER</h1>
                <div className="params">
                <div className="param">
                        <form class="range-field">
                            <label for="size">Size</label>
                            <input className="silde" onChange={props.valueText2} id="size" type="range" defaultValue="2" min="0" max="4" step="1" />
                        </form>
                    </div>
                   
                    <div className="param">
                        <form class="range-field">
                            <label for="speed">Speed</label>
                            <input className="silde" onChange={props.valueText} id="speed" type="range" defaultValue="300" min="100" max="500" step="100" />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar


/*


 <div className="param">
                    <Typography className="label" id="array-size" gutterBottom> Array size </Typography>
                    <Slider 
                        defaultValue={50}
                        getAriaValueText={props.valueText2}
                        aria-labelledby="array-size"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        disabled={props.slider}
                        min={0}
                        max={4}
                    />
                    </div>
                    <div className="param">
                    <Typography className="label" id="algorithm-speed" gutterBottom> Algorithm speed </Typography>
                    <Slider 
                        defaultValue={100}
                        getAriaValueText={props.valueText}
                        aria-labelledby="algorithm-speed"
                        valueLabelDisplay="auto"
                        step={100}
                        marks
                        disabled={props.slider}
                        min={100}
                        max={500}
                    />
                    </div>
*/