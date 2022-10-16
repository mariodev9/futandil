import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Card({ name, img }) {
  const x = useMotionValue(300);
  const y = useMotionValue(100);

  const rotateX = useTransform(y, [0, 200], [45, -45]);
  const rotateY = useTransform(x, [0, 600], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <>
      <motion.div
        style={{
          width: 600,
          height: 200,
          display: 'flex',
          placeItems: 'center',
          placeContent: 'center',
          borderRadius: 30,
          //   backgroundColor: 'rgba(255, 255, 255, 0.05)',
          perspective: 400,
          justifyContent: 'center',
        }}
        onMouseMove={handleMouse}
      >
        <motion.div
          style={{
            width: 250,
            height: 150,
            borderRadius: 30,
            backgroundColor: '#fff',
            border: '2px solid #A1A1A1',
            rotateX: rotateX,
            rotateY: rotateY,
            display: 'flex',
            padding: '10px',
          }}
        >
          <Flex w="35%" align="center" justify={'center'}>
            <Image src={img} />
          </Flex>
          <Box w="65%">
            <Text textAlign={'center'} fontWeight={'bold'}>
              {name}
            </Text>
          </Box>
        </motion.div>
      </motion.div>
    </>
  );
}
