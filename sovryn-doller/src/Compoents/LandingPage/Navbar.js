import React from "react";
import { Search } from "react-bootstrap-icons";
import {Link } from 'react-router-dom';


export function Navbar() {

    let Func=()=>{
      alert("hi");
    }


    return (<>
    <nav class="navbar navbars navbar-expand-lg bg-secondary  fs-4">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#"> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
        <li class="nav-item dropdwn ">
          <Link class="nav-link  " aria-current="page" href="#">Feature</Link>
         {/* <div className="row">
         <div className="content column" >
          <div className="row">
            <div className="col-lg-9 border row"> 
            <div className="col-lg-6">
          <h1>hsjghsjg\xvbklnjdsbvnksdnKV</h1>
            </div>
            <div className="col-lg-6">
              <h1>  hfjashjahg AlkzdjfaKJFBHJAKFhFFHJH</h1>
            </div>
            
            </div>
            <div className="col-lg-3 border ">hello</div>
            <div className="col-lg-12 border">vannasksacDSKGJBDAHFJ</div>

          </div>
          </div>

         </div> */}
                 </li>
        <li class="nav-item dropdwn">
          <Link class="nav-link" href="#">Explore</Link>
         
        </li>
        <li class="nav-item dropdwn">
          <Link class="nav-link ">Community</Link>
          {/* <div className="content" >
          <p>  hello</p>
          </div> */}
        </li>
        <li class="nav-item dropdwn">
          <Link class="nav-link ">about</Link>
          <div className="content" >
          <p>  hello</p>
          </div>
        </li>
      </ul>
      <form class="d-flex w " role="search">
        
      <div class="container rounded-pill">
        <input type="text" placeholder="start typ.." class="input-field"/>
        <button class="expandable-button"><Search/></button>
        
    </div>
    
      </form>
      <button className=" btn btn-dark">Go to DAPP</button>
    </div>
  </div>
</nav>
    </>);
}