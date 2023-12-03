import { useState } from 'react';
import Header from './components/Header/Header';
import ListCertificates from './components/ListCertificate/ListCertificates';
import AddCertificate from './components/AddCertificate';
import './App.css';

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="App">
      <Header setShowAddForm={setShowAddForm} />
      {showAddForm ? (
        <AddCertificate />
      ) : (
        <ListCertificates /> // Removed licenses and handleRemoveLicense props
      )}
    </div>
  );
};

export default App;
