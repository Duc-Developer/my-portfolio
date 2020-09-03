import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './ProfileForm.css';
import { useForm } from 'react-hook-form';
import TextFieldController from '../../components/Fields/TextFieldController';

export default function ProfileForm() {

    const {
        control,
        register,
        handleSubmit,
        errors } = useForm({});

    const onSubmit = (data) => {
        console.log(data);
    }
    return <div className="profile-form">
        <form onSubmit={handleSubmit(onSubmit)} >
            <Container>
                <Row>
                    <Col xs="12" sm="4">
                        Image here
                    </Col>
                    <Col xs="12" sm="8">
                        <Row>
                            <Col xs="12" sm="8">
                                <TextFieldController
                                    name="email"
                                    lableName="Email"
                                    type="text"
                                    id="inputEmail"
                                    placeholder="Email Here...."
                                    rules={{
                                        required: { value: true, message: "Email là bắt buộc." },
                                        pattern: {
                                            value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                                            message: "Định dạng email chưa đúng."
                                        }
                                    }}
                                    errors={errors}
                                    control={control} />
                            </Col>
                            <Col xs="12" sm="4">
                                Gender here
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Button
                            color="primary"
                            type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Container>
        </form>
    </div>
}