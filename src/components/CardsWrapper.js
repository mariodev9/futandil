import { Flex } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';
import picoImage from '../pico.png';
import talleresImage from '../talleres.png';

const soccerFields = [
  {
    name: 'Pico Deportes',
    fieldTypes: ['F5,F8'],
    icon: picoImage,
    location: 'Alsina 123',
  },
  {
    name: 'Talleres',
    fieldTypes: ['F5,F6,F8'],
    icon: talleresImage,
    location: 'Alsina 123',
  },
];

export default function CardsWrapper() {
  return (
    <Flex align={'center'} justify="center" direction="column">
      {soccerFields.map(({ name, fieldTypes, icon, location }) => (
        <Card name={name} img={icon} key={name} />
      ))}
    </Flex>
  );
}
