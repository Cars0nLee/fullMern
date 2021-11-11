import React from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    // const {_id} = useParams();
    const {successCallBack, _id} = props

    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/delete/${_id}`)
        .then(res=>{console.log(res.data)})
        successCallBack();
    }

    return (
        <div>
            <button onClick={deleteAuthor} className="btn btn-danger">Delete</button>
            </div>
        
    )
}