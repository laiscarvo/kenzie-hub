import { Container, Form, ContainerMessage } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { colorPrimary } from "../../styles/global";

import { toast } from "react-toastify"

import { useHistory } from "react-router-dom";
import{ useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api"

const Login = ({ auth, setAuth }) => {
    const schema = yup.object().shape({
        email: yup.string().required("Campo obrigatório").email("Email inválido"),
        password: yup.string().required("Campo obrigatório"),
    });

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const history = useHistory();

    if(auth) {
        return <Redirect to="/dashboard"/>;
    }

    const handleLogin = async (data) => {
        const response = await api.post("/sessions/", data).catch((err) => { 
                console.log(err);  
                toast.error("Ops! algo não está certo");
        });

        const { user, token } = response.data;

        localStorage.setItem("@KenzieHub:token", token);
        localStorage.setItem("@KenzieHub:id", JSON.stringify(user.id));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

        toast.success("Login feito");

        setAuth(true)
        history.push("/dashboard")

        
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(handleLogin)}>
                <Input 
                    register={register} 
                    name="email" 
                    label="Email" 
                    placeholder="Digite aqui seu email"
                    error={errors.email?.message}
                />
                <Input 
                    register={register} 
                    name="password" 
                    label="Senha" 
                    placeholder="Digite aqui sua senha" 
                    type="password"
                    error={errors.password?.message}
                />
                <Button backgroundColor={colorPrimary} type="submit">Entrar</Button>

                <ContainerMessage>
                <strong>Ainda não possui uma conta?</strong>
                </ContainerMessage> 

                <Button onClick={ () => history.push('/signup')} type="button">Cadastre-se</Button>
            </Form>
        </Container>
    )
}

export default Login;