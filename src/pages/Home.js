import { Text } from '@chakra-ui/react';
import React from 'react';
import CardsWrapper from '../components/CardsWrapper';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Text
        textAlign={'center'}
        m="30px 0px"
        fontSize={'30px'}
        fontWeight={'bold'}
      >
        Canchas sintéticas de fútbol - Tandil
      </Text>
      <CardsWrapper />
    </>
  );
}
