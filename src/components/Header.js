import styled from "styled-components";

export default function Header() {

    return (
        <HeaderSection>
            <h1>Parking</h1>
        </HeaderSection>
    );
}

const HeaderSection = styled.header`
    width: 100%;
    display: flex;
    font-family: 'Pacifico', cursive;
    height: 100px;
    justify-content: space-between;
    align-items:  center;
    background-color: #464F33;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;

    h1 {
        font-size: 50px;
        color: #F4D525;
        font-family: 'Pacifico', cursive;
        
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;