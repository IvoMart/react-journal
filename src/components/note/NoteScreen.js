import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            
            <NotesAppBar />

            <div className="notes_content">
                <input type="text" placeholder='Titulo de Nueva Nota' className='notes__title_input' />

                <textarea name="description" id="description" placeholder='Detalles' className='notes__textarea'></textarea>
            </div>

            <div className="notes__image">
                <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg" alt="Imagen" />
            </div>

        </div>
    );
};
