import React from 'react';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
    const entries = [0,1,2,3,4]


    return (
        <div className="journal__entries">
            {
                entries.map(entryValue => (<JournalEntry key={entryValue} />))
            }
        </div>
    );
};
