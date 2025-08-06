import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipies from './Recipies'
import RecipiesDetails from './RecipiesDetails'
import LoginPage from './LoginPage'
import Register from './Register'
import AddRecipies from './AddRecipies'
import Category from './Category'
import Home from './Home'
import UpdateRecipe from './UpdateRecipe'
import MyRecipes from './MyRecipes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
    <Routes>
      {/* <Route path='/' element={<App/>}/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/recipies' element={<Recipies/>}/>
      <Route path='/recipe/:id' element={<RecipiesDetails />} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/login-page' element={<LoginPage/>}/>
      <Route path='/add-recipies' element={<AddRecipies/>}/>
      <Route path='/myRecipes/:userId' element={<MyRecipes/>}/>

      <Route path='/recipe/update/:id' element={<UpdateRecipe/>}/>

      <Route path='/category' element={<Category/>}/>

    </Routes>
    </BrowserRouter>
    </StrictMode>
)






// import { useState } from "react"
// import image4 from "../src/images/img-4.jpg"
// const RecipiesDetails = () => {




//     return (



        
    
//     <>
//         <div className="d-flex justify-content-around align-items-center  p-4 border fixed-top" style={{ height: "70px", background:"white"}}>

//                 <div className="d-flex align-items-center gap-4">
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chef-hat"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" /><path d="M6.161 17.009l11.839 -.009" /></svg>
//                     </div>
//                     <div>
//                         <h1   style={{ alignItems: "center", fontSize: "24px",fontWeight:"700" }}>RecipeShare</h1>
//                     </div>
//                 </div>
//                 <div className="d-flex gap-5">
//                     <a style={{ fontSize: "20px", fontWeight:"500",color: "black" }} href="Recipies">Recipes</a>
//                     <a style={{ fontSize: "20px",fontWeight:"500", color: "black" }} href="Category">Category</a>

//                 </div>

//                 <div className="d-flex gap-4 align-items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>  <input className="rounded border" type="text" name="search" id="search" placeholder="searh..." style={{ height: "44px", width: "300px", paddingLeft: "12px" }} />
//                     <a href="AddRecipies"> <button className="rounded border" style={{ height: "40px", width: "150px" }}> + Add Recipe</button>
//                     </a>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
//                 </div>
//             </div>
    
    
    
//      <div className="border rounded mt-5" style={{ paddingLeft: "225px",paddingRight:"225px" ,background: "#fffce9",borderRadius:20 }}>
//         <div  className="pt-5" style={{height:"840px",background:"", borderRadius: 20}}>
//               <div className="rounded">
//                 <img src={image4} alt="" className="rounded" style={{height:"520px", width:"100%"}}/>
//              </div>
//         <div className="border rounded " style={{ background: "white", height: "320px", padding: "20px", width: "100%" }}>
           
           

           
//             <div className="d-flex  justify-content-between" style={{}}>
//                 <div>
//                     <h1 style={{fontSize:"32px",fontWeight:"700"}}>Creamy Mushroom Risotto</h1>
//                 </div>
//                 <div className="d-flex gap-4 align-items-center " style={{ }}>
//                     <button className="rounded bg-white border" style={{ height: "40px", width: "100px" }}>Edit </button>
//                     <button className="rounded bg-white border" style={{ height: "40px", width: "110px" }}>Delete</button>

//                 </div>
//             </div>
//             <div className="d-flex gap-4 mt-2" style={{ textAlign: "center", }}>
//                 <p>by Chef Maria</p>
//                 <div>
//                     <span class="badge  bg-white border text-center" style={{ borderRadius: "12px", color: "black", textAlign: "center",height:"25px",width:"60px" }}>Italian</span>
//                 </div>
//             </div>
//             <div >
//                 <p  style={{ fontSize: "20px",fontWeight:"200px" }}  className="">A rich and creamy mushroom risotto that's perfect for a cozy dinner. This classic Italian dish combines
//                     arborio rice with a medley of mushrooms and parmesan cheese.</p>
//             </div>
//             <div className="d-flex justify-content-around " style={{}}>
//                 <div>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg> (4.8)
//                     <p>124 reviews</p>
//                 </div>
//                 <div>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12l3 2" /><path d="M12 7v5" /></svg> 15 min
//                     <p>Prep time</p>
//                 </div>
//                 <div>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12l3 2" /><path d="M12 7v5" /></svg> 35 min
//                     <p>Cook time</p>
//                 </div>
//                 <div>


//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg> 4
//                     <p>serving</p>
//                 </div>

//             </div>
//         </div>
//         </div>
//         <div className="border mt-5 rounded" style={{ height: "500px", width: "100%", background: "white", padding: "20px" }}>
//             <h1 style={{ fontSize: "32px", }}>Ingradients</h1>
//             <div style={{}}>
//                 <ul style={{ fontSize: "20px" }}>
//                     <li>2 cups Arborio rice</li>
//                     <li>1 lb mixed mushrooms, sliced</li>
//                     <li>6 cups warm chicken broth</li>
//                     <li>1 cup dry white wine</li>
//                     <li>1 large onion, diced</li>
//                     <li>1 cup grated Parmesan cheese</li>
//                     <li>1 cup grated Parmesan cheese</li>
//                     <li>1 cup grated Parmesan cheese</li>

//                     <li>1 cup grated Parmesan cheese</li>
//                     <li>1 cup grated Parmesan cheese</li>
//                     <li>10</li>

//                 </ul>
//             </div>

//         </div>









//         <div className="border mt-5 rounded" style={{ height: "500px", width: "100%", background: "white", padding: "20px" }}>
//             <h1 style={{ fontSize: "32px", }}>Instructions</h1>
//             <div style={{ }}>
//                 <ul style={{ fontSize: "20px" }}>
//                     <li>2 cups Arborio rice</li>
//                     <li>1 lb mixed mushrooms, sliced</li>
//                     <li>6 cups warm chicken broth</li>
//                     <li>1 cup dry white wine</li>
//                     <li>1 large onion, diced</li>
//                     <li>1 cup grated Parmesan cheese</li>
//                     <li>1 cup grated Parmesan cheese</li>
//                     <li>1 cup grated Parmesan cheese</li>

//                     <li>1 cup grated Parmesan cheese</li>
//                     <li>1 cup grated Parmesan cheese</li>
//                     <li>10</li>

//                 </ul>
//             </div>
//         </div>








//         {/* <div className="border mt-5 rounded" style={{ height: "250px", width: "100%", background: "white", padding: "20px" }}>
//             <h1 style={{ fontSize: "32px", }}>Nutrition (per serving)
//             </h1>
//             <div className="d-flex justify-content-between" style={{}}>
            
//                 <div>
//                     <p>Calories</p>
//                     <p>Protein</p>
//                     <p>Carbs</p>
//                     <p>Fat</p>
//                 </div>

//                     <div>
//                     <p>420</p>
//                     <p>65g</p>
//                     <p>12g</p>
//                     <p>14g</p>

//                 </div>

//             </div>
//         </div> */}





