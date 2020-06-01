import React from 'react';
import PropTypes from 'prop-types';

import { Item, ContainerItem, Stripe } from './styles';

export default function ProjectContainer({
  title,
  description,
  icon1,
  icon2,
  linkDirection,
  bgColor,
}) {
  return (
    <Item color={bgColor} to={linkDirection}>
      <Stripe color={bgColor} />
      <section />
      <span>
        <h2>{icon1}</h2>
        {icon2 && <h2>{icon2}</h2>}
      </span>
      <ContainerItem>
        <div>
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
      </ContainerItem>
    </Item>
  );
}

ProjectContainer.propTypes = {
  title: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired,
  icon1: PropTypes.element.isRequired,
  icon2: PropTypes.element.isRequired,
  linkDirection: PropTypes.element.isRequired,
  bgColor: PropTypes.element.isRequired,
};
