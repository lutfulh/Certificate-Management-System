import React from 'react';
import './Header.css'; 
interface HeaderProps {
  setShowAddForm: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setShowAddForm }) => {
  return (
    <div className="header">
      <h1>License Management</h1>
      <div className="navigation">
        <button onClick={() => setShowAddForm(false)}>List License</button>
        <button onClick={() => setShowAddForm(true)}>Add License</button>
      </div>
    </div>
  );
};

export default Header;
