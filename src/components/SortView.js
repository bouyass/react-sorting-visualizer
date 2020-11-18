import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import './SortView.css'

function SortView(props) {

    const[data, setData] = useState()

    useEffect(() => {
        setData(props.data)
    },[])
    
    return (
        <div className="view-container">
            <Bar style={{backgroundColor:'#red'}} data={props.data} width={100} height={50} options={{ maintainAspectRatio: false }}  />
        </div>
    )
}

export default SortView
