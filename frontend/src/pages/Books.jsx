import React, { useState } from 'react'
import BookSection from '../components/BookSection'


const Books = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div style={{ minHeight: "91.5vh" }} className='bg-secondary-subtle'>
      <div className="d-flex justify-content-center align-items-center py-3">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <button class="btn btn-secondary" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
      <BookSection searchQuery={searchQuery} />
    </div>
  )
}

export default Books;
