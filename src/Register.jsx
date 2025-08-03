import { useState } from "react"
import image4 from "../src/images/img-4.jpg"
import { useNavigate } from "react-router-dom"
const Register = () => {

    const navigate = useNavigate()

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(fullName, "name")
    console.log(email, "email")
    console.log(password, "email")

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataForm = {
            fullName,
            email,
            password
        };

        fetch("http://localhost:3000/users/signup", {
            method: 'POST',
            body: JSON.stringify(dataForm),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json()).then(data => {

            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('user', JSON.stringify(data.user._id))

            console.log(data.user,"du")
            localStorage.setItem('token', data.token)
            navigate('/Home')

        })




    };



    return (
        <>



            <div className=" d-flex  rounded  border-none" style={{ background: "fff5ef", marginTop: 35, height: "88vh" }}>
                <div style={{ height: "100%", width: "50%" }}>
                    <img src={image4} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                </div>


                <div className=" d-flex justify-content-center align-items-center bg-success" style={{ height: "100%", width: "50%" }}>

                    <form onSubmit={handleSubmit}>

                        <div style={{ height: "85%", width: "100%", padding: "20px",background:"red",marginTop:"0px" }}>
                            <h1 style={{ textAlign: "center" }}>Register</h1>
                            <p style={{ textAlign: "center" }}>Create your account to start sharing recipes</p>
                            <div>
                                <label htmlFor="name" className="mt-4">Full Name</label><br />
                                <input onChange={(e) => { setFullName(e.target.value) }} type="text" name="name" id="name" placeholder="enter ypur full name" className="rounded border" style={{ width: "100%", height: "48px", paddingLeft: "8px", }} />
                            </div>
                            <div>
                                <label htmlFor="email" className="mt-3">email</label><br />
                                <input onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="email" placeholder="enter-email" className="rounded border " style={{ width: "100%", height: "48px", paddingLeft: "8px", }} />
                            </div>
                            <div>
                                <label htmlFor="password" className="mt-3">password</label><br />
                                <input onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" id="password" placeholder="enter-password" className="rounded border" style={{ width: "100%", height: "48px", paddingLeft: "8px", }} />
                            </div>
                            <div className=" d-flex justify-content-center" >
                                <button type="submit" className="mt-4 rounded bg-dark text-white" style={{ height: "40px", width: "160px" }}>Register</button>
                            </div>
                            <div className=" d-flex justify-content-center mt-3" >
                                <a href="/loginPage">Already have an account
                                    ? LoginPage
                                </a>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Register










