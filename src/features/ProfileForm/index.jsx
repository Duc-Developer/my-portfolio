import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import defaultAvatar from '../../images/default-placeholder.png'
import './ProfileForm.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import FileController from '../../components/Fields/FileController';
import { useRef } from 'react';
import ContactForm from '../ContactForm';
import TextFieldController from '../../components/Fields/TextFieldController';
import EducationForm from '../EducationForm';
import ExperienceForm from '../ExperienceForm';
import SpecialForm from '../SpecialForm'

const defaultValues = {
    email: "ddd@ada.com",
    phone: "",
    address: "",
    avatar: {},
    birthday: "",
    gender: "nam",
    rating: "",
    about: "",
    school: "",
    specialize: "",
    timeStart: "",
    timeEnd: "",
    moreInformation: "",
    experience: [
        { time: "", company: "", achievements: "", id: "dfeeds"}
    ],
    special: [
        { name: "", range: 10.5, id: "da"}
    ]
}

export default function ProfileForm() {

    const {
        control,
        handleSubmit,
        errors,
        getValues,
        setValue
     } = useForm({ defaultValues });
    const [imgUrl, setImg] = useState(defaultAvatar);
    let imgUpload = useRef(null);
    
    const onSubmit = (data) => {
        console.log("data: ",data);
    };

    const handleClickImg = () => {
        imgUpload.current.click();
    }

    return <div className="profile-form">
        <form onSubmit={handleSubmit(onSubmit)} >
            <Container>
                <Row>
                    <Col className="avatar-container" xs="12" md="4" lg="3">
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
                    <Col xs="12" md="8" lg="9">
                        <ContactForm
                            control={control}
                            errors={errors} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Container className="separator-line" >
                            <i className="fas fa-angle-double-right fa-lg" style={{ "color": "#87CEFA" }} />
                            <i className="fab fa-react fa-3x fa-spin"style={{ "color": "#87CEFA" }} />
                            <i className="fas fa-angle-double-left fa-lg" style={{ "color": "#87CEFA" }} />
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" lg="6">
                        <TextFieldController
                            type="textarea"
                            lableName="Giới thiệu:"
                            lableNameColor="white"
                            control={control}
                            errors={{}}
                            rules={{}}
                            name="about"
                            id="text-about"
                            placeholder="Một chút thông tin về bạn sẽ rất tuyệt..."
                        />
                    </Col>
                    <Col xs="12" lg="6">
                        <EducationForm
                            control={control}
                            errors={errors}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <ExperienceForm setValue={setValue} control={control} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <SpecialForm setValue={setValue} control={control} />
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