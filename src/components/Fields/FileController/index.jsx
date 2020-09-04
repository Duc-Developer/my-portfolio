import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

FileController.propTypes = {
    name: PropTypes.string,
    control: PropTypes.object,
    innerRef: PropTypes.object,
    style: PropTypes.object,
    onChange: PropTypes.func
}

export default function FileController(props) {

    const { name, control, style, innerRef } = props;
    return <div>
        <Controller
            name={name}
            control={control}
            render={({ onChange }) => {
                return <div>
                    <Input
                        type="file"
                        accept="image/*"
                        innerRef={innerRef}
                        style={style}
                        onChange={(e) => {
                            onChange(e.target.files[0]);
                            props.onChange(e.target.files[0])
                        }}
                    />
                </div>
            }} />
    </div>
}