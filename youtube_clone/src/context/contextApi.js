import React,{createContext,useState,useEffect} from "rect";

import {fetchData} from "../utils/api";
export const Context = createContext 
const AppContext = (props) =>{
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
    fetchSelectedCategoryData(selectCategories)
    },[selectCategories])
}

const fetchSelectedCategoryData = (query)=>{
    setLoading(true)
    fetchData(`search/?q=${query}`).then((res)=>{
        console.log(res)
        setSearchResults(res)
        setLoading(false)
    })
}

return (
    <Context.Provider
    value ={{loading,
            setLoading,
            searchResults,
            setSelectCategories,
            selectCategories,
            mobileMenu,
            setMobileMenu
         }}
    >
       {props.children}

    </Context.Provider> 
)