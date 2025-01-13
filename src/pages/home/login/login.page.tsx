import React from "react";
import Header from "../../../components/header/header.components";
import { LoginContainer, LoginContent, LoginHeadLine, LoginInputContainer, LoginSubtitle } from "./login.styles";

const LoginPage = () => {
    return ( 
        <>
            <Header />

            <LoginContainer>
                <LoginContent>
                    <LoginHeadLine>Entre com a sua conta</LoginHeadLine>

                        {/* button */}

                        <LoginSubtitle>ou entre com seu email</LoginSubtitle>

                        <LoginInputContainer>
                            {/*  email input */}
                        </LoginInputContainer>

                        <LoginInputContainer>
                            {/*  password input */}
                        </LoginInputContainer>
                </LoginContent>
               

            </LoginContainer>
        </>
     );
}
 
export default LoginPage;