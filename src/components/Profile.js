import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from API
    // const fetchUser = async () => {
    const fetchUser = () => {
    //   const response = await fetch(`/api/users/${userId}`);
    // const data = await response.json();
    const data = require('../stubs/userProfile.json');
    
    setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }
  
  let bgImg = "https://img.freepik.com/premium-photo/abstract-blue-background-texture_196038-417.jpg?w=740"
  return (
    <Card style={{ maxWidth: '600px', margin: '0 auto', marginTop:'7%' ,backgroundImage: `url(${bgImg})`}}>
      <Card.Header>
        <h1>User Profile</h1>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div className='row'>
            <div className='col-md-3'><strong>Name:</strong> </div>
            <div className='col-md-5'> {user.firstName} {user.lastName}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='row'>
            <div className='col-md-3'><strong>Email:</strong> </div>
            <div className='col-md-5'> {user.email}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='row'>
            <div className='col-md-3'><strong>Contact:</strong> </div>
            <div className='col-md-5'> {user.contact}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='row'>
            <div className='col-md-3'><strong>Date Of Birth:</strong> </div>
            <div className='col-md-5'> {user.dob}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='row'>
            <div className='col-md-3'><strong>Location:</strong> </div>
            <div className='col-md-5'> user.location  </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='row'>
            <div className='col-md-3'><strong>Bio:</strong> </div>
            <div className='col-md-5'> user.bio</div>
          </div>
        </ListGroup.Item>
        {/* Additional profile information can be added here */}
      </ListGroup>
    </Card>
  );
};

export default Profile;

