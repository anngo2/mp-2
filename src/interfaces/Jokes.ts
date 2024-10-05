export interface Joke {
    id: number;         /* A unique identifier for each joke */
    category: string;   /* The category or type of the joke  */
    joke: string;       /* The punchline or content of the joke */
    safe: boolean;
}
