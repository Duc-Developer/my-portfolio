import React from 'react';
import PropTypes from 'prop-types';
import './TextCard.css'

TextCard.propTypes = {
    textHeader: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    subline: PropTypes.string,
    iconColor: PropTypes.string,
    fontSize: PropTypes.number
}

TextCard.defaultProps = {
    fontSize: 1
}

export default function TextCard(props) {

    const {
        textHeader,
        title,
        children,
        subline,
        iconColor,
        fontSize
    } = props;
    return <div className="text-card">
        <div className="text-card-line-left">
            <i
                style={{
                    color: iconColor,
                    fontSize: `${2 * fontSize}em`
                }}
                className="fas fa-check-circle" />
            <div
                style={{
                    color: iconColor,
                    width: `${fontSize}em`,
                    marginTop: "10px",
                    height: "100%",
                    backgroundColor: iconColor,
                    borderRadius: "20px"
                }} />
        </div>
        <div className="text-card-box-content">
            <div
                style={{ backgroundColor: iconColor }}
                className="text-card-header">
                <i
                    style={{
                        fontSize: `${2 * fontSize}em`,
                        color: "white"
                    }}
                    className="fas fa-angle-double-right">
                    {textHeader}
                </i>
            </div>
            <div className="text-card-title">
                <b style={{ fontSize: `${1.5 * fontSize}em` }} >
                    {title}
                </b>
            </div>
            <div className="text-card-subline">
                <i style={{ fontSize: `${fontSize}em` }} >
                    {subline}
                </i>
            </div>
            <div className="text-card-content">
                <span style={{ 
                    fontSize: `${fontSize}em`
                    }}>
                    {children}
                </span>
            </div>
        </div>
    </div>
}