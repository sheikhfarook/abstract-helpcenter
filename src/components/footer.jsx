import React from 'react'
import './foote.css'
import abstract from "../assets/icons/abstract.png";


export default function FooterAbout(){
    return(
        

        <div className="flex">   
            <div >
                <h2>Abstract</h2>
                <a  href="https://app.abstract.com/signup?branches=true" className="a-style">Start Trial</a> <br/>
                <a  href="https://www.abstract.com/pricing" className="a-style">Pricing</a><br/>
                <a  href="https://app.abstract.com/download" className="a-style">Download</a><br/>
            </div>
            <div className="one-side">
                <h2>Resources</h2>
                <a  href="https://www.abstract.com/blog" className="a-style">Blog</a><br/>
                <a  href="https://help.abstract.com/hc/en-us" className="a-style">Help Center</a><br/>
                <a  href="https://www.abstract.com/release-notes" className="a-style">Release Notes</a><br/>
                <a  href="https://status.goabstract.com/" className="a-style">Status</a><br/>
            </div>
            <div className="one-side" >
                <h2>Community</h2>
                <a  href="https://twitter.com/goabstract" className="a-style">Twitter</a><br/>
                <a  href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F17950473%2F" className="a-style">LinkedIn</a><br/>
                <a  href="https://www.facebook.com/Abstract/" className="a-style">Facebook</a><br/>
                <a  href="https://dribbble.com/abstract" className="a-style">Dribbble</a><br/>
                <a  href="https://www.abstract.com/podcast" className="a-style">Podcast</a><br/>
            </div>
            <div className="one-side" >
                <h2>Company</h2>
                <a  href="https://www.abstract.com/about" className="a-style">About Us</a><br/>
                <a  href="https://abstract.breezy.hr/" className="a-style">Careers</a><br/>
                <a  href="https://www.abstract.com/legal" className="a-style">Legal</a><br/>
                <div>
                    <h3>Contact Us</h3>
                    <a href="" className="a-style">Info@abstract.com</a>

                </div>
               
            </div>
            <div className="w2">

            {/* <img src={abstract} alt="" /> */}
            <p className="last">
                {/* <img src={abstractlogo} alt="" /> */}

                   © Copyright 2023 <br/>
                   Abstract Studio Design, Inc. <br/>
                   All rights reserved<br/>
                </p>
                </div>
        </div>
             
         
            
        
           
    )
}