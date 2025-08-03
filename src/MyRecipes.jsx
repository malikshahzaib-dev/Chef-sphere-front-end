import { useEffect, useState } from "react"
import image1 from "../src/images/img-1.webp"
import image3 from "../src/images/img-3.jpg"
import image4 from "../src/images/img-4.jpg"
import image5 from "../src/images/img-5.webp"
import image6 from "../src/images/img-6.webp"
import image7 from "../src/images/img-7.webp"
import { useNavigate, useParams } from "react-router-dom"



const MyRecipies = () => {

  const navigate = useNavigate()
  const [recepies, setRecepies] = useState([])
 const token = localStorage.getItem("token")
 const userId = localStorage.getItem("userId")

  useEffect(() => {


    fetch(`http://localhost:3000/recipes?createdBy=${userId}`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }).then(res => res.json()).then(data => setRecepies(data))
  }, [])
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
                    <a style={{ fontSize: "20px", fontWeight: "500", color: "black" }} href="Home">Home</a>
                    <a style={{ fontSize: "20px", fontWeight: "500", color: "black" }} href="Recipies">Recipes</a>
                    <a style={{ fontSize: "20px", fontWeight: "500", color: "black" }} href="Category">Category</a>


                </div>
                <div className="d-flex gap-4 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>  <input className="rounded border" type="text" name="search" id="search" placeholder="searh..." style={{ height: "44px", width: "300px", paddingLeft: "12px" }} />
                    <a href="AddRecipies"> <button className="rounded border" style={{ height: "40px", width: "150px" }}> + Add Recipe</button>
                    </a>
                    <div>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                     
                   
                    </div>
                    <div>
                        <a href="/LoginPage">
                        <button style={{height:"38px",width:"80px"}} className="rounded border">login</button>
                        </a>
                    </div>
                </div>
            </div>


      <div className="" style={{ background: "#fff5ef", overflow: "hidden", padding: "35px" }}>
        <div className="mt-2" style={{ padding: "80px" }}>
          <div style={{ marginBottom: "0px" }}>
            <h1 style={{ textAlign: "center", fontWeight: "700" }}>My Recipies</h1>
            <p style={{ textAlign: "center", fontWeight: "400", fontSize: "20px" }} className="mt-3">Discover delicious recipes from our community of chefs</p>
          </div>
          <div>
            <input
              type="text"
              className="rounded mt-3  mb-0 border"
              style={{ width: "100%", height: "40px", paddingLeft: "16px" }}
              placeholder="Search Recipes..."
            />
          </div>
        </div>
        <div className="container mb-2">
          <div className="row">
            {
              recepies.map((recepie) => (
                
                  <div key={recepie._id} className="col-4 gy-4  rounded border-none p-2 ml-2" style={{ height: "400px",background: "white", borderRadius: "8px" }}>
                    <img src={image7} className="rounded" alt="" style={{ height: "200px", width: "100%" }} />
                    <div>
                      <h4 className="" style={{ paddingLeft: "30px", marginTop: "20px" }}>{recepie.title}</h4>
                      <p style={{ paddingLeft: "30px", marginTop: "10px" }}>{recepie.createdBy.fullName}</p>
                          <p style={{ paddingLeft: "30px" }}>                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" className="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg> (4.8)  
  4.7    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12h3.5" /><path d="M12 7v5" /></svg>    35 min   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /> </svg>    2 </p>
                    </div>


                    <div className="d-flex justify-content-center">
                      <button onClick={() => navigate(`/recipe/${recepie._id}`)} className="btn btn-dark" style={{ height: "40px", width: "300px", borderRadius: "8px" }}>view Recipe</button>
                    </div>


                  </div>

              
              ))
            }


          </div>

        </div>

       

        


      </div>


       <div className="" style={{ height: "340px", width: "100%", background: "black", color: "white", padding: "40px" }}>
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

       {/* <div className="d-flex justify-content-end gap-4 bg-danger  text-center mt-5 align-items-center" style={{ height: "40px", width: "100%", paddingRight: "63px" }}>
                        <button type="button" className="border rounded bg-success " style={{ height: "40px", width: "150px" }}>save as draft</button>
                        <button type="submit" className="border rounded btn btn-dark" style={{ height: "40px", width: "150px" }}>update Recipe</button>
                    </div> */}
    </>

  );
};

export default MyRecipies;