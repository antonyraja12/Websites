import React from "react";
import { BoxArrowUp, ShieldCheck, Tag } from "react-bootstrap-icons";

export function Intropage(){
    return(
        <>
        <div className="vh-100 bg-dark into-text "> 
        <p className="text-center pt-5">What is DLLR</p>
        <h1 className="text-center text-animate">SOVRYN DOLLAR, BACKED BY BITCOIN</h1>
             <p className="text-center">Welcome to the first fully transparent and secure digital dollar.<br/>
                The new decentralized stablecoin backed 100% by bitcoin.

           </p>
           <div className="row">
           <div className="col-lg-3 divsiz">
                <h1 className=""><p className="  icon-radies bg-info border"><ShieldCheck/></p></h1>
                <h1 className="fw-bolder mt-5">RELIABLE AND SECURE</h1>
                <p>An ultra-stable, decentralized stablecoin—aggregated from other bitcoin-backed stablecoins and pegged to USD. The Sovryn Dollar cannot be censored, since there is no middleman.</p>
           </div>
           <div className="col-lg-3 divsiz">
            <h1 className=""><p className=" icon-radies bg-info border"><BoxArrowUp/></p></h1>
            <h1 className="fw-bolder mt-5">LIQUID AND PRACTICAL</h1>
            <p>A highly-liquid stablecoin that you can easily convert to bitcoin, dollars, or other stablecoins. DLLR is a great form of payment, and diversified capital, that will always remain liquid.</p>
           </div>
           <div className="col-lg-3 divsiz">
            <h1 className=""><p className=" icon-radies bg-info border">< Tag/></p></h1>
            <h1 className="fw-bolder mt-5">LOW COST TRANSACTIONS</h1>
            <p> Low gas fees, alongside stability and reliability, make DLLR the perfect form of BTC-backed digital currency.</p>
           </div>
           </div>
        </div>
        </>
    )
}