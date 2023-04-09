import React, { useState } from 'react';
import getPincodeFromLatLon from '../utils/rapidApi'
import backgroundImage from '../stubs/Constants';
import ServiceCard from './ServiceCard';
import Carousel from './Carousel';

const Home = ({ onPincodeSubmit }) => {
  const [pincode, setPincode] = useState('');
  const [nearbyAreas, setNearbyAreas] = useState(undefined)
  const [respFlag, setRespFlag] = useState(false)
  const [reqFlag, setReqFlag] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onPincodeSubmit(pincode);
 };

  const getLocationNavigator = async() =>{
	setReqFlag(true)
	setRespFlag(false);
	navigator.geolocation.getCurrentPosition(async function(position) {
		console.log(position)
		const {latitude, longitude} = position.coords
		console.log("Latitude is :", latitude,"Longitude is :", longitude);
		const nearby = await getPincodeFromLatLon(latitude, longitude)
		setNearbyAreas(nearby);
		setRespFlag(true);
	});
  }
  const appName = process.env.REACT_APP_NAME;
  let bgImg = backgroundImage;
  return (
    <div className='container mt-5' style={{ maxWidth: '100%', margin:"0% 0%", padding:"5%", position:'center', 
		backgroundImage: `url(${bgImg})` }}>
		<h1>Welcome to {appName}!</h1>
		<div className='container col'>
			<p className='row' style={{marginLeft:'1%', fontFamily : "cursive", fontStyle: "italic"}}>Please enter your pincode to get started:</p>
			<form  onSubmit={handleSubmit} style={{maxWidth: '80%'}}>
				<div className="row form-group">
					<div className='col-sm-8'>
						<input type="number" className="form-control" placeholder="Enter your pincode" value={pincode} 
						onChange={(e) => setPincode(e.target.value)} style={{marginLeft:15}}/>
					</div>
					<div className='col-sm-3'>
						<button type="submit" className="btn btn-primary" style={{marginLeft:30}}>Submit</button>
					</div>	
				</div>
				{!respFlag && <div className='row'>
				 	<div className='col'>
						<span className="mx-1 btn btn-outline-dark" style={{cursor:"pointer", fontFamily : "cursive", fontStyle: "italic"}}
						 onClick={getLocationNavigator}>Detect automatically</span>
					</div>
					{reqFlag && !respFlag && <div className='col'> <h3 className='mx-3'>Fetching Locations...</h3></div>}
				</div>}
				{respFlag && <Carousel show={nearbyAreas.length>6?6:nearbyAreas.length}>
					{nearbyAreas.map( nArea => 
						<div key = {nArea.area} style={{padding: 2}} className="my-4">
							<ServiceCard id = {nArea.area} cName = {nArea.pincode} cCount = {Math.ceil(nArea.distance)+'Km'} areaName = {nArea.area} />
						</div>			
					)}
				</Carousel>}
				<div className='row'>
					
					
				</div>
			</form>
		</div>
		
		
	</div>
);}
export default Home;
