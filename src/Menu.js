// Menu.js
import React from 'react';
import Greet from './Greet';

function Menu() {
  const users = [
    {
      name: 'Akshay',
      email: 'akshayhebbar568@gmail.com',
      phone: '9740569989',
      skills: ['React', 'JavaScript', 'CSS'],
      experience: '3 years'
    },
    {
      name: 'KumaraHegde',
      email: 'kummikiran@gmail.com',
      phone: '987-654-3210',
      skills: ['Python', 'Django', 'Kiran'],
      experience: '69 years'
    },
    {
      name: 'Nagesh',
      email: 'shrajankumar@example.com',
      phone: '69696969696',
      skills: ['Java', 'Spring Boot,Shrajan'],
      experience: '8 years'
    }
  ];

  return (
    <div className="Shailu">
      <h1>User Menu</h1>
      {users.map((user, index) => (
        <Greet
          key={index}
          name={user.name}
          email={user.email}
          phone={user.phone}
          skills={user.skills}
          experience={user.experience}
        />
      ))}
    </div>
  );
}

export default Menu;
