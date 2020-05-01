import React from 'react';
import PropTypes from 'prop-types';

import { Item, Track } from './styles';

export default function ProjectContainer({
  Title,
  Description,
  Icon1,
  Icon2,
  LinkDirection,
  bgColor,
}) {
  return (
    <Item to={LinkDirection}>
      <Track color={bgColor}>
        <span>
          <h2>{Icon1}</h2>
          {Icon2 ? <h2>{Icon2}</h2> : <div />}
        </span>
      </Track>
      <div>
        <h3>{Title}</h3>
      </div>
      <p>{Description}</p>
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
};
