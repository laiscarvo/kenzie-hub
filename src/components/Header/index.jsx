import Logo from "../../asserts/Logo.png"
import Button from "../Button";
import { Container } from "./style";
import { useHistory } from "react-router-dom"


const Header = ( { auth, setAuth }) => {
    const history = useHistory();

    const handleClick = () => {
        localStorage.clear();
        setAuth(false)
        history.push('/');
    }

    return (
        <Container>
            <img src={Logo} />
            <Button onClick={handleClick}>Sair</Button>
        </Container>
    )
}

export default Header;