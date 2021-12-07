import React, { useEffect } from 'react';
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from "../features/user/UserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {auth, provider ,signInWithPopup, signOut , onAuthStateChanged} from "../firebase";


function Header() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }));
            //navigate("/");
            }
            
        })
    })

    const signIn = () => {
        signInWithPopup(auth , provider)
        .then((result)=>{
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }));
        });
    }

    const signOutUser = () =>{
        signOut(auth)
        .then(()=>{
            dispatch(setSignOut());
            navigate("/login");
        })
    }

    return (
        <Nav>
            <Logo src = "/images/logo.svg"/>
            { !userName ? (
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login> 
                </LoginContainer>
                
            ) : (
                <>
                <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGNAL</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIE</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
                </NavMenu>
                <UserImg onClick={signOutUser} src={userPhoto} alt={userName} />  
                </>
            ) }
            
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
display: flex;
align-items: center;
padding: 0 36px;
height: 70px;
overflow-x: hidden;
background-color: #090b13;
`;

const Logo = styled.img`

    width: 80px;

`;

const NavMenu = styled.div `
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0 12px;
        img {
            height: 20px;
        }
    
    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after{
            content:"" ;
            height: 2.5px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
        &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;

        }
    }
}
    
   
`;

const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 47%;
`;

const Login =styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    letter-spacing:1.5px;
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease 0s;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
    }
`;

const LoginContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
`;