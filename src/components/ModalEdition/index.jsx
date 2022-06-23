import { Container, Form, StyledModal, HeaderModal  } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { colorPrimary } from "../../styles/global";
import { MdClose } from "react-icons/md"
import { useForm } from "react-hook-form"

import api from "../../services/api"

import { toast } from "react-toastify"


const ModalEdition = ({ loadTechs, setModalEdition, id}) => {
    const { register, handleSubmit } = useForm();
    const token = localStorage.getItem("@KenzieHub:token");

    const edition = ({ status }) => {
        api.put(`/users/techs/${id}`, {
            status: status,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            loadTechs()
            setModalEdition(false)
        })
        .catch((err) => console.log(err));
    };
    

    return(
        <StyledModal>
            <Container>
                <HeaderModal>
                    <h3>Cadastrar Tecnologia</h3>
                    <button className="closeButton" onClick={() => setModalEdition(false)}><MdClose size={13} /></button>
                </HeaderModal>
                <Form onSubmit={handleSubmit(edition)}>
                    <label>Selecionar status</label>
                    <select name="status" {...register("status")}> 
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <Button backgroundColor={colorPrimary}
                        type="submit">Editar Tecnologia</Button> 
                </Form>
            </Container>
        </StyledModal>
    )
}

export default ModalEdition;