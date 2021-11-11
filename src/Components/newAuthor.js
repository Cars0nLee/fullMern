import React, {useState} from "react"
import {Paper} from "@material-ui/core"
import 'bootstrap/dist/css/bootstrap.css';
import {useHistory} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const {initialFname, initialLname, onSubmitProp} = props
    const [fname, setFname] = useState(initialFname);
    const [lname, setLname] = useState(initialLname);
    const [fnameError,setFnameError] = useState("");
    const [lnameError,setLnameError] = useState("");
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({fname, lname})
        setFname("");
        setLname("");
    }

    const handleFname = (e) => {
        setFname(e.target.value)
        if(e.target.value.length >=3){
            setFnameError("")
        }
        else{
            setFnameError("First Name is too short!")
        }
    }

    const handleLname = (e) => {
        setLname(e.target.value)
        if(e.target.value.length >=3){
            setLnameError("")
        }
        else{
            setLnameError("Last Name is too short!")
        }
    }

    const cancel = (e) =>{
        e.preventDefault();
        history.push("/")
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>First Name</label>
                <Paper elevation={3}>
                <input className="form-control" type="text" name="fname" value={fname} onChange={(e)=>{handleFname(e)}}></input>
                </Paper>
                <p>{fnameError}</p>
                <br></br>
                <label>Last Name</label>
                <Paper elevation={3}>
                <input className="form-control" type="text" name="lname" value={lname} onChange={(e)=>{handleLname(e)}}></input>
                </Paper>
                <p>{lnameError}</p>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
            <br></br>
            <button onClick={cancel}>Cancel</button>
        </div>
        
    )
}
