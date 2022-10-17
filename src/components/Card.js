import { Box, Flex, Image, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FieldIcon, LocationIcon } from './Icons';

export default function Card({
  name,
  img,
  fieldTypes,
  location,
  contact,
  wsp,
  pagelink,
}) {
  const x = useMotionValue(300);
  const y = useMotionValue(100);

  const rotateX = useTransform(y, [0, 200], [45, -45]);
  const rotateY = useTransform(x, [0, 600], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  let url = wsp ? `https://wa.me/${wsp}` : pagelink;

  return (
    <>
      <motion.div
        style={{
          width: 250,
          height: 150,
          display: 'flex',
          placeItems: 'center',
          placeContent: 'center',
          borderRadius: 30,
          //   backgroundColor: 'rgba(255, 255, 255, 0.05)',
          perspective: 400,
          justifyContent: 'center',
          cursor: 'pointer',
          margin: '20px 0px',
        }}
        // onMouseMove={handleMouse}
      >
        <motion.div
          style={{
            width: 250,
            height: 150,
            borderRadius: 30,
            backgroundColor: '#fff',
            border: '2px solid #284323',
            // rotateX: rotateX,
            // rotateY: rotateY,
            padding: '10px',
          }}
        >
          <LinkBox>
            <Text
              textAlign={'center'}
              fontWeight={'bold'}
              fontSize="20px"
              color="#1E321B"
            >
              <LinkOverlay href={url} target="_blank">
                {name}
              </LinkOverlay>
            </Text>
            <Flex>
              <Flex w="40%" align="center" justify={'center'} p="10px">
                <Image src={img} borderRadius="10px" />
              </Flex>
              <Box w="60%">
                <Flex mt="15px" align={'center'}>
                  <Box w="30px">
                    <FieldIcon />
                  </Box>
                  {/* comp */}

                  <Flex align={'center'} ml="5px">
                    {fieldTypes?.map(item => (
                      <Flex align={'center'}>
                        <Box
                          w="8px"
                          h="8px"
                          borderRadius={'full'}
                          bg="#1E321B"
                          m="0px 3px"
                        />
                        <Text fontWeight={'medium'} color="#4F4F4F">
                          {item}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                  {/*  */}
                </Flex>
                <Flex mt="5px" align={'center'}>
                  <Box ml="4px" w="30px">
                    <LocationIcon />
                  </Box>
                  <Text
                    ml="5px"
                    fontWeight={'medium'}
                    fontSize="15px"
                    color="#4F4F4F"
                  >
                    {location}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </LinkBox>
        </motion.div>
      </motion.div>
    </>
  );
}
