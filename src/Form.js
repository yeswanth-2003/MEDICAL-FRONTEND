// import { useState } from "react"



// const Form =() =>{

//     const [formdata,setformdata] = useState({
//         name:'',
//         email:'',
//         password:'',
//         profile_pic:''
//     })

//     const handlechange = (e) =>{
//         console.log('onchae')
//         const {name,value} = e.target;

//         setformdata({
//             ...formdata,
//             [name]:value
//         })
//     }

//     const handlesubmit = async (e) =>{

//         console.log('submit')
//         e.preventDefault();

//         try{
//             const response = await fetch('http://localhost:5000/api/register',{
//                 method:"POST",
//                 body:JSON.stringify(formdata),
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 mode:'cors'
//             })
//             const data = await response.json();
//             console.log(data)
//         }
//         catch(error){
//             console.log(error)
//         }
//     }

//     return(
//         <div>
//             <h1>
//                 Register user
//             </h1>

//             <form onSubmit={handlesubmit}>
//                 <label>name</label>
//                 <input type="text" name="name" placeholder="Enter your name" required value={formdata.name} onChange={handlechange} />
//                 <label>email</label>
//                 <input type="email" name="email" placeholder="enter your email" required value={formdata.email} onChange={handlechange}/>
//                 <label>password</label>
//                 <input type="password" name="password" placeholder="password" required  value={formdata.password} onChange={handlechange}/>

//                 <button type="submit">Register</button>
           
//             </form>
           
//         </div>
//     )
// }

// export default Form