//         <div className="border mt-5 rounded" style={{ height: "300px", width: "100%", background: "white", padding: "20px" }}>
//             <h1 style={{ fontSize: "32px",  }}>Add a Review</h1>
//    <div className="d-flex gap-4 mt-3" style={{}}>
//             <div>
//                 <svg id="favStar" xmlns="http://www.w3.org/2000/svg"
//                     width="24" height="24" fill="#facc15"
//                     class="bi bi-star star-icon" viewBox="0 0 16 16">
//                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 
//            4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 
//            3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696 
//            -2.09-4.387a.513.513 0 0 0-.927 0l-2.09 4.387 
//            -4.898.696c-.441.062-.612.636-.282.95l3.522 3.356 
//            -.83 4.73z"/>
//                 </svg>
//             </div>
//             <div>
//                 <svg id="favStar" xmlns="http://www.w3.org/2000/svg"
//                     width="24" height="24" fill="#facc15"
//                     class="bi bi-star star-icon" viewBox="0 0 16 16">
//                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 
//            4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 
//            3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696 
//            -2.09-4.387a.513.513 0 0 0-.927 0l-2.09 4.387 
//            -4.898.696c-.441.062-.612.636-.282.95l3.522 3.356 
//            -.83 4.73z"/>
//                 </svg>
//             </div>
//              <div>
//                 <svg id="favStar" xmlns="http://www.w3.org/2000/svg"
//                     width="24" height="24" fill="#facc15"
//                     class="bi bi-star star-icon" viewBox="0 0 16 16">
//                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 
//            4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 
//            3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696 
//            -2.09-4.387a.513.513 0 0 0-.927 0l-2.09 4.387 
//            -4.898.696c-.441.062-.612.636-.282.95l3.522 3.356 
//            -.83 4.73z"/>
//                 </svg>
//             </div>
//              <div>
//                 <svg id="favStar" xmlns="http://www.w3.org/2000/svg"
//                     width="24" height="24" fill="#facc15"
//                     class="bi bi-star star-icon" viewBox="0 0 16 16">
//                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 
//            4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 
//            3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696 
//            -2.09-4.387a.513.513 0 0 0-.927 0l-2.09 4.387 
//            -4.898.696c-.441.062-.612.636-.282.95l3.522 3.356 
//            -.83 4.73z"/>
//                 </svg>
//             </div>
//          <div>
//   <svg id="favStar" xmlns="http://www.w3.org/2000/svg"
//        width="24" height="24" fill="#facc15"
//        class="bi bi-star star-icon" viewBox="0 0 16 16">
//     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 
//        4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 
//        3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696 
//        -2.09-4.387a.513.513 0 0 0-.927 0l-2.09 4.387 
//        -4.898.696c-.441.062-.612.636-.282.95l3.522 3.356 
//        -.83 4.73z"/>
//   </svg>
// </div>


