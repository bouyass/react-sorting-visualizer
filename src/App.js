import React, {useState, useEffect} from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import SortView from './components/SortView'
import './App.css';
import { Bubble } from 'react-chartjs-2';

function App() {

  const sortNames = ['Bubble', 'Insertion', 'Selection', 'Merge', 'Quick', 'Heap' ]
  const [sort, setSort] = useState('0')

  const sortData = {
    labels: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    datasets: [
      {
        label:  `${sortNames[sort]} sort`,
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderWidth: 1,
        hoverBackgroundColor: '#fff',
        hoverBorderColor: '#0a2ea9',
        barPercentage:1,
        data: [65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 46, 25, 21,65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 46, 25, 21,65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 46, 25, 21,65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 46, 25, 21, 66, 68, 100, 18,5,8,65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 46, 25, 21, 66, 68, 100, 18,5,8,65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 46, 25, 21, 66, 68, 100, 18,5,8,65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 46, 25, 21, 66, 68, 100, 18,5,8,65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 46, 25, 21, 66, 68, 100, 18,5,8,65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 46, 25, 21, 66, 68, 100, 18,5,8,65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 46, 25, 21, 66, 68, 100, 18,5,8, 0]
      }
    ]
  };

  
  const [data, setData] = useState(sortData)
  const [speed, setSpeed] = useState(1)
  const [size, setSize] = useState(50)

  useEffect(() => {
    setData(sortData)
  },[sort])

  const changeSort = (e) => {
      setSort(e.target.id)
      document.getElementById(sort).style.fontWeight = ''
      document.getElementById(sort).style.fontSize = '1.15em'
      document.getElementById(e.target.id).style.fontWeight = 'bold'
      document.getElementById(e.target.id).style.fontSize = '1.4em'
  }

  const triggerSort = () => {
    sortMapping[sort]()
  }

  const handleChangeSize = () => {

  }

  const handleChangeSpeed= () => {

  }


  const bubbleSort = () => {
    let attemp = 10
    let temp = 0
    while(attemp > 0){
      attemp = 0
      for(let i = 0; i < data.datasets[0].data.length; i++){

          if(data.datasets[0].data[i] > data.datasets[0].data[i+1]){
            temp = data.datasets[0].data[i]
            data.datasets[0].data[i] = data.datasets[0].data[i+1]
            data.datasets[0].data[i+1] = temp
            attemp++
          }
      }
    }

  }

  const insertSort = () => {
    alert('insert sort')
  }

  const selectSort = () => {
    alert('select sort')
  }


  const mergeSort = () => {
    alert('merge sort')
  }


  const quickSort = () => {
    alert('quick sort')
  }

  const heapSort = () => {
    alert('heap sort')
  }

  const sortMapping = [bubbleSort, insertSort, selectSort, mergeSort, quickSort, heapSort]

  return (
    <div className="App">
      <NavBar sizeChangeHandler={handleChangeSize} speedChangeHandler={handleChangeSpeed}/>
      <div className="app-container">
      <SideBar changeSort={changeSort} triggerSort={triggerSort}  />
      <SortView data={data} />
      </div>
    </div>
  );
}

export default App;
