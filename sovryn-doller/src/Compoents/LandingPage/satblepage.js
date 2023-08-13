import React from "react";
import { CheckCircle, CurrencyBitcoin, ShieldCheck } from "react-bootstrap-icons";


export function Stablepage() {

    return (<>
        <div className="bg-light mt-5 ">
            <h1 className="text-center">STABLECOINS THAT ARE ACTUALLY<br /> STABLE</h1>
            <p className="text-center">The market is flooded with unstable and risky stablecoins.The Sovryn Dollar<br />
                changes this. A fully transparent, censorship resistant, and truly stable <br />
                currency built on Bitcoin.

            </p>
            <div className="row d-flex justify-content-center stable-scroll bg-light">
                <div className="col-lg-5">
                    <p className="icon-radies stable-bg fs-3 text-white"> <CurrencyBitcoin /></p>
                    <h1 className="fw-bolder mt-5">SAFE AND SECURE MONEY</h1>
                    <p className="mt-5">DLLR is a safe and secure form of money, offering the stable value of traditional fiat currencies with the transparency and security of bitcoin.</p>
                    <button className="update-btn mt-5">Get DLLR updates</button>
                </div>
                <div className="col-lg-5 stable-bg">
                    <p className="ul-img1 " >
                        <CheckCircle className="tick1" /> <span > DLLR is a reliable store of value. </span>  .<br />
                        <CheckCircle className="tick1" /> <span > Safe from government control.

                        </span>  .<br />
                        <CheckCircle className="tick1" /> <span > Funds will always be under your control.

                        </span>  .<br />
                        <CheckCircle className="tick1" /> <span > Diversified form or capital.

                        </span>  .<br /><br />
                    </p>


                </div>
            </div>
            <div className="row d-flex justify-content-center  stable-scroll bg-light">
                <div className="col-lg-5 stble-bg-1">
                    <p className="ul-img1 " >
                        <CheckCircle className="tick" /> <span > DLLR is a reliable store of value.

                        </span>  .<br />
                        <CheckCircle className="tick" /> <span > Safe from government control.

                        </span>  .<br />
                        <CheckCircle className="tick" /> <span > Funds will always be under your control.

                        </span>  .<br />
                        <CheckCircle className="tick" /> <span > Diversified form or capital.

                        </span>  .<br /><br />
                    </p>


                </div>
                <div className="col-lg-5 text-center ps-4 pt-4 ">
                    <p className="icon-radies stable-bga fs-3 text-dark"> <ShieldCheck /></p>
                    <h1 className="fw-bolder mt-5">SAFELY HODL YOUR CAPITAL</h1>
                    <p className="mt-5">DLLR is a safe and secure form of money, offering the stable value of traditional fiat currencies with the transparency and security of bitcoin.</p>
                    <button className="update-btn mt-5">Get DLLR updates</button>
                </div>
            </div>

            <div className="row d-flex justify-content-center stable-scroll bg-light">
                <div className="col-lg-5">
                    <p className="icon-radies stable-bg fs-3 text-white"> <CurrencyBitcoin /></p>
                    <h1 className="fw-bolder mt-5">REAL WORLD BTC CURRENCY</h1>
                    <p className="mt-5">DLLR is a safe and secure form of money, offering the stable value of traditional fiat currencies with the transparency and security of bitcoin.</p>
                    <button className="update-btn mt-5">Get DLLR updates</button>
                </div>
                <div className="col-lg-5 stable-bg">
                    <p className="ul-img1 " >
                        <CheckCircle className="tick1" /> <span > DLLR is a reliable store of value.

                        </span>  .<br />
                        <CheckCircle className="tick1" /> <span > Safe from government control.

                        </span>  .<br />
                        <CheckCircle className="tick1" /> <span > Funds will always be under your control.

                        </span>  .<br />
                        <CheckCircle className="tick1" /> <span > Diversified form or capital.

                        </span>  .<br /><br />
                    </p>


                </div>
            </div>

        </div>
    </>);
}