//         </div >
//   <div className="mt-3" style={{}}>
//         <textarea className="border rounded" name="information" id="information" placeholder="share your thought about this recie..." style={{width:"100%",paddingLeft:"12px",height:"90px"}}></textarea>
        
//      </div>  
//      <div style={{}}>
//         <button  className="rounded border mt-3" style={{height:"40px",width:"100%",color:"white",background:"black"}}>Submit Reviw</button>
//         </div> 
//         </div>



//         <div className="border mt-5 mb-4 rounded" style={{ height: "250px", width: "100%", background: "white", padding: "20px" }}>
//             <h1 style={{ fontSize: "32px",  }}> Reviews (3)
//             </h1>
//             <div style={{}}>
//             <ul>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>

//             </ul>
//             </div>
//             </div>


 


//     </div>

//                 <div className="" style={{height:"300px", width:"100%",background:"black", color:"white",padding:"40px"}}>
// <div className="d-flex justify-content-between align-item-center " >
//     <div>
//         <h1>RecipeShare</h1>
//         <p>Discover and share amazing <br />recipes with food lovers <br /> worldwide.</p>
//     </div>
//     <div>
//         <h1>Explore</h1>
//         <p> <a href="/Recipies">All Recipes</a></p>
//         <p> <a href="/Category">Category</a></p>
//         <p> <a href="/Recipies">Top Chefs</a></p>


//     </div>
//     <div>
//         <h1>Community</h1>
//               <p> <a href="/Recipies">About us</a></p>
//         <p> <a href="/Category">Contact</a></p>
//         <p> <a href="/Recipies">Blog</a></p>
//     </div>
//       <div>
//         <h1>Support</h1>
//               <p> <a href="/Recipies">Help Center</a></p>
//         <p> <a href="/Category">Privacy</a></p>
//         <p> <a href="/Recipies">Term of Service</a></p>
//     </div>
// </div>
// <hr />
// <p style={{textAlign:"center",marginTop:"30px"}}>© 2024 RecipeShare. All rights reserved.</p>
//                 </div>
//     </>

    
//     )




// }
// export default RecipiesDetails