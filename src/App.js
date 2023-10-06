import Image from "./project 1/Image";
import Introduction from "./project 1/intoduction";
import Buttons from "./project 1/Buttons";
import About from "./project 1/About";

export default function App(){
  return(
          <div className={"main"}>
              <div className={"top"}>
                  <Image />
                  <Introduction />
                  <About />
                  <Buttons />
              </div>
          </div>
      )
}