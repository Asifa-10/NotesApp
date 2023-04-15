import React from "react";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";

const Notes = ()=>{
    const {item, title, priority, detail, time, allItem, setTitle, setdetail, setPriority} = useGlobalContext();
    const deleteId = (id) =>{
        const updateItem= item.filter((elem) =>{
            return elem.id !== id;
        })
        allItem(updateItem);
        
    }
    return(
        <>
            <div className="container">
                {
                    item.map((ele) =>{
                        const {id, title, priority, detail}=ele;
                        let newdata= detail.slice(0,15);
                        return(
                            <div className="notes" key={ele.id}>
                                <h2 className="notecls"><span className="notetitl">Title: </span>{title}</h2>
                                <h2 className="notecls"><span className="notetitl">Detail: </span>{newdata.length == 15 ? `${newdata}...`: `${newdata}`}</h2>
                                <h2 className="notecls"><span className="notetitl">Priority: </span>{priority}</h2>
                                <h2 className="notecls"><span className="notetitl">CreateTime: </span>{ele.time}</h2>
                                <div className="notebtns">
                                    <Link to={`NoteId/${ele.id}`}>
                                        <button>Read</button>
                                    </Link>
                                    <button onClick={(e)=> deleteId(ele.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
                <button onClick={() => allItem([])}>DeleteAll</button>
            </div>

        </>
    )
}

export default Notes;