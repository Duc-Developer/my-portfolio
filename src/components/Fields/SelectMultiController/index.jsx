import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Label, Input, Row, Badge, Col, Container } from 'reactstrap';

SelectMultiController.propTypes = {
    errors: PropTypes.object,
    control: PropTypes.object,
    name: PropTypes.string,
    id: PropTypes.string,
    lableName: PropTypes.string,
    listSelect: PropTypes.array,
    rules: PropTypes.object
}

SelectMultiController.defaultProps = {
    errors: {},
    rules: {},
    listSelect: ["Select..."]
}

export default function SelectMultiController(props) {

    const {
        errors,
        control,
        name,
        id,
        lableName,
        listSelect,
        rules
    } = props;

    return <div className="select-multi-controller">
        <Container>
            <Row>
                <Col xs="12" lg="4">
                    <Label for={id}>
                        <b>{lableName}</b>
                    </Label>
                </Col>
                <Col xs="12" lg="8">
                    {errors[name] && <Badge color="warning">
                        <i>{errors[name].message}</i>
                    </Badge>}
                </Col>
            </Row>
            <Controller
                control={control}
                rules={rules}
                name={name}
                defaultValue={control.defaultValuesRef.current[name]}
                render={({ onChange, value }) => {
                    return <div>
                        <Input 
                        onChange={(e) => {onChange(e.target.value)}}
                        type="select" 
                        defaultValue={value} 
                        id={id}>
                            {
                                listSelect.map((item, index) => {
                                    return <option
                                        key={index}
                                        value={item}>
                                        {item}
                                    </option>
                                })
                            }
                        </Input>
                    </div>
                }}
            />
        </Container>
    </div>
}