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
    select {
        height: 45px;

        padding: 0 .6rem;

        transition: .5s;
        border: 1.5px solid var(--Grey-2);
        border-radius: 4px;
        background: var(--Grey-2);
        color: var(--Grey-1);
        
        &::placeholder {
        
            color: var(--Grey-1);
        }

        :focus-within {
            border: 1.5px solid var(--Grey-0) ;
        }
    }
`
