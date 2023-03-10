import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactLoading from 'react-loading';
import Button from '@mui/material/Button';


import Car from "./Car"
import axios from "axios";
import { HiRefresh } from 'react-icons/hi';

export default function ParkingLot() {
  const [loading,setLoading] = useState(true)
  const [maxOccupancy,setMaxOccupancy] = useState(39)
  const [clients,setClients] = useState(null)
  
  useEffect(()=>{
    //setInterval(()=>refresh(),15000)
    axios.get(`${process.env.REACT_APP_API_URL}/traffic/parked`).then((response)=>{
      const {clients, maxOccupancy} = response.data
      setClients(clients)
      setMaxOccupancy(maxOccupancy)
      setLoading(false)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  function refresh(){
    axios.get(`${process.env.REACT_APP_API_URL}/traffic/parked`).then((response)=>{
      const {clients, maxOccupancy} = response.data
      setClients(clients)
      setMaxOccupancy(maxOccupancy)
      setLoading(false)
    }).catch((error)=>{
      console.log(error)
    })
  }

  function createParkingLot(){
    let parking =[]
    for(let i = 0; i < maxOccupancy; i++){
      if(clients[i]){
        parking.push({...clients[i],occupied:true})
      }else{
        parking.push({occupied:false})
      }
    }
    return parking
  }

  if(loading){
    return(
    <ContainerLoading>
      <ReactLoading type="spinningBubbles" color="#F4D525" height={200} width={200} />
    </ContainerLoading>
    )
  }

  return (
    <>
      <Container>
        <Button variant="contained" className="test"><HiRefresh className="refresh"/></Button>
        <RefreshButton onClick={refresh}><HiRefresh className="refresh"/></RefreshButton>
        {loading?
          <ContainerLoading>
            <ReactLoading type="spinningBubbles" color="#F4D525" height={200} width={200} />
          </ContainerLoading>:
          createParkingLot().map((spot,index)=> {
            return spot.occupied?
              <Spot key={index}><p className="index">{index+1}</p><Car car={spot.car} color={spot.color} licensePlate={spot.licensePlate}/></Spot>:
              <Spot key={index}><p className="index">{index+1}</p></Spot>
          })
        }
        
      </Container>
    </>
        
  )
}

const Container = styled.div`
    margin-top: 130px;
    width:100%;
    padding-left: 20px;
    padding-right: 20px;
    height: calc(100vh - 200px);
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: flex-start;
    
    gap:15px;
    position:relative;
    .test{
      background-color: #F4D525;
      border-radius: 50%;
      position:fixed;
    top:15px;
    right:30px;
    z-index: 3;
    width:70px;
    height: 70px;
    color: black;
    :hover{
      background-color: #F0F703;
    }
      .refresh{
        font-size: 50px;
      }
    }
`;

const ContainerLoading = styled.div`
    margin-top: 130px;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    padding-top: 130px;
`;

const RefreshButton = styled.button`
  display:none;
    position:fixed;
    top:15px;
    right:30px;
    z-index: 3;
    width:70px;
    height: 70px;
    border-radius: 50%;
    background-color: #F4D525;
    .refresh{
      font-size: 50px;
    }
`;

const Spot = styled.div`
  width:  100px;
  height: 100px;
  background-color: white;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  .index{
    font-family: 'Pacifico', cursive;
    position:absolute;
    line-height: 18px;
    top:0;
    left:4px;
    font-size: 25px;
  }
`