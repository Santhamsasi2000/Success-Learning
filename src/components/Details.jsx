import React from "react";
import { SlArrowRight } from "react-icons/sl";

const Details = () => {
  return (
    <div className="detail">
            <div>
                <p className="heading-detail">Company</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>About Us</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>Careers</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>Contact Us</p>
            </div>
            <div>
                <p className="heading-detail">Test Prep</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>GRE</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>GMAT</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>SAT</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>NEET</p>
            </div>
            <div> 
                <p className="heading-detail">English Language Training </p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>IELTS</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>TOEFL</p>
            </div>
            <div>
                <p className="heading-detail">Resources</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>FAQs</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>Blogs</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>Test/ Quizzes</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>Ebooks/ Videos</p>
                <p className="description"><i className="arrow-right"><SlArrowRight /></i>Terms & Conditions</p>
            </div>
            <div >
                <p className="heading-detail">Location</p>
                <div style={{width:"100%"}}>
                    <iframe width="200" height="180" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=D73,%207th%20Cross%20St%20W,%20Thillai%20Nagar%20East,%20North%20East%20Extension,%20Thillai%20Nagar,%20Tiruchirappalli,%20Tamil%20Nadu%20620018+(Success%20Learning%20-%20IELTS,TOEFL,Spoken%20English,Communication%20English,%20GRE,%20GMAT%20Training%20and%20Coaching%20Centre%20in%20Trichy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps trackers</a>
                    </iframe>
                </div>
            </div>
    </div>
  )
}

export default Details
