import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import { Container, Form } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { colorPrimary } from "../../styles/global";

const Signup = () => {
  const signupSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .max(18, "Máximo 18 caracterers"),
    bio: yup
      .string()
      .required("Campo obrigatório")
      .max(30, "Máximo 30 caracterers"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),

    password: yup.string().required("Please Enter your password"),
    /* .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Sua senha deve conter no mínimo 8 caracteres com pelo menos um número, uma letra maiuscula, uma letra minuscula e um caracter especial."
        ) */ confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  console.log(errors);

  const history = useHistory();

  const handleCreateUser = async (data) => {
    console.log(data);
    delete data.confirm_password;

    const response = await api.post("/users", data).catch((err) => {
      console.log(err);
      toast.error("Ops! algo de errado não está certo");
    });
    console.log(response.data);
    toast.success("Conta cadastrada com sucesso!");
    history.push("/");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleCreateUser)}>
        <Input
          register={register}
          name="name"
          label="Nome"
          placeholder="Digite aqui seu nome"
          error={errors.name?.message}
        />
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
          type="password"
          placeholder="Digite aqui sua senha"
          error={errors.password?.message}
        />
        <Input
          register={register}
          name="confirm_password"
          label="Confirmar senha"
          type="password"
          placeholder="Digite novamente sua senha"
          error={errors.confirm_password?.message}
        />
        <Input
          register={register}
          name="bio"
          label="Bio"
          placeholder="Fale sobre você"
          error={errors.bio?.message}
        />
        <Input
          register={register}
          name="contact"
          label="Contato"
          placeholder="Opções de contato"
          error={errors.contact?.message}
        />
        <label>Selecionar módulo</label>
        <select name="course_module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </select>
        <p>{errors.course_module?.message}</p>
        <Button backgroundColor={colorPrimary} type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
