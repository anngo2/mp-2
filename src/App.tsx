import RandomJoke from "./components/RandomJoke.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {Joke} from "./interfaces/Jokes.ts";

// Define a styled component
const ParentDiv = styled.div`
    width: 80vw; // makes the width only 80% of the screen
    margin: auto;
   
`;

// Main App function
export default function App() {
    // useState Hook to store Data.
    const [data, setData] = useState<Joke[]>([]);

    // useEffect Hook to fetch data from joke.json and handle errors.
    useEffect(() => {
        /*this function is getting the data from the JOKESAPI. It fetches the data and then
         we put it in a hook called data. Which we will send to RandomJokes.tsx to display the data*/
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://v2.jokeapi.dev/joke/Programming,Pun,Spooky,Christmas?type=single&amount=9");

            const { jokes }: { jokes: Joke[] } = await rawData.json();
            setData(jokes); // Set jokes array to state
            console.log("Fetched data: ", jokes);
        }
        fetchData() /*Lets us know if there's an error fetching the data*/
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return (
        <ParentDiv> {/* Wrapper component that contains the child components */}
            <RandomJoke data={data} /> {/* Rendering the RandomJoke component and passing 'data' as a prop */}
        </ParentDiv>
    );

}
