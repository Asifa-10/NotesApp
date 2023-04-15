import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";
import { Link, useParams } from "react-router-dom";

const SingleNote = ()=>{
    const {item} = useGlobalContext();
    const {id}= useParams();
    const updateItem= item.filter((ele)=>{
        return ele.id===id;
    })
    useEffect(()=>{
        document.title=`Notes/${id}`
    },updateItem)
    return(
        <>
            <h1 className="snotetitl">{`NoteId: ${id}`}</h1>
            {
                updateItem.map((elem)=>{
                    return(
                        <>
                            <div className="singlenote" key={elem.id}>
                                <h2 className="notecls"><span className="notetitl">Title: </span>{elem.title}</h2>
                                <h4 className="notecls"><span className="notetitl">Detail: </span>{elem.detail}</h4>
                            </div>
                            <br/>
                            <Link to={"/"}>
                                <button>Back</button>
                            </Link>
                        </>
                    )
                })
            }
        </>
    )
}

export default SingleNote;