import image4 from "../src/images/img-4.jpg"
import image5 from "../src/images/img-5.webp"
import image6 from "../src/images/img-6.webp"
const Home = () => {
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



            <div className="" style={{ background: "#ffffff", overflow: "hidden" }}>


                <div className="text-center mt-0" style={{ background: "#fff5ef", padding: "115px", }}>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fontWeight="900" viewBox="0 0 24 24" fill="none" stroke="yellow" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chef-hat"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" /><path d="M6.161 17.009l11.839 -.009" /></svg>
                        <h1 className="mt-2" style={{ fontWeight: "700", fontSize: "48px" }}>Discover Amazing Recipes</h1>
                        <p className="mt-4" style={{ fontWeight: "500", fontSize: "30px" }} >Share your culinary creations, discover new flavors, and connect with food lovers from around the world.</p>
                    </div>

                    <div className=" d-flex  gap-4   justify-content-center rounded " style={{ gap: "20px" }}>
                        <button className="rounded border mt-4" style={{ height: "50px", color: "black", width: "180px", background: "#ea580c" }}>Explore Recipe</button>
                        <button className="rounded border mt-4" style={{ height: "50px", width: "180px", color: "black" }}>Join Commuinity</button>
                    </div>



                </div>
                <h1 className="text-center mt-4 p-4 " style={{ fontWeight: "700", fontSize: "40px", background: "#ffffff" }}>Featurd Recipe</h1>

                <div className="p-3  " style={{ paddingLeft: "120px", paddingRight: "120px", background: "#ffffff" }} >
                    <div className="row rounded  d-flex gap-4 " style={{ paddingLeft: "105px", paddingRight: "105px" }}>
                        <div className="col bg-#ffffff rounded p-0 border" style={{ height: "400px", borderRadius: "8px" }}>
                            <img src={image4} alt="" className="rounded" style={{ height: "200px", width: "100%" }} />
                            <div className="">
                                <h4 className="" style={{ paddingLeft: "30px", marginTop: "20px" }}>Mediterranean Quinoa Bowl</h4>
                                <p style={{ paddingLeft: "30px", marginTop: "10px" }}>by Chef Alex</p>
                                <p style={{ paddingLeft: "30px" }}>                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg> (4.8)
                                    4.7(120)     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12h3.5" /><path d="M12 7v5" /></svg>    35 min   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /> </svg>    2 </p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-dark" style={{ height: "40px", width: "300px", borderRadius: "8px" }}>view Recipe</button>
                            </div>
                        </div>
                        <div className="col bg-#ffffff rounded p-0 border" style={{ height: "400px", borderRadius: "8px" }}>
                            <img src={image5} alt="" className="rounded" style={{ height: "200px", width: "100%" }} />
                            <div>
                                <h4 className="" style={{ paddingLeft: "30px", marginTop: "20px" }}>Beef Wellington</h4>
                                <p style={{ paddingLeft: "30px", marginTop: "10px" }}>by Chef Gordon</p>
                                <p style={{ paddingLeft: "30px" }}>                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg> (4.8)
                                    4.8(144)    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12h3.5" /><path d="M12 7v5" /></svg> 2 hours  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg> 8</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-dark" style={{ height: "40px", width: "300px", borderRadius: "8px" }}>view Recipe</button>
                            </div>
                        </div>
                        <div className="col bg-#ffffff rounded p-0 border" style={{ height: "400px", borderRadius: "8px" }}>
                            <img src={image6} alt="" className="rounded" style={{ height: "200px", width: "100%" }} />
                            <div>
                                <h4 className="" style={{ paddingLeft: "30px", marginTop: "20px" }}>Vegetable Pad Thai</h4>
                                <p style={{ paddingLeft: "30px", marginTop: "10px" }}>by Chef Lisa</p>
                                <p style={{ paddingLeft: "30px" }}>                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg> (4.8)
                                    4.8(92)     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12h3.5" /><path d="M12 7v5" /></svg> 55 min   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg> 3</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-dark" style={{ height: "40px", width: "300px", borderRadius: "8px" }}>view Recipe</button>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center border  bg-##ffffff" style={{ height: "270px", marginTop: "60px" }}>

                    <div>
                        <h1 style={{ color: "#ea580c", fontWeight: "bold" }}>10,000+</h1>
                        <p style={{ fontWeight: "600", fontSize: "16px" }}>Recipes Shared</p>
                    </div>
                    <div>
                        <h1 style={{ color: "#ea580c", fontWeight: "bold" }}>5000+</h1>
                        <p style={{ fontWeight: "600", fontSize: "16px" }}>Active Chefs</p>
                    </div>
                    <div>
                        <h1 style={{ color: "#ea580c", fontWeight: "bold" }}>50,000+</h1>
                        <p style={{ fontWeight: "600", fontSize: "16px" }}>Reviews Written</p>
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
export default Home