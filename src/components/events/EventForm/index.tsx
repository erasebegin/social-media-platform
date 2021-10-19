import { useState, FormEvent, ChangeEvent } from 'react'
import { Button, Form, Header, Segment } from "semantic-ui-react";

interface Props {
    setShowEventForm: (formState: boolean) => void;
}

export default function EventForm({ setShowEventForm }: Props) {

    const initialValues = {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }

    const [values, setValues] = useState(initialValues);

    function handleSubmit(e: FormEvent): void {
        e.preventDefault()
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    return (
        <Segment clearing>
            <Header content="Create new event" />
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <input type="text" name="title" placeholder="Event title" value={values.title} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="category" placeholder="Category" value={values.category} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="description" placeholder="Description" value={values.description} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="city" placeholder="City" value={values.city} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="venue" placeholder="Venue" value={values.venue} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="date" name="date" placeholder="Date" value={values.date} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Button type="submit" floated="right" positive inverted content="Submit" />
                <Button type="submit" floated="right" content="Cancel" onClick={() => setShowEventForm(false)} />
            </Form>
        </Segment>

    )
}
