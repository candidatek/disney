import React from 'react'
import styled from "styled-components";

function Details() {
    return (
        <Container>
            <Backgroud>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/1331/641331-h" alt="Chhichhore" class=""/>
            </Backgroud>
            <ImageTitle>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/1331/641331-h" alt="Chhichhore" class=""/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span> PLAY </span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span> + </span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitles>
                Lorem ipsum dolor sit amet.
            </SubTitles>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit porro quia optio. Ab sapiente voluptatem iure. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quaerat reprehenderit accusantium.
            </Description>
        </Container>
    )
}

export default Details;

const Container = styled.div`
    min-height: calc(100vh-80px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Backgroud = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:-1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vh;
    min-width: 200px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }  
`;

const Controls = styled.div`
display: flex;
align-items: center;
`;

const PlayButton = styled.div`
    border-radius: 4px;
    font-size: 15px;
    display: flex;

    margin-right: 22px;
    height: 56px;
    padding: 0px 24px;
    align-items: center;
    background: rgb(249,249,249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover {
        background: rgb(198,198,198);
    }
    span {
        color: black;
    }

`;

const TrailerButton = styled(PlayButton)`
    background: rgb(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    text-transform: uppercase;
`;

const AddButton = styled.button`
    margin-right: 10px;
    width: 44px;
    height: 44px;
    justify-content: center;
    border-radius: 50%;
    display: flex;
    align-items: center;
    border: 2px solid white;
    background-color: rgb(0,0,0,0.6);
    cursor: pointer;
        span {
            font-size: 35px;
            color: white;
         }
`;

const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0,0,0,0.8);
`;

const SubTitles = styled.div`
    min-height: 20px;
    font-size: 15px;
    margin-top: 26px;
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    max-width: 700px;
`;