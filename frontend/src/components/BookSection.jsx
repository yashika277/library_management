import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from './Modal';


const BookSection = ({ searchQuery }) => {

    const [book, setBooks] = useState([])
    const [view, setView] = useState({});

    //Get-data
    const getBooks = async () => {
        let result = await axios.get('http://localhost:5050/library/books/getBook')
        setBooks(result.data.books)
    }

    console.log(book, "result");

    useEffect(() => {
        getBooks();
    }, [])

    //Delete-data
    const onDelete = async (_id) => {
        try {
            await axios.delete(`http://localhost:5050/library/books/deleteBook/${_id}`);
            setBooks(book.filter((e) => e._id !== _id));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    //View-data
    const ViewData = (ind) => {
        let newData = book[ind]
        console.log(newData, "edit data");
        setView(newData)
        console.log(view, "section viewwww");
    }

    const handleView = (e) => {
        setView({ ...view, [e.target.name]: e.target.value })
    }

    //Update-data
    const handleUpdate = async () => {
        try {
            const res = await axios.put(`http://localhost:5050/library/books/updateBook/${view._id}`, view);
            setBooks(book.map((val) => (val._id === res.data._id ? res.data : val)));
            getBooks(); // Fetch the updated data
        } catch (error) {
            console.error('Error updating book:', error);
        }
    }
    console.log(book, "books");
    //Search-Data
    const filteredBooks = searchQuery ? book.filter((item) =>
        item.bookName.toLowerCase().includes(searchQuery.toLowerCase())
    ) : book

    return (
        <>
            <div className='row mt-3 '>
                {filteredBooks && filteredBooks.map((item, ind) => {
                    return (
                        <div className="col-3">
                            <div class="card bg-secondary text-white ms-3 p-2 mt-3" style={{ width: '18rem' }} key={ind}>
                                <img src={item.bookImg} class="card-img-top" alt="books" style={{ height: '300px' }} />
                                <div class="card-body">
                                    <h5 class="card-title">{item.bookName}</h5>
                                    <p class="card-text">{item.authorName}</p>
                                    {/* <p class="card-text">{item.releaseYear}</p> */}
                                    <p class="card-text">Price : ${item.charge}</p>
                                    <button type="button" class="btn btn-danger me-3 " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => ViewData(ind)}>Edit</button>

                                    <button onClick={() => onDelete(item._id)} class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <Modal view={view} handleView={handleView} handleUpdate={handleUpdate} />
        </>
    )
}

export default BookSection;
