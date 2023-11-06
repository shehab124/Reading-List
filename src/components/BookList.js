import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';


const BookList = () => {
    // Theme
    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const currentTheme = isLightTheme ? light : dark;

    // Books
    const { books } = useContext(BookContext);

    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (<BookDetails book={book} key={book.id} />)
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read.</div >
    )
}

export default BookList;