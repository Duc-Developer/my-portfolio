import React from 'react';
import { Controller } from 'react-hook-form';
import { Input, Badge, Label, FormGroup, Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';

RadioController.propTypes = {
    name: PropTypes.string,
    control: PropTypes.object,
    errors: PropTypes.object,
    rules: PropTypes.object,
    checkList: PropTypes.array,
    title: PropTypes.string
}

RadioController.defaultProps = {
    checkList: []
}

export default function RadioController(props) {

    const {
        control,
        name,
        errors,
        rules,
        checkList,
        title
    } = props;

    return <div>
        <Controller
            name="gender"
            control={control}
            defaultValue={control.defaultValuesRef.current[name]}
            rules={rules}
            render={({ onChange, value }) => {
                return <Container>
                    <Label>
                        <b>{title}</b>
                    </Label>
                    <Row>
                        {
                            checkList.map(item => {
                                return <div key={item}>
                                    <Col xs="12" md="6" sm="12" lg="4">
                                        <FormGroup check>
                                            <Label check>
                                                <Input
                                                    value={item}
                                                    checked={value === item}
                                                    name="gender"
                                                    onChange={(e) => { onChange(e.target.value) }}
                                                    type="radio" />
                                                    {item.slice(0,1).toUpperCase() + item.slice(1)}
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </div>
                            })
                        }
                    </Row>
                </Container>
            }}
        />
        {errors[name] && <Badge><i>{errors[name].message}</i></Badge>}
    </div>
}