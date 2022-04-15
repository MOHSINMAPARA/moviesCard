import React,{useState,useEffect} from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import axios from 'axios'


function Demo() {
    const [data,setData]=useState({})

    useEffect(()=>{

        axios.get("https://hexanovate-eq5fxeakz-thephenom1708.vercel.app/api/movies")
        .then((res)=>{
            setData(res.data)
        })
        .catch(err=>alert(err))

    },[])


    return(
      <div>
      
      
      
        {
          data.map((res) => {
            return( 
              <div class="card" style="width: 18rem;">
                <img src={res.poster} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{res.title}</h5>
                  <h5 class="card-title">{res.IM}</h5>
                  <p class="card-text">< AiOutlineHeart/></p>

                </div>
              </div>
      
      
      
            )
          }
          )
        }
      
      
      </div>
      
      
      )
        
        
      
      }
export default Demo