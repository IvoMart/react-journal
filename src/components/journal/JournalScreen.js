import React from 'react';
import { NoteScreen } from '../note/NoteScreen';
import { Sidebar } from './Sidebar';
// import { NothingSelected } from './NothingSelected';



export const JournalScreen = () => {
  return (
    <div className='journal__main_content'>
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}
        <NoteScreen/>
      </main>
    </div>
  );
};
