import { useState } from "react"
import image9 from "../src/images/img-9.jpg"
import { useNavigate } from "react-router-dom"
const LoginPage = () =>{

    const navigate = useNavigate()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()


//    if(  !email || !password){
//     alert("something went wrong")
//    }

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
{/*         
           <div className="d-flex justify-content-around align-items-center py-4 border fixed-top" style={{ height: "70px", background: "white" }}>

                <div className="d-flex align-items-center gap-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chef-hat"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" /><path d="M6.161 17.009l11.839 -.009" /></svg>
                    </div>
                    <div>
                        <h1 style={{ alignItems: "center", fontSize: "24px", fontWeight: "700" }}>RecipeShare</h1>
                    </div>
                </div>
                <div className="d-flex gap-5">
                    <a style={{ fontSize: "20px", fontWeight: "500", color: "black" }} href="Recipies">Recipes</a>
                    <a style={{ fontSize: "20px", fontWeight: "500", color: "black" }} href="Category">Category</a>

                </div>

                <div className="d-flex gap-4 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>  <input className="rounded border" type="text" name="search" id="search" placeholder="searh..." style={{ height: "44px", width: "300px", paddingLeft: "12px" }} />
                    <a href="AddRecipies"> <button className="rounded border" style={{ height: "40px", width: "150px" }}> + Add Recipe</button>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                </div>
            </div> */}




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





