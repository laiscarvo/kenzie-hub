import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    

    background: var(--Grey-4);
`

export const StyledTechnol = styled.section`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 90vw;
    margin: 10px auto;
    

    @media (min-width: 800px) {
        width: 750px;
       
    }

    h2{
        color: var(--Grey-0);

        font-weight: 600;
        font-size: 16px;
        line-height: 18px;

    }
    button{
        width: 33px;
        height: 32px;
        padding-top: 3px;
        
    }

`

export const ContainerCard = styled.div`
    background: var(--Grey-3);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90vw;
    max-height: 400px;
    gap: 16px;
    padding: 22px 19px;

    margin: 20px auto;

    @media (min-width: 800px) {
        width: 750px;
       
    }

    

`