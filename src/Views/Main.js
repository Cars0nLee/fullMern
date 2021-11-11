import React, {useState, useEffect} from "react"
import AuthorList from "../Components/authorList"
import NewAuthor from "../Components/newAuthor"
import axios from "axios"
import {useHistory} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/allauthors")
        .then(res=>{setAuthors(res.data); setLoaded(true)})
        .catch(err=>err)
    })

    const createAuthor = (author) => {
        axios.post("http://localhost:8000/newauthor", author)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        history.push("/")
    }

    return(
        <div>
            <NewAuthor onSubmitProp={createAuthor} initialFname="" initialLname=""></NewAuthor>
            <br></br>
            {loaded && <AuthorList author={authors}></AuthorList>}
        </div>
    )
}
