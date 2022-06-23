import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 12px;
    gap: 12px;

    width: 98%;
    height: 48px;

    background: var(--Grey-4);
    border-radius: 4px;

    .divCard {
        width: 470px;
        height: 48px;

        display: flex;
        flex-direction: row;
        align-items: center;
        

        padding: 12px;
        gap: 12px;

        
    }

    &:hover{
        background: var(--Grey-2);
    }
    h3{
        color: var(--Grey-0);

        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
    }
    
    p{
        
        color: var(--Grey-1);

        font-weight: 400;
        font-size: 12px;
        line-height: 22px;

        padding-left: 100px ;
    }

    button{
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