import React from 'react';
import PropTypes from 'prop-types';

import { Item, Track, ContainerItem } from './styles';

export default function ProjectContainer({
  Title,
  Description,
  Icon1,
  Icon2,
  LinkDirection,
  bgColor,
}) {
  return (
    <Item color={bgColor} to={LinkDirection}>
      <Track color={bgColor}>
        <span>
          <h2>{Icon1}</h2>
          {Icon2 ? <h2>{Icon2}</h2> : <div />}
        </span>
      </Track>
      <ContainerItem>
        <div>
          <h3>{Title}</h3>
        </div>
        <p>{Description}</p>
        <footer>
          <h2>Acessar página do projeto</h2>
        </footer>
      </ContainerItem>
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
