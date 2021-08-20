import Styled from "styled-components";

//TODO..................................................

export const BodyPage = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Container = Styled.div`
    display:flex;
    padding: 1rem;

`;

export const Boxcar = Styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 40%
    height:100%;
`;

export const CardCar = Styled.div`
    display: flex;
    width: 12rem;
    flex-direction: column;
    border: 0.1px #e2e2e2 solid;
    margin: 5px ;
    opacity: ${(props) => (props.isactivate === true ? 1 : 0.5)};
    
    &:hover{
        border: 0.1px #00c4ff solid;
        cursor: grab;
    }
`;

export const BoxButton = Styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    background-color: #e2e2e2;
    &:hover{
        background-color: #00c4ff;
    }

    img{
        cursor: pointer;
    }
`;

export const BoxCardInfo = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 4rem;
`;

export const BoxListCar = Styled.div`
    width: 45rem;
    height: 30rem;
    border: 0.5px solid #e2e2e2;
    padding: 10px;
`;

export const BoxCardList = Styled.div`
    height: 100%;
`;

export const CardCarList = Styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space between;
    border: 0.5px solid #00c4ff;

    div{
        display: flex;
    }
`;

export const BoxButtonListCar = Styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #00c4ff;
`;

export const ImgRemove = Styled.img`
    cursor: pointer;
`;

export const BoxRessTotal = Styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2rem; 
`;

export const BoxImgCar = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const BoxBPClear = Styled.div`
    background-color: #e2e2e2;
    cursor: pointer;
`;
