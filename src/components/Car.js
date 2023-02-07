import styled from "styled-components";

import { FaCar } from 'react-icons/fa';

export default function Car({car,licensePlate,color}) {

    return (
            <>
            <Container>
                <FaCar className="icon" style={{color:`${color}`}}/>
                <p>{car}</p>
                <p>{licensePlate}</p>
            </Container>
            </>
    );
}

const Container = styled.div`
  width: 80%;
  height: 80%;
  display:flex;
  flex-direction: column;
  align-items: center;
  .icon{
    font-size: 50px;
    margin-bottom: -5px;
  }
`
