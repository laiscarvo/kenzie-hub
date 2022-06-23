import styled, {css} from "styled-components"

export const Container = styled.div`
    text-align: left;
    
    label {
        margin-left: 6px;
        
    }
`
export const InputContainer = styled.div`
    padding: .8rem;
    margin: 5px 0px;

    width: 100%;

    display: flex;

    transition: .5s;
    border: 1.5px solid var(--Grey-2);
    border-radius: 4px;
    background: var(--Grey-2);

    :focus-within {
        border: 1.5px solid var(--Grey-0) ;
    }
    ${props => 
        props.isErrored && 
        css`
            border-color: var(--negative);
        `}


    input {
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--Grey-0);
        
        &::placeholder {
        
            color: var(--Grey-1);
        }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px var(--Grey-2) inset !important;
    }

    /* input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: var(--Grey-1);
        -webkit-background-color: var(--Grey-2) !important;
        -webkit-box-shadow: 0 0 0px 1000px #000 inset;
        transition: background-color var(--Grey-2)  5000s ease-in-out 0s;
    } */

`
    