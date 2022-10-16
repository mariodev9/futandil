import { Box } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Navbar() {
  return (
    <Box border={'1px'}>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Box>
  );
}
