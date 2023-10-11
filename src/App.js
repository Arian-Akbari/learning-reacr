import Image from "./project 1/Image";
import Introduction from "./project 1/intoduction";
import Buttons from "./project 1/Buttons";
import About from "./project 1/About";
import Practice from "./Practice";

export default function App(){
    const colors = ["red" , "blue" , "yellow"];
    const el = colors.map((color) =>{
        return <Practice color = {color}/>
    })

  return(
          <div>
              {el}
          </div>
      )
}