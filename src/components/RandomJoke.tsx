import styled from "styled-components";
import {Joke} from "../interfaces/Jokes.ts";


const AllJokes = styled.div`
    display: flex; /* Enables Flexbox layout for the container */
    flex-flow: row wrap; /* Arranges child elements in a row, and allows wrapping to the next line if needed */
    justify-content: space-evenly; /* Distributes child elements evenly, with equal space between them */
    background-color: #DE9D37; /* Sets the background color of the container */
    width: 100%; /* Ensures the container takes up the full width of its parent */

`
const JokeSetup=styled.div<{category: string, safe: boolean}>`
    height: 50vh; /*makes the height 50percent of what people view (to fix boxes neatly) */
    width: 30%; 
    margin: 1%; 
    padding: 2%;
    background-color: ${(props)=>(props.category === "Programming" ? "#48A592" : "#CAD7B2")}; /*this changes the background color if the joke is a programming joke*/
    font-size: calc(2px + 0.8vw); /*alters the font size */
    text-align: center;
    border: ${(props) => (props.safe ? '2px solid #000' : '7px solid red')}; /* Safe gets a black border, NSFW joke gets a big red border */
    
    h1{
        padding-top: 10%;
        
    }
    h4{padding-top: 15%}
    
    border-radius: 8px; /*makes the box rounder on the edges*/
    overflow-y: auto; /* This adds a scroll bar when the text is too long*/
    
  

   
`;


export default function RandomJoke(props : { data:Joke[] } ){


    return (
        <AllJokes>
            {props.data.map((char: Joke) => (
                <JokeSetup key={char.id} category={char.category} safe={char.safe}>

                    <h1>{char.category}</h1>
                    <h3>{char.safe ? 'Safe' : ' NSFW!!!!!'}</h3>
                    <h1>{char.joke}</h1>
                    <h4>ID: {char.id}</h4>

                </JokeSetup> //div that holds the individual boxes of jokes
            ))}
        </AllJokes>  // the div for the whole joke layout (not individual jokes)
    );
}