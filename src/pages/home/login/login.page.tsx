import React from "react";
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
                           <CustomInput placeholder="Digite seu email"/>
                        </LoginInputContainer>

                        <LoginInputContainer>
                            <p>Senha</p>
                            <CustomInput placeholder="Digite sua senha"/>
                        </LoginInputContainer>
                        <CustomButton startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>
                </LoginContent>
            </LoginContainer>
        </>
     );
}
 
export default LoginPage;