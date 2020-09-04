import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import defaultAvatar from '../../images/default-placeholder.png'
import './ProfileForm.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import FileController from '../../components/Fields/FileController';
import { useRef } from 'react';
import ContactForm from '../ContactForm';

const defaultValues = {
    email: "ddd@ada.com",
    phone: "",
    address: "",
    avatar: {},
    birthday: "",
    gender: "male"
}

export default function ProfileForm() {

    const {
        control,
        handleSubmit,
        errors } = useForm({ defaultValues });
    const [imgUrl, setImg] = useState(defaultAvatar);
    let imgUpload = useRef(null);

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleClickImg = () => {
        imgUpload.current.click();
    }

    return <div className="profile-form">
        <form onSubmit={handleSubmit(onSubmit)} >
            <Container>
                <Row>
                    <Col className="avatar-container" xs="12" md="3" lg="4">
                        <Button color="link" onClick={handleClickImg}>
                            <div className="avatar-wrap">
                                <img src={imgUrl} alt="avatar" className="avatar" />
                            </div>
                            <FileController
                                control={control}
                                style={{ "display": "none" }}
                                innerRef={imgUpload}
                                onChange={(file) => {
                                    let src = URL.createObjectURL(file);
                                    setImg(src);
                                }}
                                name="avatar" />
                        </Button>
                    </Col>
                    <Col xs="12" md="9" lg="8">
                        <ContactForm 
                        control={control} 
                        errors={errors} />
                    </Col>
                </Row>
                <Row>
                    <Col className="submit-button-wrap" xs="12">
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