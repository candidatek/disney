import React from 'react'
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {

    let moviesData = useSelector(selectMovies);
    let movieArr = [];
    for(let movie in moviesData) {
        //console.log(moviesData[movie].title);
        movieArr.push(moviesData[movie]);
    }
    //movieArr.map((movie) => console.log(movie.cardImg))
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                {movieArr && 
                movieArr.map((movie) => ( 
                    <Wrap key={movie.title}>
                        <img src= {movie.cardImg} alt={movie.title} />
                    </Wrap>
                ))}
            </Content>
        </Container>
    )
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
    
`;

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249,249,249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-color: rgba(249,249,249,0.9);
    }
`;