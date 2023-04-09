import React from 'react'
import ServiceCard from './ServiceCard'
import backgroundImage from '../stubs/Constants'

const AboutUs = () => {
    const devTeam =  require('../stubs/aboutUs.json')
    let bgImg = backgroundImage;
    return (
        <div className='container my-5' style={{ maxWidth: '100%', margin:"0% 0%",padding: "1% 2% 3% 2%",
            position:'center',backgroundImage: `url(${bgImg})`}}>
            <h2 className='my-2'>About Us</h2>
            <p> {devTeam.application.about}</p>
            <div className='container my-4 d-flex justify-content-center'>
                {devTeam.developers.map( dev =>
                    <div key = {dev.id} style={{padding: 2}}>
                        <ServiceCard  id = {dev.id} cName = {dev.name} cImage ={dev.image} cCount = {dev.role}/>
                    </div>
                )}                   
            </div>
        </div>
    )
}

export default AboutUs
