import React from 'react';
import { Row, Input, Button, Container, Col, Label, Badge } from 'reactstrap';
import { Controller } from 'react-hook-form';
import { useState } from 'react';
import * as ids from 'short-id';
import './SpecialForm.css';

export default function SpecialForm(props) {
    const { control, setValue } = props;
    const { special } = control.defaultValuesRef.current;
    const [errorRow, setError] = useState(null);

    return <div className="special-form" >
        <Container>
            <Label>
                <b>Kỹ năng:</b>
            </Label>
            <Controller
                name="special"
                control={control}
                defaultValue={special}
                render={({ onChange, value }) => {
                    function handleAddRow() {
                        const { name } = value[value.length - 1];
                        if (!name.length) {
                            setError("Không thể thêm hàng nếu ô trống.");
                            return;
                        } else {
                            setError(null);
                        }
                        setValue("special",[
                            ...value,
                            { name: "", range: 0, id: ids.generate() }
                        ]);
                    }
                    function handleOnChange(e, index) {
                        onChange([
                            ...value.slice(0, index),
                            {
                                ...value[index],
                                [e.target.name]: e.target.value
                            },
                            ...value.slice(index + 1)
                        ]);
                    }
                    return <div>
                        {
                            value.map((item, index) => {
                                return <div className="input-special-group" key={item.id}>
                                    <Row>
                                        <Col xs="12" md="3" >
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Kỹ năng của bạn..."
                                                defaultValue={item.name}
                                                onChange={(e) => { handleOnChange(e, index) }}
                                            />
                                        </Col>
                                        <Col xs="3" md="1">
                                            <i>{`${item.range}%`}</i>
                                        </Col>
                                        <Col xs="9" md="8" className="input-range-column" >
                                            <Input
                                                type="range"
                                                name="range"
                                                defaultValue={item.range}
                                                min="0" 
                                                max="100"
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