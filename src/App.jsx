import usefetch from './api'
import './App.css'
//import Photo from './photo'
function App() {
let {product , loading,error}= usefetch('https://api.escuelajs.co/api/v1/products')
 console.log(product)

  

  return(
  <> 

  
  <div className=' text-center font-bold  bg-black text-white '>
     
   <div className='grid grid-cols-4  gap-4 h-full  bg-black'>
   
  {
    product.map((obj) =>(

   
<div className=' m-2 border-2 border-white' key={`${obj.id}-${product.slug}`}> 
 
  <img src={obj.images} alt="obj.description"  className=' border-2 border-white m-6 size-60 ml-14' />
    <p className='text-center text-white'>{obj.title}</p>
</div>
   ))}
  </div>

  </div>
  {
  loading ?
    <h1 className='bg bg-black h-screen grid justify-center items-center text-white'>loading</h1>
    :
   <h1 className=' bg-black grid justify-center items-center text-white h-screen'>{error}</h1>
  }
  </>
  )
}

export default App
