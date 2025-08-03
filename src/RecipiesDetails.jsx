import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RecipiesDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const token = localStorage.getItem("token")


  const deleteRecipe = () => {
    
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }).then(res => alert("recipe deleted"))
    navigate("/recipies")
  }

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);

      })

      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) {
    return
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




      <div style={{ background: "#fff5ef" ,padding:"80px"}}>
        <h1 className="mt-5" style={{ textAlign: "center", fontWeight: "700", fontSize: "36px", background: "" }}>Recipes Detail</h1>
        <div style={{ background: "#fff5ef" }}>
          <div className="p-4 my-5 rounded  border bg-light">
            <div className="col-lg-12 d-flex align-items-center justify-content-center mt-3">
              {recipe.image && (
                <img
                  src={
                    recipe.image.startsWith("http")
                      ? recipe.image
                      : `http://localhost:3000/uploads/${recipe.image}`
                  }
                  alt="Recipe"
                  className="img-fluid rounded "
                  style={{ maxHeight: "450px", objectFit: "cover" }}
                />
              )}
            </div>

            <div className="row mt-4 border" >
              <div className="">
                <h2 className="mb-3 text-primary">{recipe.title}</h2>
                <p style={{ fontWeight: "700" }}>
                  Created By: {recipe.createdBy?.fullName}
                </p>
                <p style={{ fontWeight: "500" }}>Category: {recipe.category}
                </p>
                <p style={{ fontWeight: "500" }}>  Description: {recipe.description}
                </p>

                <div className="mt-4">
                  <h4>Ingredients</h4>
                  {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 ? (
                    <ul>
                      {recipe.ingredients.map((item, index) => (
                        <li key={index}>
                          {item.quantity} {item.unit} {item.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No ingredients listed.</p>
                  )}
                </div>

                <div className="mt-4">
                  <h4>Instructions</h4>
                  {Array.isArray(recipe.instructions) && recipe.instructions.length > 0 ? (
                    <ul>

                      {recipe.instructions.map((instr, index) => {
                        return <li key={index}>{instr}</li>

                      })}
                    </ul>
                  )
                    : (
                      <p>no instruction</p>
                    )}

                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end gap-4  text-center mt-5 align-items-center" style={{ height: "40px", width: "100%", paddingRight: "63px" }}>
            
              <button onClick={() => navigate(`/recipe/update/${recipe._id}`)} className="border rounded btn btn-dark" style={{ height: "40px", width: "150px" }}>update Recipe</button>
              <button onClick={deleteRecipe} type="button" className="border rounded bg-sucess " style={{ height: "40px", width: "150px" }}>DELETE</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipiesDetails;
