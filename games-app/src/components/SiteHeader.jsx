import React from 'react';

export default function SiteHeader() {
  return (
    <header className="bg-dark text-white">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Games Catalogue</h1>
          </div>
          <div className="col-md-6">
            <nav className="navbar navbar-expand-lg justify-content-end">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link text-white" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">Games</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
