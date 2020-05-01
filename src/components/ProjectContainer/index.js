import React from 'react';
import PropTypes from 'prop-types';

import { Item } from './styles';

export default function ProjectContainer({
  Title,
  Description,
  Icon1,
  Icon2,
  Image,
  LinkDirection,
  bgColor,
}) {
  return (
    <Item color={bgColor} to={LinkDirection}>
      <img src={Image} alt="amor" />

      <footer>
        <div>
          <h3>{Title}</h3>
          <span>
            <h2>{Icon1}</h2>
            <h2>{Icon2}</h2>
          </span>
        </div>
        <p>{Description}</p>
      </footer>
    </Item>
  );
}

ProjectContainer.propTypes = {
  Title: PropTypes.element.isRequired,
  Description: PropTypes.element.isRequired,
  Icon1: PropTypes.element.isRequired,
  Icon2: PropTypes.element.isRequired,
  LinkDirection: PropTypes.element.isRequired,
  bgColor: PropTypes.element.isRequired,
  Image: PropTypes.element.isRequired,
};
