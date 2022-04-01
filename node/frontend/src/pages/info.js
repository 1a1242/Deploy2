// import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';

function Info() {
    const [alldata, setAlldata] = useState([])
    useEffect(() => {
        // console.log("in useEffect")
        axios.get('http://localhost:3000/api/info').then(response=>{
          if (response.data.success){
            setAlldata(response.data.alldata)
            console.log("alldata:", alldata)
          }
          else
            console.log('THERE\'S AN ERROR! WHICH IS', response.data.err)
          })
    }, [])
    return (
      <Table striped bordered hover variant="info" size="sm">
  <thead style= {{'border': '1px solid'}}>
    <tr>
      <th width="170">S.No</th>
      <th width="170">Account ID</th>
      <th width="170">Limit</th>
      <th>products</th>
      {/*<th>Mean Surface Temp</th>*/}
    </tr>
  </thead>
  <tbody>
  {alldata.map((planet, index)=>{
    return(
    <tr key = {index} style= {{'border': '1px solid'}}>
      <td  >{index+1}</td>
      <td >{planet.account_id}</td>
      <td >{planet.limit}</td>
      <td >{planet.products}</td>
      {/*<td >{planet.surfaceTemperatureC.mean}</td>*/}
    </tr>)
  })}
  </tbody>
</Table>
    )
}

export default Info;