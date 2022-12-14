import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    background: var(--Grey-4);
`
export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    
    padding: 38px 18px 24px 18px;
    gap: 10px;

    background-color: var(--Grey-3);
    border-radius: 4px; 
    box-shadow: var(--box-shadow);

    button {
        margin-top: 8px;
        margin-bottom: 8px;
    }
`

export const ContainerMessage = styled.div`
    text-align: center;
    width: 100%;

    strong {
        font-weight: 500;
    }
`