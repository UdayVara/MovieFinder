import React from 'react'

export default function Navbar(props) {
  return (
    <>
            <nav className={`navbar navbar-expand-lg sticky-top navbar-${props.bgMode==='light' ? 'light':'dark'} bg-${props.bgMode==='light' ? 'light':'dark'}`}>
  <div className="container-fluid">
    <a className={`navbar-brand fs-4 text-${props.bgMode==='light' ? 'dark':'light'}`} href="/">Movie<i className="bi bi-search fs-3 b text-primary"></i>Finder</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="ms-auto navbar-nav">
        <li className="nav-item mx-3 fs-5">
          <a className="nav-link active" href="/"><span className={`text-${props.bgMode==='light' ? 'dark':'light'}`}>Home</span></a>
        </li>
        <li className="nav-item mx-3 fs-5">
        <a className="nav-link active" href="/"><span className={`text-${props.bgMode==='light' ? 'dark':'light'}`}>About</span></a>
        </li>
        <li className="nav-item mx-3 fs-5">
        <a className="nav-link active" href="/"><span className={`text-${props.bgMode==='light' ? 'dark':'light'}`}>Suggest us</span></a>
        </li>
        <li className="mt-2 nav-item mx-3 fs-5">
        <div className=" form-check form-switch">
        
  <label className={`form-check-label text-${props.bgMode==='light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >Dark mode</label>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onClick={props.changeBgMode}/>
</div>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
