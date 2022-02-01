import React, {useState} from "react"
import Title from './Title'
import SingleNote from './SingleNote'
import Accordion from 'react-bootstrap/Accordion'

export default ({ notes, onEditClick, onDeleteClick }) => {
    const [activeItem, setActiveItem] = useState(null)

    return (
        <div className="notes-wrapper">
            <Title
                title='My Notes'
                subtitle='Take a look of your notes below.' />
            <div className="notes-container">
                <Accordion>
                    {
                        notes.map((note, key) =>
                            <SingleNote
                            onEditClick={onEditClick}
                            onDeleteClick={onDeleteClick}
                            key={key} 
                            note={note}
                            eventkey={key}
                            setActiveItem={setActiveItem}
                            activeItem={activeItem} />
                        )
                    }
                </Accordion>
            </div>
        </div>
    )
}