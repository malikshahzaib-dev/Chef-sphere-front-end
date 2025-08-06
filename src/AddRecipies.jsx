import { useState } from "react"
import { data, useNavigate } from "react-router-dom"

const AddRecipies = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")

    const [description, setDecription] = useState("")
    const [cookTime, setCookTime] = useState("")
    const [personServing, setPersonServing] = useState("")

     const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState({
        name: "",
        quantity: "",
        unit: ""
    })

     

    const [instructions, setInstruction] = useState([])
    const [newInstruction, setNewInstruction] = useState("")

    const [image, setImage] = useState("")
    const [urlOfFileToPreview, SetFileToPreview] = useState("")
    const [category, SetCategory] = useState("")
   

    const handleImageChange = (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        if (file) {
            setImage(file)
            SetFileToPreview(URL.createObjectURL(file))
        }
    }

    const handleAddIngradients = (e) => {
        e.preventDefault()
        setIngredients([...ingredients, newIngredient])
        setNewIngredient({})

    }
   


    const handleAddinstruction = (e) => {
        e.preventDefault()
        setInstruction([...instructions, newInstruction])
        setNewInstruction("")
    }


    const token = localStorage.getItem("token")



    const handleSubmit = (e) => {
        e.preventDefault()
        const dataForm = {
            title,
            description,
            cookTime,
            personServing,
            category,
            ingredients,
            instructions,
            image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
        }
        fetch("http://localhost:3000/recipes/", {
            method: "POST",
            body: JSON.stringify(dataForm),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res => res.json()).then(data)
        navigate("/recipies")
    }

    return (
        <>


             <div className="d-flex justify-content-around align-items-center  p-4 border fixed-top" style={{ height: "70px", background: "white" }}>
                <div className="d-flex align-items-center gap-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chef-hat"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" /><path d="M6.161 17.009l11.839 -.009" /></svg>
                    </div>
                    <div>
                        <h1 style={{ alignItems: "center", fontSize: "24px", fontWeight: "700" }}>RecipeShare</h1>
                    </div>
                </div>
                <div className="d-flex gap-5" >
                    <a style={{ fontSize: "20px", fontWeight: "500", color: "black" }} href="/">Home</a>
                    <a style={{ fontSize: "20px", fontWeight: "500", color: "black" }} href="/recipies">Recipes</a>
                    <a style={{ fontSize: "20px", fontWeight: "500", color: "black" }} href="/category">Category</a>


                </div>
                <div className="d-flex gap-4 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>  <input className="rounded border" type="text" name="search" id="search" placeholder="searh..." style={{ height: "44px", width: "300px", paddingLeft: "12px" }} />
                    <a href="add-recipies"> <button className="rounded border" style={{ height: "40px", width: "150px" }}> + Add Recipe</button>
                    </a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>


                    </div>
                    <div>
                        <a href="/login-page">
                            <button style={{ height: "38px", width: "80px" }} className="rounded border">login</button>
                        </a>
                    </div>
                </div>
            </div>



            <form onSubmit={handleSubmit}>
                <div className=" rounded mt-2" style={{ background: "#fff5ef", padding: "80PX" }}>
                    <div style={{ paddingLeft: "70px", paddingRight: "70px", marginBottom: "30px" }}>
                        <h1 style={{ fontWeight: "semibold" }}>Create New Recipe</h1>
                        <p>Share your delicious creation with the community</p>
                    </div>
                    <div className="mb-4" style={{ height: "875px", width: "100%", paddingLeft: "70px", paddingRight: "70px" }}>
                        <div className="rounded border" style={{ padding: "20px", background: "#fff5ef" }}>
                            <h1 style={{ fontSize: "32px" }}>Basic Information</h1>
                            <div>
                                <label htmlFor="title">Recipie Title</label><br />
                                <input onChange={(e) => { setTitle(e.target.value) }} className="rounded" type="text" name="title" id="title" placeholder="enter-recipie-title" style={{ height: "40px", width: "100%", border: "1px solid #ced4da", paddingLeft: "12px" }} />
                            </div>


                              <div>
                                <label className="mt-3" htmlFor="cook-time">cook time </label><br />
                                <input onChange={(e) => { setCookTime(e.target.value) }} className="rounded" type="text" name="cook-time" id="cook-time" placeholder="enter-recipie-title" style={{ height: "40px", width: "100%", border: "1px solid #ced4da", paddingLeft: "12px" }} />
                            </div>

                              <div>
                                <label className="mt-3" htmlFor="person">person serving </label><br />
                                <input onChange={(e) => { setPersonServing(e.target.value) }} className="rounded" type="number" name="person" id="person" placeholder="enter-recipie-title" style={{ height: "40px", width: "100%", border: "1px solid #ced4da", paddingLeft: "12px" }} />
                            </div>





                            <div>
                                <label className="mt-3" htmlFor="description">Description</label><br />
                                <textarea onChange={(e) => { setDecription(e.target.value) }} className="rounded" name="description" id="description" placeholder="enter description" style={{ width: "100%", border: "1px solid #ced4da", paddingLeft: "12px" }}></textarea>
                            </div>
                            <div>
                                <label className="mt-3" htmlFor="category">Category</label><br />
                                <select onChange={(e) => { SetCategory(e.target.value) }} className="rounded" name="category" id="category" style={{ width: "100%", height: "40px", paddingLeft: "12px", border: "1px solid #ced4da" }}>
                                    <option value="Beef Bulgogi">_</option>
                                    <option value="Beef Bulgogi">Beef Bulgogi</option>

                                    <option value="Desserts">Desserts</option>
                                    <option value="Shawarma">Shawarma</option>
                                    <option value="Biryani">Biryani</option>
                                    <option value="Chicken">Chicken </option>
                                </select>
                            </div>
                            <div>
                                <h1 className="mt-3" style={{ fontSize: "32px" }}>Recipe Image</h1>
                                <div className="rounded d-flex justify-content-center align-items-center " style={{ width: "100%", height: "400px", border: "1px solid #ced4da" }} >
                                    <div>
                                        <p style={{ textAlign: "center" }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="40"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="mb-2"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 19v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1" />
                                                <path d="M7 13l5 -5l5 5" />
                                                <path d="M12 18v-10" />
                                            </svg>
                                        </p>
                                        <p className="" style={{ textAlign: "center" }}>Click to upload or drag and drop <br /><br /> PNG, JPG up to 10MB</p>
                                        <div className=" justify-content-center mt-3 p-4">
                                            <input onChange={(e) => handleImageChange(e)} style={{ height: "", width: "", background: "" }} type="file" className="btn btn-primary" id="file" accept="image/*" ></input>

                                            {
                                                urlOfFileToPreview && <div className="d-flex w-100 justify-content-center mt-2">
                                                    <img src={urlOfFileToPreview} alt="" height={150} width={230} />
                                                </div>
                                            }
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className=" d-flex justify-content-center mt-5" style={{height:"70%",}}>
                        <div className="border rounded mt-5" style={{ padding: 30, background: "white", height: "40%", width: "89%" }}>
                            <h1 style={{ fontSize: "32px" }}>Ingradients</h1>
                            <div className="justify-content-between">
                                <div>
                                    <label htmlFor="name">Name</label><br />
                                    <input className="rounded" type="text" onChange={(e) => setNewIngredient({
                                        ...newIngredient,
                                        name: e.target.value
                                    })} name="name" id="name" placeholder="enter-your-name" style={{ height: "40px", width: "100%", border: "1px solid #ced4da", paddingLeft: "8px" }} />
                                </div>
                                <div>
                                    <label className="mt-3" htmlFor="quantity">Quantity</label><br />
                                    <input onChange={(e) => setNewIngredient({
                                        ...newIngredient,
                                        quantity: e.target.value
                                    })} className="rounded" type="text" name="quantity" id="quantity" placeholder="enter-quantity" style={{ height: "40px", border: "1px solid #ced4da", width: "100%", paddingLeft: "8px" }} />
                                </div>
                                <div>
                                    <label className="mt-3" htmlFor="unit">Unit</label><br />
                                    <input onChange={(e) => setNewIngredient({
                                        ...newIngredient,
                                        unit: e.target.value
                                    })} className="rounded" type="text" name="unit" id="unit" placeholder="enter-unit" style={{ height: "40px", border: "1px solid #ced4da", width: "100%", paddingLeft: "8px" }} />
                                </div>
                            </div>
                            <div>
                                <button onClick={handleAddIngradients} className="mt-3 rounded mb-3 " style={{ height: "40px", width: "100%", border: "1px solid #ced4da" }}> + Add Ingredient</button>
                                <div className="border mt-2">
                                <ul>
                                    {ingredients.map((ing, i) => {
                                        return <li key={i}>
                                           <p> name:{ing.name}</p>
                                            <p>quantity:{ing.quantity}</p>
                                          <p>unit: {ing.unit}</p> 
                                          </li>

                                    })
                                    }
                                </ul>
                                </div >
                                {/* <button className="rounded border btn-lg mt-2 text-center"  onClick={handleDeleteIngradient} style={{height:"28px",width:"30px"}} ><svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="14px"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button> */}

                            </div>


                        </div>
                    </div>




                    <div className=" d-flex justify-content-center mt-3" style={{height:"70%"}}>
                        <div className="border rounded " style={{ padding: 30, background: "white", height: "40%", width: "89%" }}>
                            <h1 style={{ fontSize: "32px" }}>Instruction</h1>
                            <div className="">
                                <textarea
                                    onChange={(e) => setNewInstruction(e.target.value)} name="instruction" className=" rounded border" id="instruction" placeholder="step 1" style={{ paddingLeft: "12px", height: "90px", width: "100%" }}></textarea>
                            </div>
                            <div>

                                <button onClick={handleAddinstruction}
                                    className="mt-3 rounded" style={{ height: "40px", width: "100%", border: "1px solid #ced4da" }}> + Add instruction</button>
                               

                                    <div className="border mt-4">

                                    <ul>
                                        {instructions.map((instr, i) => {
                                            return <li key={i}>{instr}</li>
                                        })}
                                    </ul>
                                    </div>


                                </div>




                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-end gap-4  text-center mt-5 align-items-center" style={{ height: "40px", width: "100%", paddingRight: "63px" }}>
                        <button type="button" className="border rounded " style={{ height: "40px", width: "150px" }}>save as draft</button>
                        <button type="submit" className="border rounded btn btn-dark" style={{ height: "40px", width: "150px" }}>Publish Recipe</button>
                    </div>
                
            </form>



            <div className="mt-5" style={{ height: "300px", width: "100%", background: "black", color: "white", padding: "40px" }}>
                <div className="d-flex justify-content-between align-item-center " >
                    <div>
                        <h1>RecipeShare</h1>
                        <p>Discover and share amazing <br />recipes with food lovers <br /> worldwide.</p>
                    </div>
                    <div>
                        <h1>Explore</h1>
                        <p> <a href="/Recipies">All Recipes</a></p>
                        <p> <a href="/Category">Category</a></p>
                        <p> <a href="/Recipies">Top Chefs</a></p>
                    </div>
                    <div>
                        <h1>Community</h1>
                        <p> <a href="/Recipies">About us</a></p>
                        <p> <a href="/Category">Contact</a></p>
                        <p> <a href="/Recipies">Blog</a></p>
                    </div>
                    <div>
                        <h1>Support</h1>
                        <p> <a href="/Recipies">Help Center</a></p>
                        <p> <a href="/Category">Privacy</a></p>
                        <p> <a href="/Recipies">Term of Service</a></p>
                    </div>
                </div>
                <hr />
                <p style={{ textAlign: "center", marginTop: "30px" }}>© 2024 RecipeShare. All rights reserved.</p>
            </div>


        </>
    )

}

export default AddRecipies