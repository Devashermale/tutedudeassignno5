import { useEffect, useState } from "react"

function usefetch(url) {
    let [product ,setproducts] =useState([])
  let [loading, setloading] =useState(true)
  let [error,seterror] = useState(null)
    
  useEffect( ()=>{
    fetch(url)
    .then(res =>res.json())
   .then(data =>{
   setproducts(data);
   }).catch (
  err =>{
   seterror(err.message)
   
  }).finally(
  setloading(false)
  )
    },[])
    return {product,loading, error};
}
export default  usefetch