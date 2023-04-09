import React from 'react'

function ServiceCard(props) {
    return (
        <div className='col'>
            <div className='card text-white bg-dark'>
                <div className="card-header" style={{height:45}}>
                    <div style={{display:'flex',justifyContent: 'flex-end',position : 'absolute', right:0, top:0}}>
                        <span className='badge rounded-pill bg-danger' style={{fontSize: '15px', minWidth:"45px", marginTop:0}}>{props.cCount}</span>
                    </div>
                    <h4>{props.cName}</h4>
                </div>    
                {props.cImage && 
                    <div className="card-body" style={{padding:"0px 20px 20px 20px"}}>
                        <img src={props.cImage} className="card-img-top d-block w-100" alt="..." width="200" height="150"/>
                    </div>
                }
                {props.areaName &&
                    <div style={{height: 48, textAlign:'center'}}>{props.areaName}</div>
                }
            </div>
        </div>
    )
}

export default ServiceCard