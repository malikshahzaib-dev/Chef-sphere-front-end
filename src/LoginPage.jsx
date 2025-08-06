import { useState } from "react"
import image9 from "../src/images/img-9.jpg"
import { useNavigate } from "react-router-dom"
const LoginPage = () =>{

    const navigate = useNavigate()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()


   if(  !email || !password){
    alert("something went wrong")
   }

        const dataForm = {
            email,
            password
        }

        fetch("http://localhost:3000/users/login",{
            method:"POST",
            body:(JSON.stringify(dataForm)),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res => res.json()).then(data =>{
            localStorage.setItem("user",JSON.stringify(data.user))
            localStorage.setItem("token",data.token)
        navigate("/")


        })
    }
    return (

        <>


   <div  className=" d-flex mt-5 rounded" style={{height:"88vh",width:"100vw",background:"#fff5ef"}}>
      
      <div style={{height:"100%",width:"50%",background:"red"}}>
       <img src={image9} alt=""className="rounded" style={{height:"100%",width:"100%"}}/>
      </div>
   
     
           <div  className="d-flex justify-content-center align-items-center border" style={{ height: "100%",width:"50%",background:"white" }}>
           <form onSubmit={handleSubmit}>
           <div  className=" rounded mt-3 p-4 " style={{height:"84%",background:"",width:"100%",padding:"2px"}}>
                <h1 className="" style={{textAlign:"center"}}>Login Page</h1>
                <p style={{textAlign:"center"}}>Sign in to your RecipeShare account</p>
                <div>
                <label htmlFor="email" className="mt-4">email</label><br />
                <input onChange={(e) =>setEmail(e.target.value)} className="rounded border" type="email" name="email" id="email" placeholder="enter-email" style={{height:"48px" ,width:"100%", paddingLeft:"8px"}}/>
                </div>
                <div>
                    <label htmlFor="password" className="mt-4">password</label><br />
                    <input onChange={(e) =>setPassword(e.target.value)} className="rounded border"  type="password" name="password" id="password" placeholder="enter-password" style={{height:"48px", width:"100%" ,paddingLeft:"8px"}} />
                </div>
                {/* <a href="/home"> */}
                <div  className="d-flex justify-content-center">
                    <button onClick={() => navigate("/")} type="submit" className="btn btn-dark mt-4" style={{height:"48px" ,width:"200px"}}>Login</button>
                </div>
                {/* </a> */}
                <div className="d-flex justify-content-center mt-3">
                 <a href="/Register">  <p>you don't hava an account ? Register </p> </a>
                </div>
                </div>
            
              </form>  
           </div>
           </div>
    </>
    )
}
export default LoginPage





