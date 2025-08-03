import image8 from "./images/img-8.jpg"
import image9 from "./images/img-9.jpg"
import image10 from "./images/img-10.jpg"
import image11 from "./images/img-11.jpg"
import image12 from "./images/img-12.jpg"
import image13 from "./images/img-13.jpg"





const Category = () => {
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







            <div style={{ background: "#fff5ef", padding: "105px" }}>
                <div className=" pt-2  mb-5">
                    <h1 style={{ textAlign: "center",fontWeight:"700" }}>Recipe Categories</h1>
                    <p className="mt-3 " style={{ textAlign: "center", fontSize: "20px" }}>Explore recipes by cuisine and type</p>
                </div>



                <div className="row gap-4">
                    <div className="col border gap-4 rounded border" style={{ height: "360px", padding: "0px" }}>
                        <img src={image8}  className="rounded" style={{ height: "240px", width: "100%" }} />

                        <div style={{ height: "120px", background: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "16px" }}>
                            <div className="d-flex justify-content-between align-items-center mt-2 px-3">
                                <p style={{ fontSize: "20px" }}>Italian Cuisine</p>
                                <span className="badge bg-dark text-white" style={{ borderRadius: "16px" ,fontWeight:"400px",height:"25px",width:"105px"}}>245 (recipes)</span>
                            </div>

                            <p style={{ textAlign: "center", fontSize: "18px", marginBottom: "40px" }}>
                                Classic Italian dishes and pasta recipes
                            </p>
                        </div>
                    </div>

                    <div className="col border gap-4 rounded border" style={{ height: "360px", padding: "0px" }}>
                        <img src={image9} alt=""  className="rounded" style={{ height: "240px", width: "100%" }} />

                        <div style={{ height: "120px", background: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "16px" }}>
                            <div className="d-flex justify-content-between align-items-center mt-2 px-3">
                                <p style={{ fontSize: "20px" }}>Chicken breast</p>
                                <span className="badge bg-dark text-white" style={{ borderRadius: "16px" ,fontWeight:"400px",height:"25px",width:"105px"}}>245 (recipes)</span>
                            </div>

                            <p style={{ textAlign: "center", fontSize: "18px", marginBottom: "40px" }}>
                                Classic Italian dishes and pasta recipes
                            </p>
                        </div>
                    </div>

                    <div className="col border gap-4 rounded border" style={{ height: "360px", padding: "0px" }}>
                        <img src={image10} alt=""  className="rounded" style={{ height: "240px", width: "100%" }} />

                        <div style={{ height: "120px", background: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "16px" }}>
                            <div className="d-flex justify-content-between align-items-center mt-2 px-3">
                                <p style={{ fontSize: "20px" }}>Simple Spaghetti</p>
                                <span className="badge bg-dark text-white" style={{ borderRadius: "16px" ,fontWeight:"400px",height:"25px",width:"105px"}}>245 (recipes)</span>
                            </div>

                            <p style={{ textAlign: "center", fontSize: "18px", marginBottom: "40px" }}>
                                Classic Italian dishes and pasta recipes
                            </p>
                        </div>
                    </div>


                </div>




                <div className="row gap-4 mt-5 rounded ">
                    <div className="col border rounded gap-4" style={{ height: "360px", padding: "0px" }}>
                        <img src={image11} className="rounded" alt="" style={{ height: "240px", width: "100%" }} />

                        <div style={{ height: "120px", background: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "16px" }}>
                            <div className="d-flex justify-content-between align-items-center mt-2 px-3">
                                <p style={{ fontSize: "20px" }}>Chocolate Lava Cake</p>
                                <span className="badge bg-dark text-white" style={{ borderRadius: "16px" ,fontWeight:"400px",height:"25px",width:"105px"}}>245 (recipes)</span>
                            </div>

                            <p style={{ textAlign: "center", fontSize: "18px", marginBottom: "40px" }}>
                                Classic Italian dishes and pasta recipes
                            </p>
                        </div>
                    </div>

                    <div className="col  gap-4 border rounded" style={{ height: "360px", padding: "0px" }}>
                        <img src={image12}  className="rounded" alt="" style={{ height: "240px", width: "100%" }} />

                        <div style={{ height: "120px", background: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "16px" }}>
                            <div className="d-flex justify-content-between align-items-center mt-2 px-3">
                                <p style={{ fontSize: "20px" }}>Spaghetti Carbonara</p>
                                <span className="badge bg-dark text-white" style={{ borderRadius: "16px" ,fontWeight:"400px",height:"25px",width:"105px"}}>245 (recipes)</span>
                            </div>

                            <p style={{ textAlign: "center", fontSize: "18px", marginBottom: "40px" }}>
                                Classic Italian dishes and pasta recipes
                            </p>
                        </div>
                    </div>

                    <div className="col  gap-4 rounded border" style={{ height: "360px", padding: "0px" }}>
                        <img src={image13} alt="" className="rounded" style={{ height: "240px", width: "100%" }} />

                        <div style={{ height: "120px", background: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "16px" }}>
                            <div className="d-flex justify-content-between align-items-center mt-2 px-3">
                                <p style={{ fontSize: "20px" }}>Paneer Curry</p>
                                <span className="badge bg-dark text-white" style={{ borderRadius: "16px" ,fontWeight:"400px",height:"25px",width:"105px"}}>245 (recipes)</span>
                            </div>

                            <p style={{ textAlign: "center", fontSize: "18px", marginBottom: "40px" }}>
                                Classic Italian dishes and pasta recipes
                            </p>
                        </div>
                    </div>


                </div>




            </div>




            <div className="" style={{ height: "300px", width: "100%", background: "black", color: "white", padding: "40px" }}>
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
export default Category



//
//                     <div className="d-flex justify-content-between">
//
//                    <span class="badge text-bg-primary">Primary</span>
//                     </div>
//                     <p className="mt-3" style={{ textAlign: "center" }}>Classic italian dishes and pasta recipes</p>