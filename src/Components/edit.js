import React, {useEffect, useState} from "react"
import axios from "axios"
import NewAuthor from "./newAuthor"
import {useHistory, useParams} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const {_id} = useParams();
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/author/${_id}`)
        .then(res=>{setAuthor(res.data.author); setLoaded(true)})
    }, [])
    
    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/edit/${_id}`, author)
        .then(res => {console.log(res)})
        history.push("/")
    }

    return(
        <div>
            {loaded && (<NewAuthor onSubmitProp={updateAuthor} initialFname={author.fname} initialLname={author.lname}></NewAuthor>)}
        </div>
        
    )
}
