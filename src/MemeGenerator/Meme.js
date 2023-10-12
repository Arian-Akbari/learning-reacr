import MemesData from "./MemesData";
import {useEffect, useState} from "react";
export default function Meme() {
    const [memeImage , setMemeImage] = useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes , setAllMemes] = useState([])

    useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    } , [])

    function getMemeImage() {
        const randomArray = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomArray].url
        setMemeImage(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }
    function handleChange (event){
        const {name , value} = event.target
        setMemeImage(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    return (
        <main>
            <div className={"form"}>
                <input
                    type={"text"}
                    className={"form--input"}
                    placeholder={"Top Text"}
                    name={"topText"}
                    value={memeImage.topText}
                    onChange={handleChange}
                />
                <input
                    type={"text"}
                    className={"form--input"}
                    placeholder={"Bottom Text"}
                    name={"bottomText"}
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className={"form--button"}>
                    Get a new meme image
                </button>
            </div>
            <div className={"container"}>
                <img src={memeImage.randomImage} className={"meme--image"} />
                <p className={"top_text text-overlay"}>{memeImage.topText}</p>
                <p className={"bottom_text text-overlay"}>{memeImage.bottomText}</p>
            </div>

        </main>
    )
}

