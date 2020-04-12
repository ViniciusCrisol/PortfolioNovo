import React from 'react';
import { Link } from 'react-router-dom';

import { Item } from './styles';

export default function PorjectContainer({
  image,
  Title,
  Description,
  Icon1,
  Icon2,
  LinkDirection,
}) {
  return (
    <Item>
      <Link to={LinkDirection}>
        <img src={image} alt="ThumItem" />
        <footer>
          <div>
            <h3>{Title}</h3>
            <span>
              <h3>{Icon1}</h3>
              <h3>{Icon2}</h3>
            </span>
          </div>
          <p>{Description}</p>
        </footer>
      </Link>
    </Item>
  );
}
