import React from "react";
import { ArrowDown } from "react-bootstrap-icons";

export function Questionpage() {

    return (
        <>
            <div className="d-flex justify-content-center bg-light">
                <p className="p-5">FAQ</p>
                <div className="col-lg-5 text-animate"> FREQUENTLY ASKED QUESTION</div>
                <div className="col-lg-5">
                    <div className="question-div mt-2 row">
                        <h1 className="col-lg-10">WHAT LIS THE SOVRYN DOLLER ?</h1><h1 className="col-lg-2 text-center"><ArrowDown className="tick2 fw-bolder" /></h1>
                    </div>
                    <div className="question-div mt-2 row">
                        <h1 className="col-lg-10 ">HOW DOES DLLR WORK ?</h1><h1 className="col-lg-2 text-center"><ArrowDown className="tick2 fw-bolder" /></h1>
                    </div>
                    <div className="question-div mt-2 row">
                        <h1 className="col-lg-10">WHAT ARE THE USE CASE OF DLLR ?</h1><h1 className="col-lg-2 text-center"><ArrowDown className="tick2 fw-bolder" /></h1>
                    </div>
                    <div className="question-div mt-2 row">
                        <h1 className="col-lg-10">WHAT IS DLLR BACKED BY?</h1><h1 className="col-lg-2 text-center"><ArrowDown className="tick2 fw-bolder" /></h1>
                    </div>
                    <div className="question-div mt-2 row">
                        <h1 className="col-lg-10">WHAT IS THE FUTURE VISION OF DLLR ?</h1><h1 className="col-lg-2 text-center"><ArrowDown className="tick2 fw-bolder" /></h1>
                    </div>

                </div>
            </div>
        </>
    );
}