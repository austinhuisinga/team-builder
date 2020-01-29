import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Members from './components/Members';
import memberData from './memberData';

function App() {
  const [members, setMembers] = useState(memberData);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }
  return (
    <div className="App">
      <h1>team-builder!</h1>
      <Members members={members} />
      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
