import React, {useState, useRef} from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import SortView from './components/SortView'
import './App.css';
import { Bubble } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2'


var timersIds = []


function  Timeout(fn, interval){
  var id = setTimeout(fn, interval);
  this.cleared = false;
  this.clear = function () {
      this.cleared = true;
      clearTimeout(id);
  };
}




function App() {

  var chartColors = {
    default: 'rgba(255,99,132,0.4)',
    focus: 'teal'
  };

  const sortNames = ['Bubble', 'Insertion', 'Selection', 'Merge', 'Quick', 'Heap' ]
  const [sort, setSort] = useState('0')



  var colorArray = [chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,
    chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default
  ,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,
  chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,
  chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default
,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,
chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,chartColors.default,
chartColors.default,chartColors.default,chartColors.default]

  var dataArray10 = [65, 59, 80, 81, 56, 70, 72, 89, 23, 11]
  var dataArray20 = [65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39]
  var dataArray30 = [65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 2,45,77,88,63,12.5,78,35]
  var dataArray40 = [65, 59, 80, 81, 56, 70, 72, 89, 23, 11, 4, 92, 87, 84, 50, 57, 59, 44, 49, 39, 35, 32, 2,45,77,88,63,12.5,78,35,76, 80, 86, 79, 77, 55, 92, 17, 29, 90]
  var dataArray50 = [76, 80, 86, 79, 77, 55, 92, 17, 29, 90, 18, 4, 3, 90, 6, 85, 18, 78, 36, 59, 8, 99, 45, 2, 67, 65, 37, 52, 8, 6, 100, 1, 92, 75, 6, 14, 74, 5, 22, 45, 22, 95, 26, 5, 36, 100, 65, 60, 42, 42]
  const sizes = [dataArray10,dataArray20,dataArray30, dataArray40, dataArray50]
  
  const [size, setSize] = useState(2)
  const [data, setData] = useState(sizes[size])
  const [colorData, setColorData] = useState(colorArray)
  const [speed, setSpeed] = useState(1)
  const [sorting, setSorting] = useState(false)
  const [slideDisabled, setSliderDisabled] = useState(false)


  

  const changeSort = (e) => {
      setData([...sizes[size]])
      setSort(e.target.id)
      document.getElementById(sort).style.fontWeight = ''
      document.getElementById(sort).style.fontSize = '1.15em'
      document.getElementById(e.target.id).style.fontWeight = 'bold'
      document.getElementById(e.target.id).style.fontSize = '1.4em'
  }

  const triggerSort = () => {
    sortMapping[sort]()
  }


  const firstIndexRef = useRef()
  const secondIndexRef = useRef()

  const timersObserver = () => {
     
    let interval = setInterval(() => {
      console.log(timersIds.length)
      if(timersIds.every(item => item.cleared === true)){
        clearInterval(interval)
        setSliderDisabled(false)
      }
      console.log('checking in progress...')
    },1000)
  }


  const bubbleSort = () => {
    setSliderDisabled(true)
    setSorting(true)
    console.log(sorting)
    let attemp = 10
    let counter = 1

    for (let j = 0; j<data.length; j++){
      let jj = j
      for (let i = 0; i < data.length; i++) {
        var timeout = new Timeout(() => {
        if(data[i] > data[i+1]){
          const newBars = data
          colorArray[i] = chartColors.focus
          colorArray[i+1] = chartColors.focus
          firstIndexRef.current = i
          secondIndexRef.current = i+1 
          let temp = newBars[i];
          newBars[i] = newBars[i+1];
          newBars[i+1] = temp;
          setColorData([...colorArray])
          setData([...newBars]) 
          colorArray[firstIndexRef.current] = chartColors.default
          colorArray[secondIndexRef.current] = chartColors.default    
        }
        timeout.clear()
      }, speed * (jj + counter))
      timersIds.push(timeout)
      counter++
    }
  }
  timersObserver()
  }

 

  const insertSort = () => {
    setSliderDisabled(true)
    setSorting(true)
    let cpt = 1
    const newBars = data
    for(let i = 0; i < data.length; i++){
      let ii = i 
      for(let j = i - 1; j >= 0; j--){
        let timeout = new Timeout(() => {
          if(data[j] > data[i]){
            colorArray[secondIndexRef.current] = chartColors.default
            colorArray[j] = chartColors.focus
            secondIndexRef.current = j 
            let temp = newBars[i];
            newBars[i] = newBars[j];
            newBars[j] = temp;
            setColorData([...colorArray])
            setData([...newBars])
            colorArray[secondIndexRef.current] = chartColors.default
            cpt++
            i--
          }
          timeout.clear()
        }, speed*(ii+cpt))
        timersIds.push(timeout) 
      }
    }
    timersObserver()
  }

  const selectSort = () => {
    setSliderDisabled(true)
    setSorting(true)
    let minimumIndex = 120
    for(let i = 0; i < data.length; i++){
      for(let j=i+1; j< data.length; j++){
        if(data[i] > data[j] && data[j] < data[minimumIndex]){
            minimum = j
        }
      }
      let temp = data[i]
      data[i] = data[minimumIndex]
      data[minimumIndex] = 
    }
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
  

  const  valueText = (e) => {
    setSpeed(e.target.value)
    console.log(e.target.value)
  }

  const valueText2 = (e) => {
    setSize(e.target.value)
    setData(sizes[Number(e.target.value)])
  }


  

  return (
    <div className="App">
      <NavBar slider={slideDisabled} valueText={valueText} valueText2={valueText2}/>
      <div className="app-container">
        <SideBar running={slideDisabled} changeSort={changeSort} triggerSort={triggerSort}  />
        
        <div className="view-container">
            {
                data.map((item, index) => {
                  return <div key={index} className="bar" style={{height:`${item}%`, backgroundColor: `${colorData[index]}`}}> <b> {item !== 0 ? item : ' '}  </b></div>
                })
            }
        </div>
      </div>
    </div>
  );
}


export default App;
