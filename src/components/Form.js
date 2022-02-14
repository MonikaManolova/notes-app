import React, { useState } from "react"
import Title from './Title'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default ({ note, setNote, saveNote }) => {
    return (
        <div className="form-wrapper">
            <Title
                title='Manage Notes'
                subtitle='Fill up your note information in the form below.' />
            <Form>
                {/* TITLE */}
                <Form.Group controlId="formBasicTitle">
                    <Form.Label><span>*</span> Title</Form.Label>
                    <Form.Control
                        onChange={(event) => setNote({ ...note, title: event.target.value })}
                        value={note.title ? note.title : ''}
                        type="text"
                        placeholder="Ex. Shopping" />
                </Form.Group>
                {/* DESCRIPTION */}
                <Form.Group controlId="formBasicTitle">
                    <Form.Label><span>*</span> Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        onChange={(event) => setNote({ ...note, description: event.target.value })}
                        value={note.description ? note.description : ''}
                        type="text"
                        placeholder="Write your note..." />
                </Form.Group>
            </Form>
            <Button
                disabled={!note.title || !note.description}
                onClick={saveNote}>
                Save
            </Button>
        </div>
    )
}