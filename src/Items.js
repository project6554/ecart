import React , {useState, useEffect}from 'react'
import axios, { AxiosError } from 'axios'
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import { set } from 'react-hook-form'

const productURL = 'https://fakestoreapi.com/products'
//const apiKey ='b36fa6255a7643db6801c94e69fa5d2c'

//const movietitleURL =`https://www.themoviedb.org/movie?api_key=${apiKey}&query=`


const Items = () => { 
const [products,setProducts]    = useState([])
//const [movieTitle, setMovieTitle] = useState('')

const popularProducts = async ()  =>{
    const response = await axios.get(`${productURL}`)
        console.log(response.data.result)
        setProducts(response.data.results)
    
}


//const searchTitle = async(searchTitle) => {    
  //  const response = await axios.get(`${movietitleURL}${searchTitle}`)
   // setMovies(response.data.results)
//}

//const handleChange = (event) =>{
  //  setProductTitle(event.target.value)

//}



useEffect(() => {
    popularProducts()
}, [] ); 


    return (
        <div className="container" style ={{marginTop:"50px"}}>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">           
                {products.map((productslist) => {
                    return (
                        <div className="col" key={productslist.id}>
                        <div className="card h-100">
                            <img src={'https://image.tmdb.org/t/p/w300/' + productslist.poster_path} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{productslist.original_title}</h5>
                                <p className="card-text">{productslist.overview}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Release Date: {productslist.release_date}</small>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>    
</div>
    )
}

export default Items