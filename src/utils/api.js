
import axios from "axios";
import { useEffect } from "react";
// import { ProcessOptions } from "postcss";

const baseUrl = "https://youtube138.p.rapidapi.com"
// b43ff79aacmsh2760d38e1236b77p12ea7fjsn57440696e888
// a7f97d0ce0msh75eb304ad067032p173affjsnb0777ee2b4a4
const options = {
    params: {hl:'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':"a7f97d0ce0msh75eb304ad067032p173affjsnb0777ee2b4a4",
      'X-RapidAPI-Host':'youtube138.p.rapidapi.com'
    }
  };

  export const fetchApi = async (url) =>{
    const {data} = await axios.get(`${baseUrl}/${url}`,options) 
    return data
  }

  
    // export const getData = async (url) =>{
    //   const res = await fetch(`${baseUrl}/${url}`,options)
    //   const data = await res.json()
    //   return data
    // }