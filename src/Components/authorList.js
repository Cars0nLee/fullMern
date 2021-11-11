import React, {useState} from "react"
import {Link} from "react-router-dom"
import Delete from "../Components/delete"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [author, setAuthor] = useState([]);

    const removeFromDom = (authorId) => {
        setAuthor(author.filter(author=>author._id !== authorId))
    }

    return(
        <div>
            {props.author.map((author, id) => {
                return <div key={id}>
                        <Link to={`/edit/${author._id}`}>{author.fname} {author.lname}</Link>
                        <Delete _id={author._id} successCallBack={removeFromDom}></Delete>
                    </div>
            })}
        </div>
    )
}
