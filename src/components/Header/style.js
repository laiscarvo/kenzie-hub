import styled from "styled-components";

export const Container = styled.div`
    width: 90vw;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px;
    margin: 10px auto;

    box-shadow: var(--box-shadow);

    @media (min-width: 800px) {
        width: 750px;
       
    }

    img{
        width: 105px;
        height: 14px;
    }
    button{
        width: 56px;
        height: 32px;
        
    }


`