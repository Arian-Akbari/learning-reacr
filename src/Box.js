import {useState} from "react";

export default function Box(props){
    const styles = {
        backgroundColor: props.on ? "blue" : "transparent"
    }
    return(
        <div style={styles} className={"box"} onClick={() =>props.toggle(props.id)}></div>
    )
}



// function toggle(id) {
//     setSquares(prevSquare => {
//         return prevSquare.map((square) => {
//             return square.id === id ? {...square , on: ! square.on} : square
//         })
//     })
// }
//
// const squareEl = squares.map(square => (
//     <Box
//         key={square.id}
//         on={square.on}
//         id={square.id}
//         toggle={toggle}
//     />
// ))
//
//
//
// return (
//     <div>
//         <h1>boxes go here</h1>
//         {squareEl}
//     </div>
// )