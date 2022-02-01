import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import ArrowDownIcon from './icons/ArrowDownIcon'
import EditIcon from './icons/EditIcon'
import DeleteIcon from './icons/DeleteIcon'

export default props => {

    const toggleActive = useAccordionButton(props.eventkey, () => {
        if (props.eventkey === props.activeItem) {
            props.setActiveItem(null)
        } else {
            props.setActiveItem(props.eventkey)
        }
    })
    return (
        <Card>
            <Card.Header>
                <div
                    onClick={toggleActive}
                    className='note-title'>
                    {props.note.title}
                </div>
                <div className='d-flex'>
                    <button className='edit-btn action-btn' onClick={() => props.onEditClick(props.note)}>
                        <EditIcon />
                    </button>
                    <button className='delete-btn action-btn' onClick={() => props.onDeleteClick(props.note)} >
                        <DeleteIcon />
                    </button>
                    <button
                        className={`${props.activeItem === props.eventkey ? 'active': ''} read-btn action-btn`}
                        type='button'
                        onClick={toggleActive}>
                        {props.activeItem === props.eventkey ? 'Collapse' : 'Read'}
                        <ArrowDownIcon />
                    </button>
                </div>
            </Card.Header>
            <Accordion.Collapse eventKey={props.eventkey}>
                <Card.Body>{props.note.description}</Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}