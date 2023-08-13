import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";


export function Journey() {


    return (

        <>
            <div className="vh-100 bg-dark lh-lg p-5 text-white">
                <p className="text-center">Learn more</p>
                <h1 className="text-uppercase text-center text-animate">Continue Your Sovryn Journey    </h1>
                <p className="text-center">Learn more about the toolkit for financial independence and how to be a sovryn individual.</p>
                <div className="row  d-flex justify-content-center">

                    <div className="col-lg-5 up-div row">
                        <p className="col-lg-8 "> EXPLORE THE DAPP</p><ArrowUpRight className= "tick1 up-arrow col-lg-1 fs-1"/>
                    </div>
                    <div className="col-lg-5 up-div row">
                    <p className="col-lg-8 "> DIGI INTO THE WIKI</p><ArrowUpRight className= "tick1 up-arrow col-lg-1 fs-1"/>
                        
                    </div>
                </div>
                <div className="row d-flex  justify-content-center">

                    <div className="col-lg-5 up-div row">
                    <p className="col-lg-8 ">CHECK THE BLOG </p><ArrowUpRight className= "tick1 up-arrow col-lg-1 fs-1"/>
                        
                        </div>
                    <div className="col-lg-5 up-div row">
                    <p className="col-lg-8 "> EXPLORE THE RESOURCE</p><ArrowUpRight className= "tick1 up-arrow col-lg-1 fs-1"/>
                        
                        </div>
                </div>


            </div>

        </>
    )
}