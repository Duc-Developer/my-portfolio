import React from 'react';
import { Row, Col, Button, Input, Label, Container } from 'reactstrap';
import './ExperienceForm.css'
import { Controller } from 'react-hook-form';

export default function ExperienceForm(props) {

    const { control } = props;
    const { experience } = control.defaultValuesRef.current;

    return <div className="experience-form">
        <Container>
            <Controller
                name="experience"
                control={control}
                defaultValue={experience}
                render={({ onChange, value }) => { //do something data with id
                    return value.map(item => {
                        function handleOnChange(e, id) {
                            for(var key in value) {
                                if(value[key].id === id){
                                    onChange([
                                        {
                                            ...value[key],
                                            [e.target.name]: e.target.value
                                        }
                                    ])
                                }
                            }
                        }
                        return <div className="input-experience-group" key={item.id}>
                            <Row>
                                <Col xs="12" sm="4" lg="2">
                                    <Label><b>Time:</b></Label>
                                    <Input
                                        type="date"
                                        name="time"
                                        defaultValue={item.time}
                                        onChange={(e) => { handleOnChange(e, item.id) }}
                                    />
                                </Col>
                                <Col xs="12" sm="8" lg="4">
                                    <Label><b>Time:</b></Label>
                                    <Input
                                        type="text"
                                        name="company"
                                        defaultValue={item.company}
                                        onChange={(e) => { handleOnChange(e, item.id) }}
                                    />
                                </Col>
                                <Col sm="12" lg="6">
                                    <Label><b>Time:</b></Label>
                                    <Input
                                        type="text"
                                        name="achievements"
                                        defaultValue={item.achievements}
                                        onChange={(e) => { handleOnChange(e, item.id) }}
                                    />
                                </Col>
                            </Row>
                        </div>
                    })
                }}
            />
            {/* <Button color="link" onClick={handleAddRow}>
                <i className="fas fa-folder-plus fa-3x" />
            </Button> */}
        </Container>
    </div>
}
