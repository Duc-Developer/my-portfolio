import React from 'react';
import { Progress, Label } from 'reactstrap';
import PropTypes from 'prop-types';

ProgressSkill.propTypes = {
    range: PropTypes.number,
    width: PropTypes.string,
    skill: PropTypes.string,
    labelColor: PropTypes.string
}

export default function ProgressSkill(props) {

    const { range, width, skill, labelColor } = props;
    let rangeSlice = Math.floor(range / 25);
    const listProgress = [
        { color: "infor", title: "begin" },
        { color: "success", title: "junior" },
        { color: "warning", title: "senior" },
        { color: "danger", title: "master" },
    ];

    return <div style={{ width: width }} className="progress-skill">
        <Label style={{ color: labelColor }} >{skill}</Label>
        <Progress min={0} max={100} multi>
            {
                listProgress.slice(0, rangeSlice + 1)
                    .map((item, index) => {

                        if (index === rangeSlice) {
                            return <Progress
                                bar
                                animated
                                key={item.color}
                                color={item.color}
                                value={range % 25}>
                                {item.title}
                            </Progress>
                        } else {
                            return <Progress
                                bar
                                animated
                                key={item.color}
                                color={item.color}
                                value="25">
                                {item.title}
                            </Progress>
                        }
                    })
            }
        </Progress>
    </div>
}