import React from "react";
import { Discord, Github, StackOverflow, Telegram, Twitch, Youtube } from "react-bootstrap-icons";

export function Footerpage() {


    return (
        <>
            <div className="rounded-3 bg-dark text-white" >

                <div className="row">
                    <div className="col-lg-5">
                        <h1>SOVRYN</h1>
                        <p className="" > <Discord className="tick3 border" />
                            <Telegram className="tick3 border" />
                            <Twitch className="tick3 border" />
                            <Youtube className="tick3 border" />
                            <Github className="tick3 border" />
                            <StackOverflow className="tick3 border" /></p>


                    </div>
                    <div className="col-lg-5 text-reduce">
                        <h1 className="fw-bolder p-3">NEVER MISS AN IMPORTANT UPDATE, EVENT, OR EARLY ACCESS</h1>
                        <p><input type="text" className="email-input" placeholder="enter your mail ...." /><button className=" ms-3 btn btn-outline-secondary"> Subscribe</button></p>
                        <input type="checkbox" />I agree to receive other communications from Sovryn.
                        <hr />
                        <div className="row">
                            <div className="col-lg-3">
                                <h1>Feature</h1>
                                <p>Trade</p>
                                <p>EARN</p>
                                <p>ZERA</p>
                                <p>SOVRYN DOLLER</p>
                            </div>
                            <div className="col-lg-3">
                                <h1> EXPLORE</h1>
                                <p>BLACKPAPER</p>
                                <p>RESOURCES</p>
                                <p>SOVRYN BLOG</p>
                                <p>WIKI</p>
                            </div>
                            <div className="col-lg-3">
                                <h1> COMMUNITY</h1>
                                <p>JOIN</p>
                                <p>BUILD</p>
                                <p>GOVERNANCE</p>
                            </div>
                            <div className="col-lg-3">
                                <h1>  ABOUT</h1>
                                <p> OUR STORY</p>
                                <p>CAREERS</p>
                                <p>PRESS</p>
                                <p>CONTACT</p>
                            </div>
                        </div>
                        <p className="text-end">© 2023 SOVRYN. All Rights Reserved</p>
                    </div>
                    
                </div>
        <div>
            <p>terms & condition  &nbsp; &nbsp;    privacy policy </p>
             
        </div>
            </div>
        </>
    )
}