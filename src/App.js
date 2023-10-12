import WindowTracker from "./WindowTracker";
import {useState} from "react";

export default function App() {

    const [show , setShow] = useState(true)

    function toggle(){
        setShow(prevState => !prevState)
    }


    return (
        <div>
            <button onClick={toggle}>
                toggle window tracker
            </button>
            {show && <WindowTracker />}
        </div>
    );
}