import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import ParkingLot from "./ParkingLot"

export default function TrafficScreen() {
  return (
    <>
        <Header/>
        <ParkingLot/>
    </>
        
  )
}

//criado caso queira fazer mobile
const Container = styled.div`
    width:100%;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;