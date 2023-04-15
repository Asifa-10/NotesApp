import React, { createContext, useContext, useEffect, useState } from 'react'
const AppContext = createContext();
const Context = ({ children }) => {
    const getItem = () => {
        const data = localStorage.getItem("notes");
        if (data)
            return JSON.parse(data);
        return [];
    }
    const [time, setTime] = useState(new Date().getDate() + "/" + new Date().getMonth() +
        "-" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState(0);
    const [detail, setdetail] = useState("");
    const [item, allItem] = useState(getItem());
    
    // console.log(item);
    const times = new Date().getDate() + "/" + new Date().getMonth() +
        "-" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    useEffect(() => {
        setTime(times);
    })
    useEffect (() =>{
        localStorage.setItem("notes", JSON.stringify(item));
    },[item])
    return (
        <>
            <AppContext.Provider value={{ item, title, priority, detail, time, allItem, setTitle, setdetail, setPriority }}>
                {children}
            </AppContext.Provider>
        </>
    )
}
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, Context, useGlobalContext }