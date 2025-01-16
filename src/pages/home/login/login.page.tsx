import React from "react";
import {useForm} from "react-hook-form";
// styles
import { LoginContainer, LoginContent, LoginHeadLine, LoginInputContainer, LoginSubtitle } from "./login.styles";


// componentes
import CustomButton from "../../../components/custom-button/custom.button.components";
import Header from "../../../components/header/header.components";

// icons
import {FiLogIn} from "react-icons/fi";
import { BsGoogle } from "react-icons/bs";
import CustomInput from "../../../components/custom-input/custom-input.component";


const LoginPage = () => {
    const {register,
         formState: {errors},
         handleSubmit,
        } = useForm();

        const handleSubmitPress = (data: any) => {
            console.log({data});
        }

    return ( 
        <>
            <Header />

            <LoginContainer>
                <LoginContent>
                    <LoginHeadLine>Entre com a sua conta</LoginHeadLine>

                        <CustomButton startIcon={<BsGoogle size={25}/>}>Entrar com Google</CustomButton>

                        <LoginSubtitle>ou entre com seu email</LoginSubtitle>

                        <LoginInputContainer>
                            <p>E-mail</p>
                           <CustomInput hasError={!!errors?.email} placeholder="Digite seu email" {...register('email', {required: true})}/>
                        </LoginInputContainer>

                        <LoginInputContainer>
                            <p>Senha</p>
                            <CustomInput hasError={!!errors?.password} placeholder="Digite sua senha" {...register('password', {required:true})}/>
                        </LoginInputContainer>
                        <CustomButton startIcon={<FiLogIn size={18}/>} onClick={() => handleSubmit(handleSubmitPress)}>Entrar</CustomButton>
                </LoginContent>
            </LoginContainer>
        </>
     );
}
 
export default LoginPage;