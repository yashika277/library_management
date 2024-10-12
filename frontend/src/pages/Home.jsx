import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/books')
  }

  const img = require("../library_books/book week.avif")
  return (
    <div className='container-fluid home-page'>
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{ height: "91.5vh" }}>
          <div className="text-element">
            <h2 style={{ fontSize: "70px" }}>BOOK STORE FOR YOU</h2>
          </div>
          <p>checkout the books from here</p>

          <button onClick={handleClick} className='view-books btn btn-secondary border'>View Books</button>

        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img src={img} alt='book' style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  )
}

export default Home;
