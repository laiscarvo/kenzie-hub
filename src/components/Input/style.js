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
`