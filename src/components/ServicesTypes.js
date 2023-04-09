import React, { Component } from 'react'
import ServiceCard from './ServiceCard';
import Carousel from './Carousel';
import backgroundImage from '../stubs/Constants';
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';

class ServicesTypes extends Component {
    state = {
        categories: [],
        showAlert:false
    };
    
    componentDidMount() {
        let stub = require('../stubs/serviceCategories.json')
        this.setState({categories: stub.servicesTypes});
        if(!this.props.pincode){
            this.setState({showAlert:true});
        }
    }
    handleCloseAlert = () => {
        this.setState({showAlert:false});
        this.props.navigate("/")
    };
    render (){
        const categoriesJson = this.state.categories;
        let bgImg = backgroundImage;
        return(
            <div>
                {this.props.pincode ? (<div className='container' style={{maxWidth:"100%", margin:"0% 0%", padding:"5%",
                    position:'center', backgroundImage: `url(${bgImg})`}}>
                    <h2>Service Types</h2>
                    <Carousel show={5}>{categoriesJson.map( category =>
                        <div key = {category.categoryId} style={{padding: 2}}>
                            <ServiceCard  id = {category.categoryId} cName = {category.categoryName} 
                            cImage ={category.categoryImage} cCount = {category.optionsAvailablecount} />
                        </div>)}
                    </Carousel>
                </div>) :
                (this.state.showAlert && <div className='text-center'>
                    <Alert type="warning" message="Please select a pincode." onClose={this.handleCloseAlert}
                     disableUserInteraction={true}/>
                </div>)} 
            </div>
        )
    }
}

export function ServicesTypesFunc(props){
    const navigate = useNavigate()
    return (<ServicesTypes navigate={navigate} pincode={props.pincode}></ServicesTypes>)
}
export default ServicesTypes