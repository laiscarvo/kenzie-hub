import { Container, Form, StyledModal, HeaderModal  } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { colorPrimary } from "../../styles/global";
import { MdClose } from "react-icons/md"
import { useForm } from "react-hook-form"

import api from "../../services/api"

import { toast } from "react-toastify"


const Modal = ({ setModal, setTech, loadTechs}) => {
    const { register, handleSubmit } = useForm();
    const token = localStorage.getItem("@KenzieHub:token");
    const  id  = JSON.parse(localStorage.getItem("@KenzieHub:id"));

    const onSubmit = ({ title, status }) => {
        if(!title) {
            return toast.error("Complete o campo")
        }
        api.post("/users/techs", {
            title: title,
            status: status,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            loadTechs() 
            setModal(false)
        })
        .catch((err) => console.log(err));
    };

    return(
        <StyledModal>
            <Container>
                <HeaderModal>
                    <h3>Cadastrar Tecnologia</h3>
                    <button className="closeButton" onClick={() => setModal(false)}><MdClose size={13} /></button>
                </HeaderModal>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        register={register}
                        label="Nome"
                        name="title"
                        placeholder="Nome da tecnologia"
                    />
                    <label>Selecionar status</label>
                    <select name="status" {...register("status")}> 
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <Button backgroundColor={colorPrimary}
                        type="submit">Cadastrar Tecnologia</Button> 
                </Form>
            </Container>
        </StyledModal>
    )
}

export default Modal;