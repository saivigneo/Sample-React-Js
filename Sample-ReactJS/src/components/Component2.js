import React from "react";
import jesko from "./jesko.jpeg"
import chiron from "./chiron.jpeg"
import "./Component2.css"
function Component2(){
    return(
        <body>
        <h1>Konigsegg Jesko v/s Bugatti Chiron Purr Sport</h1>
        <table id="cars">
            <tr>
                <th>Image</th>
                <th>Description</th>
            </tr>
            <tr>
                <td><img src={jesko}/></td>
                <td>Jesko is named for Jesko von Koenigsegg, the father of company Founder and CEO, Christian von Koenigsegg. Jesko von Koenigsegg was a key presence at Koenigsegg Automotive during its formative years. His considerable business acumen helped steer the company through many early challenges. Now retired and in his 80’s, Jesko von Koenigsegg and his wife, Brita, were on-hand at the 2019 Geneva Motor Show to see his namesake vehicle introduced to the world.</td>

            </tr>
            <tr>
                <td><img src={chiron}/></td>
                <td>The Chiron Pur Sport is modern-day Bugatti's ultimate track car and accelerates even quicker than the phenomenal Chiron, getting from 0-60 mph in just under 2.3 seconds. New magnesium wheels are shod with a special compound of rubber developed by Michelin specifically for this car, increasing lateral grip by 10%.</td>
            </tr>
        </table>
<br></br>
    <h3>Konigsegg Regera Engine</h3>
    <p>
        <ul>
            <li>Koenigsegg twin turbo aluminum 5.0 L V8, 4 valves per cylinder, flat-plane crankshaft, double overhead camshafts, dry sump lubrication</li>
            <li>Compression: 9.0:1</li>
            <li>Bore: 92 mm, stroke: 95.25 mm</li>
            <li>Sequential, multipoint fuel injection with individual cylinder pressure and back pressure sensors</li>
            <li>Closed loop individual combustion and lambda control, twin ceramic ball bearing turbochargers with Koenigsegg response system</li>
            <li>1.7 bar boost pressure (2.2 bar with E85)</li>
            <li>Carbon fiber intake manifold with optimized intake tracts</li>
            <li>Tig-welded ceramic coated 0.8 mm wall thickness Inconel exhaust system manifold with merge collector</li>
            <li>Total engine weight: 189 kg</li>
        </ul>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QaEpYc3YLz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </p>
    <br></br>
    <h3>Bugatti Chiron Purr Sport</h3>
    <p>
        <ul>
            <li>motivated by an 8.0-liter 16-cylinder powerplant</li>
            <li>four turbochargers to generate a mighty 1500 horsepower and 1180 pound-feet of torque</li>
            <li>makes the dash from zero to 60 mph in a mere 2.3 seconds, and it has a top speed of 261 mph</li>
            <li>equipped with a slightly more potent version of the base powerplant, and it produces 1578 horsepower</li>
        </ul>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FuS_bXJNync" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </p>
        </body>
        
    )
}
export default Component2;