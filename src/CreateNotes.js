import React from "react";
import { useGlobalContext } from "./Context";

const CreateNotes = ()=>{
    const {item, title, priority, detail, time, allItem, setTitle, setdetail, setPriority}= useGlobalContext();
    const AddItem = () => {
        if (title === "")
            alert("please enter Title");
        else if (title.length > 15)
            alert("please set title 1 to 15 character ");
        else {
            const Allitem = {
                id: new Date().getTime().toString(),
                title: title,
                priority: priority,
                detail: detail,
                time: time
            }
            allItem([...item, Allitem])
        }
        setTitle("");
        setdetail("");
        setPriority(0)
    }
    const setByPriority= ()=>{
        let modifyArray = [];
        let arr = [];
        item.map((ele) => {
            arr.push(parseInt(ele.priority));
        })
        arr.sort((a, b) => {
            return a - b;
        })
        for (var i = 0; i < arr.length; i++)
            for (var j = 0; j < item.length; j++)
                if (item[j].priority == arr[i]) {
                    modifyArray.push(item[j]);
                    break;
                }
        allItem(modifyArray);
    }
    document.title="Notes"
    return(
        <>
            <header>
                <h1>Notes</h1>
            </header>
            <br/><hr/>
            <div className="nav_bar">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"  className="title"/>
                <textarea value={detail} type="text" onChange={(e) => setdetail(e.target.value)}  placeholder="Description"/>
                <div className="priority"><span>Priority</span> <br/><input type="number" value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Priority" id="pr"/></div>
                <div className="btns">
                <button onClick={AddItem}>Add+</button>
                <button onClick={setByPriority}>SetPriority</button>
                </div>
                <div className="time">Current Time: <br/><span>{time}</span></div>
            </div>
            <br/>
            <hr/>
        </>
    )
}

export default CreateNotes;