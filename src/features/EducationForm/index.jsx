import React from 'react';
import { Row, Col } from 'reactstrap';
import TextFieldController from '../../components/Fields/TextFieldController';
import SelectMultiController from '../../components/Fields/SelectMultiController';

export default function EducationForm(props) {

    const { control, errors } = props;
    return <div className="education-form">
        <Row>
            <Col xs="12" lg="6">
                <TextFieldController
                    name="school"
                    lableName="School:"
                    type="text"
                    id="inputSchool"
                    placeholder="What is your school"
                    rules={{
                        required: { value: true, message: "School là bắt buộc." },
                    }}
                    errors={errors}
                    control={control} />
            </Col>
            <Col xs="12" lg="6">
                <TextFieldController
                    name="specialize"
                    lableName="Ngành:"
                    type="text"
                    id="inputSpecialize"
                    placeholder="Chuyên ngành của bạn..."
                    control={control} />
            </Col>
        </Row>
        <Row>
            <Col xs="12" lg="4">
                <SelectMultiController
                control={control}
                errors={errors}
                name="rating"
                lableName="Loại:"
                listSelect={[
                    "Kém", "Trung bình", "Khá", "Giỏi", "Xuất sắc"
                ]}
                rules={{required: {
                    value: true,
                    message: "Thiếu hạng!"
                }}}
                />
            </Col>
            <Col xs="12" lg="4">
                <TextFieldController
                    name="timeStart"
                    lableName="Start:"
                    type="date"
                    id="inputTimeStart"
                    placeholder="TimeStart Here...."
                    control={control} />
            </Col>
            <Col xs="12" lg="4">
                <TextFieldController
                    name="timeEnd"
                    lableName="End:"
                    type="date"
                    id="inputTimeEnd"
                    placeholder="TimeEnd Here...."
                    control={control} />
            </Col>
        </Row>
        <Row>
            <Col xs="12">
            <TextFieldController
                        type="textarea"
                        control={control}
                        name="moreInformation"
                        id="moreInformation"
                        placeholder="Nếu bạn cần giới thiệu thêm..."
                        />
            </Col>
        </Row>
    </div>
}