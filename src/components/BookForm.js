import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';


const NewBookForm = () => {

    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                onChange={(e) => setTitle(e.target.value)}
                required
                value={title}
                placeholder='book title'
            />
            <input type="text"
                onChange={(e) => setAuthor(e.target.value)}
                required
                value={author}
                placeholder='author'
            />
            <input type="submit" value="Add Book" />
        </form>
    );
}

export default NewBookForm;