import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function CharacterList({ characters }) {
  return (
    <>
      <ListGroup>
        {characters.map((char) => {
          const { name, active } = char;
          return (
            <ListGroup.Item key={name} className={{ active }}>
              {name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}
