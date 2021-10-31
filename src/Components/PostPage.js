
import { useState, useEffect } from "react";
import axios from "axios";
import AutoCompleteInput from "./AutoCompleteInput";

const baseURL="https://jsonplaceholder.typicode.com/posts"
// above URL will give me some data 
// need to show that data to the user 
// need to create a state out of that 


//this.setState() 
// hooks 
export default function App(props){

//const [color, setColor]= useState(props.headerColor)
const [post, setPost] = useState(null)// initially it has nothing in it 


useEffect(()=>{  // that performs side effect
  axios.get(baseURL)  // axios using a get methood
  .then((response)=>{
    setPost(response.data)
  })
  .catch(error=>console.log(error))
},[post])


  // const rows = post?.map((row)=>
  //  <tr><td>{row.id}</td> <td>{row.userId}</td> <td>{row.title}</td> <td>{row.body}</td></tr>
  //  );


  const suggestions=[
    "dheeraj","amit","rajesh","rakesh","some othe name","name","bla bla","roman","sohan"
  ];
  const rows = post==null?<tr><td colSpan="4"> Loading ..... </td></tr>:post.map((row)=>
  <tr className="table-primary"><td> <a href="">Go TO {row.id}</a> </td> <td>{row.userId}</td> <td>{row.title}</td> <td>{row.body}</td></tr>
  ); 

return(
  <div>
   
   {console.log("Props "+props.headerColor)}
    <header style={{backgroundColor:props.headerColor }} >
      <h1>I am Header</h1>
    </header>
<div className="container">

    <h1>POSt Data {}</h1>

    <div>
    <AutoCompleteInput suggestions={suggestions} className="form-input"></AutoCompleteInput>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
        <th>Id</th>
        <th>userId</th>
        <th>title</th>
        <th>body</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
  </div>
)


}