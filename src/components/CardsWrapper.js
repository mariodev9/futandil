import { Flex } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';
import picoImage from '../pico.png';
import talleresImage from '../talleres.png';
import manaaImage from '../manaa.jpg';
import calcettoImage from '../calcetto.jpg';
import independienteImage from '../independiente.jpg';
import commonImage from '../pelota.png';

const soccerFields = [
  {
    name: 'Pico Deportes',
    fieldTypes: ['F5', 'F8'],
    icon: picoImage,
    location: 'J. C. Pugliese 2256',
    wsp: '',
    pagelink: 'https://alquilatucancha.com/sportclub/796',
  },
  {
    name: 'Talleres',
    fieldTypes: ['F5', 'F6', 'F8'],
    icon: talleresImage,
    location: 'Alsina 635',
    wsp: '2494547290',
    pagelink: '',
  },
  {
    name: 'Independiente',
    fieldTypes: ['F8'],
    icon: independienteImage,
    location: 'Av. Avellaneda 745',
    wsp: '2494682956',
    pagelink: '',
  },
  {
    name: 'Calcetto II',
    fieldTypes: ['F5'],
    icon: calcettoImage,
    location: 'Alsina 123',
    wsp: '2494512201',
    pagelink: '',
  },
  {
    name: 'Manaa',
    fieldTypes: ['F5'],
    icon: manaaImage,
    location: 'Beiro, Av. Del valle. Esquina',
    wsp: '2494272802',
    pagelink: '',
  },

  {
    name: 'Boca',
    fieldTypes: ['F5', 'F8'],
    icon: commonImage,
    location: 'Belgrano 967',
    wsp: '2494378165',
    pagelink: '',
  },
  {
    name: 'Nahuel',
    fieldTypes: ['F5', 'F6', 'F8'],
    icon: commonImage,
    location: 'Av. Brasil, Pozos. Esquina',
    wsp: '2494316894',
    pagelink: '',
  },

  {
    name: 'La Juve Stadium',
    fieldTypes: ['F5', 'F8'],
    icon: commonImage,
    location: 'Av. Juan B. Justo 714',
    wsp: '2494211769',
    pagelink: '',
  },
  // {
  //   name: 'Barrilete Cosmico',
  //   fieldTypes: ['F5'],
  //   icon: talleresImage,
  //   location: 'Alsina 123',
  //   wsp: '2494559295',
  //   pagelink: '',
  // },
  // {
  //   name: 'Los Silos',
  //   fieldTypes: ['F5', 'F8'],
  //   icon: commonImage,
  //   location: 'Alsina 123',
  //   wsp: '2494051183',
  //   pagelink: '',
  // },
];

export default function CardsWrapper() {
  return (
    <Flex align={'center'} justify="center" direction="column">
      {soccerFields.map(
        ({ name, fieldTypes, icon, location, wsp, pagelink }) => (
          <Card
            name={name}
            img={icon}
            key={name}
            fieldTypes={fieldTypes}
            location={location}
            wsp={wsp}
            pagelink={pagelink}
          />
        )
      )}
    </Flex>
  );
}
