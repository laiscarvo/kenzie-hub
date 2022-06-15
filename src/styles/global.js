import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
   
}

body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 0.88rem;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

:root {
    --color-primary: #ff577f;
    --color-primary-focus: #ff427f;
    --color-primary-negative: #59323f;
    --Grey-100: #000000;
    --Grey-4: #121214;
    --Grey-3: #212529;
    --Grey-2: #343b41;
    --Grey-1: #868e96;
    --Grey-0: #f8f9fa;
    --sucess: #3fe864;
    --negative: #e83f5b;
    --caption-color: rgba(0, 0, 0, 0.5);

    --title-1: 1rem;
    --title-2: calc(var(--title-1) - 0.25);
    --title-3: calc(var(--title-2) - 0.25);

    --radius-inputs-buttons: 0.3rem;
    --border: 0.1rem;
    --box-shadow: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);

    --container-size: 1200px;
}
`;

export const colorPrimary= "#ff577f";
export const colorPrimaryFocus= "#ff427f";
export const colorPrimaryNegative= "#59323f";