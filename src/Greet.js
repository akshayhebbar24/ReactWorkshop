// Greet.js
import React from 'react';

function Greet({ name, email, phone, skills = [], experience }) {
  return (
    <div className="greet-card">
      <h2>{name || "No Name Provided"}</h2>
      {email && <p><strong>Email:</strong> {email}</p>}
      {phone && <p><strong>Phone:</strong> {phone}</p>}
      {skills.length > 0 && (
        <p><strong>Skills:</strong> {skills.join(', ')}</p>
      )}
      {experience && <p><strong>Experience:</strong> {experience}</p>}
    </div>
  );
}

export default Greet;
