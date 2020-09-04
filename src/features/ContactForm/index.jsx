import React from 'react';
import { Row, Col } from 'reactstrap';
import TextFieldController from '../../components/Fields/TextFieldController';
import RadioController from '../../components/Fields/RadioController';

export default function ContactForm(props) {

    const { control, errors } = props
    return <div className="contact-form">
        <Row>
            <Col xs="12" sm="8">
                <TextFieldController
                    name="email"
                    lableName="Email:"
                    type="text"
                    id="inputEmail"
                    placeholder="Email Here...."
                    rules={{
                        required: { value: true, message: "Email là bắt buộc." },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Định dạng email chưa đúng."
                        }
                    }}
                    errors={errors}
                    control={control} />
            </Col>
            <Col xs="12" sm="4">
                <RadioController
                    checkList={["Nam", "Nữ"]}
                    errors={errors}
                    rules={{ required: { value: true, message: "Giới tính là bắt buộc" } }}
                    control={control}
                    title="Giới tính:"
                     />
            </Col>
        </Row>
        <Row>
            <Col xs="12" md="6" lg="8">
                <TextFieldController
                    name="phone"
                    lableName="Phone:"
                    type="tel"
                    id="inputPhone"
                    placeholder="Phone Here...."
                    rules={{
                        required: { value: true, message: "Phone là bắt buộc." },
                        minLength: { value: 10, message: "Phone phải trên 10 số." }
                    }}
                    errors={errors}
                    control={control} />
            </Col>
            <Col xs="12" md="6" lg="4">
                <TextFieldController
                    name="birthday"
                    lableName="Birthday:"
                    type="date"
                    id="inputBirthday"
                    placeholder="Birthday Here...."
                    rules={{}}
                    errors={errors}
                    control={control} />
            </Col>
        </Row>
        <Row>
            <Col xs="12">
                <TextFieldController
                    name="address"
                    lableName="Adress:"
                    type="tel"
                    id="inputAddress"
                    placeholder="Address Here...."
                    rules={{}}
                    errors={errors}
                    control={control} />
            </Col>
        </Row>
    </div>
}