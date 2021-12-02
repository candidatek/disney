import React from 'react'
import styled from "styled-components";

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne>
                    <img src="/images/cta-logo-one.svg"/>
                </CTALogoOne>

                <SignUp>
                    GET ALL THERE
                </SignUp>

                <Description>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, minus rem. Magni nostrum ullam id quos voluptate praesentium
                     ipsum blanditiis, modi llum debitis error doloremque. Voluptatibus, dicta?
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png">
                </CTALogoTwo>

            </CTA>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc( 100vh - 70px);
    &:before{
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.75;
    }
    
`;


const CTA = styled.div`
    max-width: 650px;
    padding-top: 80px 40px;
    width: 100% ;
    display: flex;
    flex-direction: column;
`;

const CTALogoOne = styled.div``;

const SignUp = styled.a `
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0px;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
margin-top: 8px;
margin-bottom: 20px;
letter-spacing: 1.5px;
&:hover {
    background-color: #0483ee;
}

`;

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

const CTALogoTwo = styled.img``;