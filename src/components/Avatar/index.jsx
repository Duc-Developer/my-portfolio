import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from "../../images/default-placeholder.png";

Avatar.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.number,
    border: PropTypes.string
}

Avatar.defaultProps = {
    border: "2px solid #aaaaaa",
    src: defaultAvatar,
    size: 48
}

export default function Avatar(props) {

    const {
        size,
        alt,
        src,
        border
    } = props;
    return <div 
    className="avatar-coponent-basic" 
    style={{
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        overflow: "hidden",
        borderRadius: "50%",
        border: border
    }}
    >
        <img height={`${size*1.2}px`} width={`${size*1.2}px`} src={src} alt={alt}/>
    </div>
}