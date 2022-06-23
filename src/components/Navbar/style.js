import styled from "styled-components";

export const Container = styled.div`
    width: 90vw;
    height: 80px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 0px;
    margin: 10px auto;

    box-shadow: var(--box-shadow);

    @media (min-width: 800px) {
        width: 750px;
    }

    @media (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    h1{
        color: var(--Grey-0);

        font-size: 18px;
        font-weight: 700;
        line-height: 28px;

    }
    p{
        color: var(--Grey-1);

        font-size: 12px;
        font-weight: 400;
        line-height: 22px;

    }
`