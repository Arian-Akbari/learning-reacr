import MemesData from "./MemesData";
import React, {useState} from "react";

export default function Meme() {
    const [memeImage , setMemeImage] = useState("")
    const [testing , setTesting] = useState(true)
    function getMemeImage() {
        const meme = MemesData
        const randomNumber = Math.floor(Math.random() * meme.length)
        setMemeImage(meme[randomNumber])
        setTesting(prevState => !prevState)
        console.log(testing)

    }

    return (
        <main>
            <div className={"form"}>
                <input
                    type={"text"}
                    className={"form--input"}
                    placeholder={"Top Text"}
                />
                <input
                    type={"text"}
                    className={"form--input"}
                    placeholder={"Bottom Text"}
                />
                <button onClick={getMemeImage} className={"form--button"}>
                    Get a new meme image
                </button>
            </div>
            <img src={memeImage} className={"meme--image"}/>
        </main>
    )
}