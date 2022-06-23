import { Container } from "./style"

const Navbar = ({user}) => {
    return (
        <Container>
            <h1>Olá, {user.name}   </h1>
            <p>{user.course_module} </p>
        </Container>

    )
} 

export default Navbar