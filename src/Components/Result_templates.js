import React from 'react'

export default function Result_templates(props) {
  return (
    <>
{props.result.Response==='True'?
            <div className={`row text-${props.bgMode==='light' ? 'dark':'light'}`} >
                <div className="offset-md-1 col-md-4">
                  <img src={props.result.Poster} alt="" className="img-fluid w-100"  />
                </div>
                <div className="col-md-7 my-4 my-md-0">
                  <div className="row  mt-md-3">
                    <div className="col-md-12">
                     <h3 className="mb-3 fs-1 text-center text-md-start"> Title :- {props.result.Title?props.result.Title:" N/A "}</h3>
                     <h5 className="mt-4 my-md-2 fs-5"> Type :- {props.result.Type?props.result.Type:" N/A "}</h5>
                     <h5 className="mt-3 my-md-2 fs-5"> IMDB :-  {props.result.imdbRating?props.result.imdbRating:" N/A "}  <span className="ms-2 text-muted"> {props.result.imdbVotes} votes</span></h5>
                     <h5 className="mt-3 my-md-2 fs-5"> Genre :- {props.result.Genre?props.result.Genre:" N/A "}</h5>
                     <h6 className="mt-3 my-md-2 fs-5"> Released Date :- {props.result.Released}</h6>                      
                     <h6 className="mt-3 my-md-2 fs-5"> Duration :- {props.result.Runtime?props.result.Runtime:" N/A "} {props.result.Type==='series'?" / Each Episode ":""}</h6>                     
                     <h6 className="mt-3 my-md-2 fs-5"> Director :- {props.result.Director?props.result.Director:" N/A "}</h6>                      
                     <h6 className="mt-3 my-md-2 fs-5"> Actors :- {props.result.Actors?props.result.Actors:" N/A "}</h6>                     
                     <h6 className="mt-3 my-md-2 fs-5"> Writers :- {props.result.Writers?props.result.Writers:" N/A "}</h6>                       
                     <h6 className="mt-3 my-md-2 fs-5"> Countries :- {props.result.Country?props.result.Country:" N/A "}</h6>                     
                     <h6 className="mt-3 my-md-2 fs-5"> Languages :- {props.result.Language?props.result.Language:" N/A "}</h6>                      
                     <h6 className="mt-3 my-md-2 fs-5"> Box office :- {props.result.BoxOffice?props.result.BoxOffice:" N/A "}</h6>                     
                     <h6 className="mt-3 my-md-2 fs-5"> Plot :- {props.result.Plot?props.result.Plot:" N/A "}</h6>                     
                    
                    </div>  
                  </div>
                </div>
              </div>
        :<h1 className="mt-3 my-md-2 fs-1 text-center text-danger">No matches found</h1>}
    </>
  )
}
