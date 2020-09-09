import React, { useState, useEffect } from "react";
import { Row, Col, Input, Label, Button, ButtonGroup, Alert } from "reactstrap";
import { Controller } from "react-hook-form";
import * as ids from "short-id";
import "./ProjectForm.css";

export default function ProjectForm(props) {
  const [count, setCount] = useState(1);
  const { control, setValue } = props;
  const { project } = control.defaultValuesRef.current;
  const [projectCurrent, setProjectCurrent] = useState(project[0]);
  const [indexCurrent, setIndexCurrent] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div className="project-form">
      <Controller
        name="project"
        control={control}
        defaultValue={project}
        render={({ onChange, value }) => {
          function handleChange(e) {
            // bắt thay đổi tại projectCurrent để nó hiển thị như ý muốn
            setProjectCurrent({
              ...projectCurrent,
              [e.target.name]: e.target.value,
            });
            // bắt thay đổi cho projectItem dc chọn trong project
            onChange([
              ...value.slice(0, indexCurrent),
              {
                ...value[indexCurrent],
                [e.target.name]: e.target.value,
              },
              ...value.slice(indexCurrent + 1),
            ]);
          }
          // tôi sẽ ko dùng pagnination của reactstrap vì tôi ko muốn chuyển trang
          // thay vào đó tôi sẽ tạo groupButton và bắt form hiển thị giá trị
          // tại nút button tương ứng với vị trí của projectItem
          const handleDecrease = () => {
            if (count > 1) {
              setCount(count - 1);
            }
          };

          const handleIncrease = () => {
            if (count <= value.length - 2) {
              setCount(count + 1);
            }
          };

          function handleAddProject() {
            const { name, website, github } = value[value.length - 1];
            if (!name || !website || !github) {
              setErrorMessage("Không thể thêm tab mới nếu tab trước trống.");
              return;
            } else {
              setErrorMessage(null);
            }
            let newProjectItem = {
              id: ids.generate(),
              name: "",
              github: "",
              website: "",
            };
            setValue("project", [...value, newProjectItem]);
            handleIncrease();
          }
          return (
            <div>
              <Row>
                <Col xs="12">
                  {errorMessage && (
                    <Alert color="warning">{errorMessage}</Alert>
                  )}
                </Col>
              </Row>
              <Row>
                <Col xs="9">
                  <ButtonGroup>
                    <Button onClick={handleDecrease} outline>
                      {"<<"}
                    </Button>
                    {value.slice(count - 1, count + 2).map((item, index) => {
                      return (
                        <Button
                          color={
                            indexCurrent === index + count - 1
                              ? "primary"
                              : "secondary"
                          }
                          onClick={() => {
                            setProjectCurrent(item);
                            setIndexCurrent(index + count - 1);
                          }}
                          key={index}
                        >
                          {count + index}
                        </Button>
                      );
                    })}
                    <Button onClick={handleIncrease} outline>
                      {">>"}
                    </Button>
                  </ButtonGroup>
                </Col>
                <Col
                  style={{
                    justifyContent: "flex-end",
                    display: "flex",
                  }}
                  xs="3"
                >
                  <Button onClick={handleAddProject} color="primary">
                    +
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col xs="12" lg="4">
                  <Label>
                    <b>Project Name:</b>
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    value={projectCurrent.name}
                    placeholder="Your Project Name"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </Col>
                <Col xs="12" lg="8">
                  <Label>
                    <b>Github link:</b>
                  </Label>
                  <Input
                    type="text"
                    name="github"
                    value={projectCurrent.github}
                    placeholder="Your Github link"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </Col>
                <Col xs="12">
                  <Label>
                    <b>Web link:</b>
                  </Label>
                  <Input
                    type="text"
                    name="website"
                    value={projectCurrent.website}
                    placeholder="Your Web link"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </Col>
              </Row>
            </div>
          );
        }}
      />
    </div>
  );
}
