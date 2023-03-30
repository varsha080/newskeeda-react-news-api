import React from 'react'
import { useEffect , useState} from 'react'
import axios, { Axios } from 'axios'

const FetchData = (props) => {
    
    const [news, updatenews] = useState("");
    const fetchdata =() =>{
        axios.get( 
            props.search ?
               console.log(props.search)
            : props.cat 
           ? `https://newsapi.org/v2/top-headlines?country=in&category=${props.cat}&apiKey=d090aed8c83b420d8d8f9baf21af066a`
           :  "https://newsapi.org/v2/top-headlines?country=in&apiKey=d090aed8c83b420d8d8f9baf21af066a"
        ).then((res) =>
            updatenews(res.data.articles))
            console.log(news)
            
        };
    

    useEffect(()=>{
           fetchdata();
    },[props.cat],[props.search])
  return (
    <div style={{backgroundColor:"#c2c2d6"}} >
    <div className='container text-center ' >
        <h2 className='pt-5' style={{fontSize:"2.3rem"}}>ＴＯＰ ＨＥＡＤＬＩＮＥＳ</h2>

        <div className='container my-3' style={{minHeight:"100vh"}}>
            <div className='row text-center'>
               { 
               news ? news.map((items) => (
                <>
                <div className='col my-3 ' >
                   <div className="card" style={{width: "30rem", boxShadow:"2px 2px 10px grey"}}>
                   <img src={items.urlToImage} className=" img-fluid" alt="/Image Not Found" style={{width:"auto", height:"300px", objectFit:"cover"}}/>
                   <div className="card-body">
                     <h5 className="card-title">{items.title}</h5>
                     <p className="card-text">{items.description}</p>
                     <a href={items.url} className="btn btn-primary" target="_blank">Read more..</a>
                    </div>
                    </div>
                    </div>
                    </>
                 ))
                 : <h3>Loading....</h3>
                }
            </div>  
        
        </div>
    </div>
    </div>
  )
}

export default FetchData