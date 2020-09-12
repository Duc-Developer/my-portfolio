import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./SpecialPage.css";
import {
  Button,
  Card,
  CardBody,
  CardLink,
  CardText,
  CardTitle,
  Col,
  Progress,
  Row,
} from "reactstrap";
import { pageRotateVariants, pageRotateTransitions } from "../../../transitions"

SpecialPage.propTypes = {
  defaultValues: PropTypes.object,
};

export default function SpecialPage(props) {
  const {
    school,
    rating,
    moreInformation,
    timeEnd,
    timeStart,
    specialize,
    special,
    project,
    knowledges,
  } = props.defaultValues;
  const [isActive, setActive] = useState(null);

  return (
    <motion.div
    initial="out" 
    animate="in" 
    exit="out" 
    transition={pageRotateTransitions}
    variants={pageRotateVariants}
    >
      <Row>
        <Col xs="12">
          <h1 className="special-page__title">RESUME</h1>
        </Col>
        <Col className="special-page__box" xs="12" lg="6">
          <h4 className="special-page__title">EDUCATION</h4>
          <div className="special-page__education">
            <ul>
              <li>
                <b>School: </b>
                <span>{school}</span>
              </li>
              <li>
                <b>Specialize: </b>
                <span>{specialize}</span>
              </li>
              <li>
                <b>Rating: </b>
                <span>{rating}</span>
              </li>
              <li>
                <b>Start: </b>
                <span>
                  {`${timeStart.slice(8, 10)}
                    -${timeStart.slice(5, 7)}
                    -${timeStart.slice(0, 4)}`}
                </span>
              </li>
              <li>
                <b>End: </b>
                <span>
                  {`${timeEnd.slice(8, 10)}
                    -${timeEnd.slice(5, 7)}
                    -${timeEnd.slice(0, 4)}`}
                </span>
              </li>
              <li>
                <span>{moreInformation}</span>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="special-page__box" xs="12" lg="6">
          <h4 className="special-page__title">SPECIAL</h4>
          {special &&
            special.map((item) => {
              return (
                <div key={item.id}>
                  <Row>
                    <Col xs="12" md="4" lg="6">
                      <b className="special-page__special-name-item">
                        {item.name}
                      </b>
                    </Col>
                    <Col xs="12" md="8" lg="6">
                      <Progress color="success" animated value={item.range}>
                        <i>{`${item.range}%`}</i>
                      </Progress>
                    </Col>
                  </Row>
                </div>
              );
            })}
        </Col>
      </Row>
      <Row>
        <Col className="special-page__box" xs="12" lg="6">
          <h4 className="special-page__title">MY PROJECT</h4>
          {project &&
            project.map((item) => {
              return (
                <div className="special-page__project-card" key={item.id}>
                  <Card color="secondary">
                    <CardBody>
                      <CardTitle>
                        <b className="special-page__project-name">
                          {item.name}
                        </b>
                      </CardTitle>
                      {isActive === item.id && (
                        <CardText>
                          <span className="special-page__project-information">
                            {item.information}
                          </span>
                        </CardText>
                      )}
                      <CardLink href={item.github}>
                        <i className="special-page__project-link">View Code</i>
                      </CardLink>
                      <CardLink href={item.website}>
                        <i className="special-page__project-link">Demo</i>
                      </CardLink>
                      <Button
                        outline
                        onClick={() => {
                          setActive(item.id);
                        }}
                        className="special-page__project-button"
                        color="secondary"
                      >
                        <i>Readme</i>
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
        </Col>
        <Col className="special-page__box" xs="12" lg="6">
          <h4 className="special-page__title">KNOWLEDGES</h4>
          {knowledges &&
            knowledges.map((item, index) => {
              return (
                <div key={index} className="special-page__knowledges-item">
                  <i>{item}</i>
                </div>
              );
            })}
        </Col>
      </Row>
    </motion.div>
  );
}
