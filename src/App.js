import {useEffect} from "react";
import Header from "./MemeGenerator/Header";
import Meme from "./MemeGenerator/Meme";

export default function App() {

    useEffect(() =>{
        console.log("chert")
    } , [])

    return (
        <div>
            <Header/>
            <Meme/>
        </div>
    );
}