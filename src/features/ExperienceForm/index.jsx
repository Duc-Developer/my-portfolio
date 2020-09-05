import React from 'react';
import { Row, Col, Button, Input, Label, Container, Badge } from 'reactstrap';
import './ExperienceForm.css'
import { Controller } from 'react-hook-form';
import { useState } from 'react';

export default function ExperienceForm(props) {

    const { control, setValue } = props;
    const { experience } = control.defaultValuesRef.current;
    const [errorRow, setError] = useState(null);

    return <div className="experience-form">
        <Container>
            <Label>
                <b>Kinh nghiệm:</b>
            </Label>
            <Controller
                name="experience"
                control={control}
                defaultValue={experience}
                render={({ onChange, value }) => { //do something data with id
                    function handleOnChange(e, index) {
                        onChange([
                            ...value.slice(0, index),
                            {
                                ...value[index],
                                [e.target.name]: e.target.value
                            },
                            ...value.slice(index + 1)
                        ])
                    }
                    function handleAddRow() {
                        const { time, company, achievements } = value[value.length - 1];
                        if (!time.length || !company.length || !achievements.length) {
                            setError("Không thể thêm hàng nếu ô trống!");
                            return;
                        } else {
                            setError(null);
                        }
                        setValue("experience", [
                            ...value,
                            { time: "", company: "", achievements: "", id: "dssa" }
                        ]);
                    }

                    return <div>
                        {
                            value.map((item, index) => {
                                return <div className="input-experience-group" key={item.id}>
                                    <Row>
                                        <Col xs="12" sm="4" lg="2">
                                            <Label><b>Time:</b></Label>
                                            <Input
                                                type="month"
                                                name="time"
                                                defaultValue={item.time}
                                                onChange={(e) => { handleOnChange(e, index) }}
                                            />
                                        </Col>
                                        <Col xs="12" sm="8" lg="4">
                                            <Label><b>Công ty:</b></Label>
                                            <Input
                                                type="text"
                                                name="company"
                                                defaultValue={item.company}
                                                onChange={(e) => { handleOnChange(e, index) }}
                                            />
                                        </Col>
                                        <Col sm="12" lg="6">
                                            <Label><b>Thành tích:</b></Label>
                                            <Input
                                                type="text"
                                                name="achievements"
                                                defaultValue={item.achievements}
                                                onChange={(e) => { handleOnChange(e, index) }}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            })
                        }
                        <Row>
                            <Col xs={12} sm={6} md={2}>
                                <Button color="link" onClick={handleAddRow}>
                                    <i className="far fa-plus-square fa-3x" />
                                </Button>
                            </Col>
                            <Col xs={12} sm={6} md={6}>
                                {
                                    errorRow && 
                                    <Badge className="alert-add-row" color="warning" pill>
                                        <i>{errorRow}</i>
                                    </Badge>
                                }
                            </Col>
                        </Row>
                    </div>
                }}
            />
        </Container>
    </div>
}
