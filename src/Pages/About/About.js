import React from 'react';

const About = () => {
    return (
        <div id="about" className="my-5">
        <h1 className="text-danger text-center my-5">ABOUT US</h1>
        <div className="row ms-5">
            <div className="col-md-6">
                <img className="w-75" style={{borderRadius:'100px'}} src="https://i.ibb.co/r7MXsS8/Romantic-adventure-of-young-tourist-couple-low-angle-of-man-and-woman-going-uphill-holding-hands-tow.jpg" alt="" />
        
            </div>
            <div className="col-md-4 mt-5">
                <p style={{margin:'50px'}}>
                Nexus Travels offers clients an unrivalled set of expertise for representation in the Indian market. Distinctive within the industry for its creative approach and variety of services offered from travel trade representation, all the way to technology, brand advertising, research, design.We at Nexus Travels now has focused to Business travel, MICE and Leisure travel of segment which want instant service and has done so many MICE/Incentive movements successfully in past few years and unending list of leisure travel.
                </p>
            </div>
        </div>
        
        </div>
    );
};

export default About;