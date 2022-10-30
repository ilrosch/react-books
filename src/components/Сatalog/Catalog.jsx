import React from 'react';
import {Book} from "../Book/Book";

export const Catalog = (props) => {
    return <>
        {
            props.genre.map((book) => <Book key= {book.id} book = {book} />)
        }
    </>
}