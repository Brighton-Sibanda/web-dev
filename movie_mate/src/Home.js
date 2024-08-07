// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/moviemate.webp";

function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="row w-100 mb-4">
        <div className="col d-flex justify-content-center">
          <form className="input-group w-75 w-md-50" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
