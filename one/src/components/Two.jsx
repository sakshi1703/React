import { useEffect, useState } from "react";

const JokeGame = ()=>{

    const[joke, setJoke] = useState(null)

    const FetchJoke = async ()=>{
        try{
            let res = await fetch("https://official-joke-api.appspot.com/random_joke")
            let data = await res.json(); 

            setJoke(data);
        }
        catch(error){
            console.log("Error fetching joke")
        }
    }

    useEffect(()=>{
        FetchJoke();
    },[])

    return(
        <>
        <h1>Question:</h1>
        <p>Using React and the useEffect hook, create a functional component that fetches and displays a random joke from an external API (e.g., https://official-joke-api.appspot.com/random_joke).</p>
        <hr/>
        <h2>Answer:</h2>
        <h1>Do you wanna Read jokes ?</h1>
        <p>Then you are on right website</p>

        <div>
            {
                joke? (
                    <>
                    <h2>{joke.setup}</h2>
                    <p>{joke.punchline}</p>
                    </>
                ) : (
                    <p>Loading</p>
                )
            }
            <button onClick={FetchJoke}>Next Joke</button>
        </div>
        

        </>
    )
}
export default JokeGame;