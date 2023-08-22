import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bell, ClockHistory, DatabaseFillDown, Gear, HandThumbsUp, People, Person, PersonBadge, PieChart, Tags } from "react-bootstrap-icons";
import { Line } from "react-chartjs-2";
import LineChart from "./LineChart";


export function Dashboard() {

    

    return (
    <>
      <div className="row m-3 d-flex justify-content-center" >
        <div className="col-lg-2 boardui">
            <h1>Board</h1>
            <ul>
                <li><PieChart/> &nbsp; DashBoard</li>
                <li><Tags/> &nbsp; Transaction</li>
                <li><ClockHistory/> &nbsp; Schedules</li>
                <li><Person/> &nbsp;Users</li>
                <li><Gear/> &nbsp;Settings</li>
            </ul>
        </div>
        <div className="col-lg-9 border p-3">

            <div> <span className="fs-3">DashBoard</span> <span className="float-end"><input type="search" placeholder=" Search ...." className="rounded-3 me-3"/> &nbsp; <Bell /> &nbsp;<PersonBadge className="border me-3 rounded-pill"/> </span></div>
            <div className="headerdiv">
                <div className="border "><p className="text-end"><DatabaseFillDown/></p>
                    <p>total Revenues</p>
                    <h1>$ 2,129,430</h1>
                </div>
                <div className="headerdiv">
                <div className="border"><p className="text-end"><Tags/></p>
                    <p>Total Transaction</p>
                    <h1>1520</h1>
                </div>
                </div>
                <div className="headerdiv">
                <div className="border"><p className="text-end"><HandThumbsUp/></p>
                    <p>total Likes</p>
                    <h1>9,451</h1>
                </div>

                </div>
                <div className="headerdiv">
                <div className="border"><p className="text-end"><People/></p>
                    <p>total Users</p>
                    <h1>15,254</h1>
                </div>
                </div>
            </div>
        </div>
        <div>
            <LineChart/>
       
        </div>

      </div>
    </>);
    
}