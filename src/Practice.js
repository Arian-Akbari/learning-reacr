export default function Practice(props){
    return(
        <div>
            <h1>
                {props.data.location}
            </h1>
            <p>
                {props.data.id}
            </p>
            <p>
                {props.data.score}
            </p>
            <p>
                {props.data.good}
            </p>
        </div>
    )
}