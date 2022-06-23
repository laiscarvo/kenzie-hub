import styled from "styled-components";

export const Container = styled.div`
    width: 90vw;
    height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 10px auto;

    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    background: var(--Grey-3);
    border-radius: 3px;

    @media (min-width: 400px){
       width: 370px;
        
    }
`
export const HeaderModal = styled.div`
    width: 90vw;
    height: 40px;
    padding: 0 10px;
    margin-top: 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: var(--Grey-2);

    @media (min-width: 400px){
       width: 370px;
        
    }

    h3 {
        color: var(--Grey-0);

        font-size: 12px;
        font-weight: 700;
        line-height: 19px;
    }
    .closeButton {
        border: none;
        background: transparent;
        opacity: .6;

            color: var(--Grey-1);

        transition: .3s;
        &:hover{
            opacity: 1;
        }
    }
`
export const StyledModal = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    
    width: 100%;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.1);
    inset: 0;


`
export const Form = styled.form`
    
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 22px 18px 20px 18px; 
    gap: 10px;

    background-color: var(--Grey-3);
    border-radius: 4px; 
    box-shadow: var(--box-shadow);

    input{
        height: 14px;
    }

    button {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    select {
        height: 40px;

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
