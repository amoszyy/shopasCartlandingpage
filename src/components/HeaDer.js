import amos from"../images/super.jpg"
import delis from "../images/delis.jpg"
import shoprite from "../images/shoprite_store.png"
import addide from "../images/addide.png"
// import grocery from "../images/grocery.jpg"
import groceries from "../images/groceries.png"
const HeaDer = ()=>{

       

    
    return(
        <>
        <div className="container-fluid " style={{color:"white", backgroundColor:"rgb(217,45,32)", height:"60vh", width:"100%"}}>
            <div className="row">
            <div className="col-md-1"></div>
                <div className="col-md-5 ps-5 pt-5">
                    <h1>Get your groceries delivered same-day </h1>
                    <p>Order what you want from grocery stores and local market near you and get it delivered right to your door.</p>
                    <input type="text" className="form-control bg-light" style={{width: "60%", borderRadius:"20px"}} placeholder="enter your email address here" />
                  
              


                </div>
              
                <div className="col-md-5 d-none d-md-block">
                <img src={groceries} alt="" className="h-75 w-100  ms-5 mt-4"/>
                </div>
                
            </div>

        </div>
        <h3 style={{textAlign:"center"}} className="mt-5">Favorite stores in <span style={{color:"rgb(217,45,32)"}}>Lagos</span></h3>
        <div className="col-md-10 mx-auto">
            <div className="container d-flex">
            <div className="row">
                <div className="col-md-3 ">
                <img src={shoprite} alt="" className="w-75"/>
                <b><p>Shoprite</p></b>

                </div>
                <div className="col-md-3">
                <img src={addide} alt="" className="w-75" />
                <b><p>Addide</p></b>
                </div>
                <div className="col-md-3 ">
                <img src={amos} alt="" className="w-75"/>
                <b><p>Delis</p></b>
                </div>
                <div className="col-md-3">
                <img src={delis} alt="" className="w-75"/>  
                <b><p>Supermart</p></b>
                </div>
           
         
          
            </div>
            </div>
     
     
        
        </div>
        {/* <div className="col-md-8 mx-auto d-flex">
            <div className="container">
            <img src={shoprite} alt="" />
            <img src={addide} alt="" />
            <img src={amos} alt="" />
            <img src={delis} alt="" />
            </div>
           
        </div> */}
        
        </>
     
       
    )
}
export default HeaDer;