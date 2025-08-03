
const App = () => {
    <div className="mt-3 rounded" style={{  background: "#ffffff", height: "400px", width: "100%" ,paddingLeft:"70px",paddingRight:"70px"}}>
            <div>
            <h1>Ingradients</h1>
            <div className=" justify-content-between" style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                <div>
                    <label htmlFor="name">Name</label><br />
                    <input className="rounded" type="text" name="name" id="name" placeholder="enter-your-name" style={{ height: "40px", width: "100%",   border:"1px solid #ced4da" ,paddingLeft: "8px" }} />
                </div>
                <div>
                    <label  className="mt-3" htmlFor="quantity">Quantity</label><br />
                    <input className="rounded" type="text" name="quantity" id="quantity" placeholder="enter-quantity" style={{ height: "40px" , border:"1px solid #ced4da" ,width: "100%", paddingLeft: "8px" }} />
                </div>
                <div>
                    <label className="mt-3" htmlFor="unit">Unit</label><br />
                    <input className="rounded" type="number" name="unit" id="unit" placeholder="enter-unit" style={{ height: "40px", border:"1px solid #ced4da" ,width: "100%", paddingLeft: "8px" }} />
                </div>
            </div>
            <div>
                <button className="mt-3 rounded mb-3 " style={{ height: "40px", width: "100%" , border:"1px solid #ced4da"}}> + Add Ingredient</button>
            </div>
        </div>


    </div>
}
export default App