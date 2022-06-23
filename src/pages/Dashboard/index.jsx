import Button from '../../components/Button'
import { Redirect } from 'react-router-dom'
import Header from "../../components/Header"
import { Container, ContainerCard, StyledTechnol } from './style';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import Card from '../../components/Card';
import { MdAdd} from "react-icons/md"

import api from "../../services/api"
import { toast } from 'react-toastify';
import ModalEdition from '../../components/ModalEdition';



const Dashboard = ({ auth, setAuth}) => {

    const [ modal, setModal] = useState(false);
    const [ modalEdition, setModalEdition] = useState(false)
    const [ tech, setTech] = useState([]);
    const [ infoUser, setInfoUser] = useState({});
    const token = localStorage.getItem("@KenzieHub:token");
    const  id  = JSON.parse(localStorage.getItem("@KenzieHub:id"));
    const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

    console.log(id)
    console.log(user)

    function loadTechs() {
        api.get(`/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => setTech(response.data.techs))
        .catch((err) => console.log(err));
    }

    useEffect(() =>{
        loadTechs();
    }, []);


    const handleRemove = (id) => {
        api.delete(`/users/techs/${id}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then((_) => loadTechs())
        .catch((err) => console.log(err))
    }

    const handleEdition = () => {
        setModalEdition(true)
    }
 
    if (!auth) {
        return <Redirect to="/" />;
    }

    return (
        <Container>
            <Header auth={auth} setAuth={setAuth} />
            <Navbar user={user}  />
            <StyledTechnol>
                <h2>Tecnologias</h2>
                <Button onClick={ () => setModal(!modal)}><MdAdd/></Button>
            </StyledTechnol>
            {modal && (
                <Modal loadTechs={loadTechs} setModal={setModal} setTech={setTech}></Modal>
            )}
            <ContainerCard>
                {tech.map((elem) => (
                    <>
                        <div>
                            <Card 
                                key={elem.id} 
                                title={elem.title} 
                                status={elem.status} 
                                handleRemove={handleRemove}
                                id={elem.id} 
                                handleEdition={handleEdition}
                            /> 
                        </div>
                        {modalEdition && (
                                <ModalEdition setModalEdition={setModalEdition} id={elem.id} loadTechs={loadTechs} />
                        )}
                    </>  
                ))}
            </ContainerCard>
        </Container>
    )
}

export default Dashboard 