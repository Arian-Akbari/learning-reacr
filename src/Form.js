import {useState} from "react";

export default function App() {
    const [formData , setformData] = useState(
        {
            firstName: "",
            lastName:"",
            email:"" ,
            comment:"",
            isFriend: true,
            employment: "",
        }
    )
    console.log(formData.employment)
    function handleChange(event){
        setformData(prevState => {
            const {name , value , type , checked} = event.target
            return {
                ...prevState ,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    return (
        <div className={"main"}>
            <input
                type={"text"}
                placeholder={"First Name"}
                onChange={handleChange}
                name={"firstName"}
                value={formData.firstName}
            />
            <input
                type={"text"}
                placeholder={"First Name"}
                onChange={handleChange}
                name={"lastName"}
                value={formData.lastName}
            />
            <input
                type={"email"}
                placeholder={"Email"}
                onChange={handleChange}
                name={"email"}
                value={formData.email}
            />
            <textarea
                value={formData.comment}
                placeholder={"comment"}
                onChange={handleChange}
                name={"comment"}
            />
            <input
                type={"checkbox"}
                id={"friend"}
                checked={formData.isFriend}
                onChange={handleChange}
                name={"isFriend"}
            />
            <label htmlFor={"friend"}>are we friends ?</label>
            <br/>
            <br/>
            <fieldset>
                <legend>current employment status</legend>
                <input
                    type={"radio"}
                    id={"unemployed"}
                    name={"employment"}
                    value={"unemployed"}
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
                />
                <label htmlFor={"unemployed"}>UnEmployed</label>
                <br/>

                <input
                    type={"radio"}
                    id={"fullTime"}
                    name={"employment"}
                    value={"fullTime"}
                    onChange={handleChange}
                    checked={formData.employment === "fullTime"}
                />
                <label htmlFor={"fullTime"}>FullTime</label>
                <br/>

                <input
                    type={"radio"}
                    id={"partTime"}
                    name={"employment"}
                    value={"partTime"}
                    onChange={handleChange}
                    checked={formData.employment === "partTime"}
                />
                <label htmlFor={"partTime"}>PartTime</label>
                <br/>
            </fieldset>

        </div>
    )
}