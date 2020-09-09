import React, { useState } from "react";
import { Col, Input, Row, Button, Label } from "reactstrap";
import { Controller } from "react-hook-form";
import "./KnowLedgesForm.css";

export default function KnowledgesForm(props) {
  const { control, setValue } = props;
  const [knowledgeItem, setItem] = useState("");
  return (
    <div className="know-ledges">
      <Row>
        <Col xs="12">
          <Controller
            name="knowledges"
            control={control}
            defaultValue={control.defaultValuesRef.current.knowledges}
            render={({ value }) => {
              function handleRemove(item, index) {
                setValue("knowledges", [
                  ...value.slice(0, index),
                  ...value.slice(index + 1),
                ]);
              }

              function handleAddItem() {
                let newValue = [...value];
                newValue.push(knowledgeItem);
                setValue("knowledges", newValue);
              }

              function handleChange(e) {
                setItem(e.target.value);
              }

              return (
                <div>
                  <Row>
                    <Col xs="12">
                      <Label>
                        <b>Kiến thức:</b>
                      </Label>
                      <div className="knowledges-wrap-input">
                        <Input
                          type="text"
                          placeholder="Something you can do..."
                          name="knowledgeItem"
                          value={knowledgeItem}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        <Button onClick={handleAddItem} color="link">
                          <b>add</b>
                        </Button>
                      </div>
                    </Col>
                    <Col xs="12">
                      <div className="knowledges-list-item-box">
                        {value.map((item, index) => {
                          return (
                            <div key={index} className="knowledges-item">
                              <i>{item}</i>
                              <i
                                type="button"
                                style={{ color: "black" }}
                                onClick={() => {
                                  handleRemove(item, index);
                                }}
                                className="fas fa-times-circle knowledges-close-icon-button"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
