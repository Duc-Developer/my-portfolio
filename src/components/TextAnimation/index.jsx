import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

TextAnimation.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number,
  textList: PropTypes.array,
};

export default function TextAnimation(props) {
  const { color, fontSize, textList } = props;
  const [indexCurrent, setIndexCurrent] = useState(0);
  const [textAnimation, setAnimation] = useState(textList[indexCurrent]);

  useEffect(() => {
    let myTimeOut = setTimeout(() => {
      setAnimation(textAnimation.slice(0, textAnimation.length - 1));
    }, 500);
    if (textAnimation === textList[indexCurrent].slice(0, 3)) {
      if (indexCurrent < textList.length - 1) {
        setIndexCurrent(indexCurrent + 1);
        setAnimation(textList[indexCurrent + 1]);
        clearTimeout(myTimeOut);
      } else {
        setIndexCurrent(0);
        setAnimation(textList[0]);
      }
    }
  }, [textAnimation.length]);
  return (
    <div>
      <span
        style={{
          color: color,
          fontSize: `${fontSize}em`,
        }}
      >
        {`${textAnimation}|`}
      </span>
    </div>
  );
}
