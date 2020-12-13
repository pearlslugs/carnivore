import React from 'react'
import {
  ChakraProvider,
  Box,
  Image,
  List,
  Link,
  Heading,
  Text,
  FormLabel,
  Input,
  Button,
  IconButton,
  FormErrorMessage,
  FormControl
} from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

const App = () => (
  <ChakraProvider resetCSS>
    <Box>
      <Box
        bgImage='url("https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?cs'
        m={-3}
      >
        <Box display="flex" justifyContent="space-between">
          <Image height="100px" width="100px" ml={5} mt={5} />
          <List
            display="flex"
            mr={5}
            width="50%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link color="whiteAlpha.900">How It Works</Link>
            <Link color="whiteAlpha.900">Reviews</Link>
            <Link color="whiteAlpha.900">Our Company</Link>
            <Link color="whiteAlpha.900">About Us</Link>
            <Link
              backgroundColor="orange.500"
              color="whiteAlpha.900"
              p={3}
              borderRadius="5px"
            >
              Sell Your House
            </Link>
          </List>
        </Box>
        <Heading
          textAlign="center"
          mt={20}
          color="whiteAlpha.900"
          fontWeight="bold"
        >
          [KEYWORD DRIVEN]: Sell Your House In City State
        </Heading>
        <Text textAlign="center" mt={5} color="whiteAlpha.900">
          No realtors, No fees, No commissions & No repairs!
        </Text>
        <Box display="flex" justifyContent="center" mt={20}>
          <IconButton
            aria-label="icon"
            icon={<CopyIcon />}
            size="md"
            textAlign="center"
          />
        </Box>
      </Box>
    </Box>
    <Heading textAlign="center" as="h2" mt={5}>
      Sell Your House In Three Easy Steps
    </Heading>
    <Text mt={5}>
      {' '}
      Explain in a short brief paragraph how these three steps will get them out
      of their frustrating situation FAST. Explain how these steps benefit the
      client.
    </Text>
    <Box display="flex" m={5} justifyContent="space-between" p={20}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading as="h2" size="md">
          Fill In The Form
        </Heading>
        <Image height="100px" width="100px" mt={5} />
        <Text mt={5}>Text value</Text>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Heading as="h2" size="md">
          Receive Our Offer
        </Heading>
        <Image height="100px" width="100px" mt={5} />
        <Text mt={5}>Text value</Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Heading as="h2" size="md">
          Get Your Cash
        </Heading>
        <Image height="100px" width="100px" mt={5} />
        <Text mt={5}>Text value</Text>
      </Box>
    </Box>
    <FormControl
      mt={10}
      width="80%"
      ml="auto"
      mr="auto"
      backgroundColor="#f5f5f5"
    >
      <FormErrorMessage>Error message</FormErrorMessage>
      <Box p={10}>
        <FormLabel>Property Address*</FormLabel>
        <Input backgroundColor="#ffffff" />
        <Box display="flex" justifyContent="space-between" p={0} m={0}>
          <Box width="45%">
            <FormLabel pt={5}>Phone*</FormLabel>
            <Input backgroundColor="#ffffff" />
          </Box>
          <Box width="45%">
            <FormLabel pt={5}>Email*</FormLabel>
            <Input backgroundColor="#ffffff" />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={5}>
          <Button
            variant="solid"
            size="md"
            width="100%"
            backgroundColor="orange.500"
            color="whiteAlpha.900"
          >
            Get My Cash Offer Now!
          </Button>
        </Box>
      </Box>
    </FormControl>
    <Box
      display="flex"
      justifyContent="center"
      backgroundColor="blackAlpha.200"
      ml={-3}
      mr={-3}
      mt={5}
    >
      <Box width="50%" mt={5} mb={5}>
        <Heading ml={5}>
          [MARKET SPECIFIC FEATURE]: Sell Your House For Cash!
        </Heading>
        <Text mt={5} ml={5}>
          Drive this feature point in. This is not some random blurb, or some
          feature you assume relevant. You need to find what resonates with your
          market through data. Once found use what you got to really get your
          traffic excited. Use pictures if you must. If a picture will help get
          the point across, add one. NEVER add a picture just because you can,
          or just to show off, or just to make the site “pretty”. Whatever it
          takes.
        </Text>
      </Box>
    </Box>
    <Heading mt={20} as="h2" textAlign="center">
      [ADD A GOOD CONCLUSION/RECAP TITLE]
    </Heading>
    <Text mt={5} fontStyle="italic" ml={5} mr={5}>
      Here we write a conclusion. Never just end the page randomly. Ideally end
      with a call to action. Tell your traffic what they need to do next. Let
      there be continuation to their browsing session. Be sure you do this in
      the form of a closing statement. Recap what you do why you are a good
      choice and direct them to the next part of the process… the how it works
      page perhaps? Remember this is strategic. We don’t do random, and
      everything you do needs to have a solid reason or motive behind it!
    </Text>
    <Box p={10}>
      <FormLabel>Property Address*</FormLabel>
      <Input backgroundColor="#ffffff" />
      <Box display="flex" justifyContent="space-between" p={0} m={0}>
        <Box width="45%">
          <FormLabel pt={5}>Phone*</FormLabel>
          <Input backgroundColor="#ffffff" />
        </Box>
        <Box width="45%">
          <FormLabel pt={5}>Email*</FormLabel>
          <Input backgroundColor="#ffffff" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mt={5}>
        <Button
          variant="solid"
          size="md"
          width="100%"
          backgroundColor="orange.500"
          color="whiteAlpha.900"
        >
          Get My Cash Offer Now!
        </Button>
      </Box>
    </Box>
  </ChakraProvider>
)

export default App













