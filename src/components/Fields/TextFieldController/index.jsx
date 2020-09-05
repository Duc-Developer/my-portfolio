import React from 'react';
import { Controller } from 'react-hook-form';
import { Input, Label, Container, Row, Col, Badge } from 'reactstrap';
import PropTypes from 'prop-types';

TextFieldController.propTypes = {
    control: PropTypes.object,
    name: PropTypes.string,
    rules: PropTypes.object,
    type: PropTypes.string,
    hiddenLabel: PropTypes.bool,
    lableName: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    errors: PropTypes.object,
    size: PropTypes.string, // lg normal sm
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    lableNameColor: PropTypes.string
}

TextFieldController.defaultProps = {
    hiddenLabel: false,
    errors: {},
    rules: {},
    lableNameColor: "#0000000"
}

export default function TextFieldController(props) {

    const {
        control,
        name,
        rules,
        type,
        hiddenLabel,
        lableName,
        id,
        placeholder,
        errors,
        size,
        tag,
        lableNameColor
    } = props;
    const defaultValue = control.defaultValuesRef.current[name];

    return <div>
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ onChange }) => {
                return <Container>
                    <Row>
                        <Col xs="12" sm="4">
                            <Label for={id} hidden={hiddenLabel}>
                                <b style={{ "color": lableNameColor }}>
                                    {lableName}
                                </b>
                            </Label>
                        </Col>
                        <Col xs="12" sm="8">
                            {errors[name] && <Badge color="warning">
                                <i>{errors[name].message}</i>
                            </Badge>}
                        </Col>
                    </Row>
                    <Input
                        type={type}
                        size={size}
                        tag={tag}
                        id={id}
                        defaultValue={defaultValue}
                        onChange={(e) => { onChange(e) }}
                        placeholder={placeholder}
                    />

                </Container>
            }}
        />
    </div>
}