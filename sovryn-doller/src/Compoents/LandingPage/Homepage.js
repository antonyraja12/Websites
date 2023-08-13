import React from "react";
import { Bell, Coin, Journals } from "react-bootstrap-icons";


export function Homepage(){


    return(

        <>
        <div className="home-bg-img rounded-5">
        <h1 className="text-animate text-center">BITCOIN - BACKEND<br/>STABLEDCOINS ARE HERE</h1>
        <p className="text-center text-light">DLLR is a censorship resistant, secure, and reliable stablecoin that is backed by bitcoin.
       <br/><br/> <span className="border rounded-pill  fs-6 ps-5 pe-5 pt-3 pb-3  ">GET DLLR UPDATE</span>
       </p>
        </div>
        <div className="row w-100 p-3 bg-light mt-3">
            <h1 className="col-lg-4 ">
            <div className="row ">
                    <p className="col-lg-4 text-end mt-4 "><span  className="bookicon rounded-pill bg-dark"><Bell className=" bg-dark text-info"/></span></p>
                    <p className="col-lg-8 ">DLLR UPDATES <br/> <span className="fs-4 text-start spantag text-secondary">Get Notified</span></p>
                
                </div>            </h1>
            <h1 className="col-lg-4">
            <div className="row ">
                    <p className="col-lg-4 text-end mt-4 "><span  className="bookicon rounded-pill bg-dark"><Coin className=" bg-dark text-info"/></span></p>
                    <p className="col-lg-8 ">WHAT IS DLLR <br/> <span className="fs-4 text-start spantag text-secondary">Learn More</span></p>
                
                </div>
  
            </h1>
            <h1 className="col-lg-4">
            <div className="row ">
                    <p className="col-lg-4 text-end mt-4 "><span  className="bookicon rounded-pill bg-dark"><Journals className=" bg-dark text-info"/></span></p>
                    <p className="col-lg-8 ">DLLR WIKI <br/> <span className="fs-4 text-start spantag text-secondary">Learn More</span></p>
                
                </div>
  
            </h1>
        </div>

        </>
    )
}