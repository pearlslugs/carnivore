import React from 'react'
import {
  ChakraProvider,
  Box,
  Image,
  List,
  Link,
  Heading,
  Text,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  FormControl,
  IconButton
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
          How To Sell Your House
        </Heading>
        <Text textAlign="center" mt={5} color="whiteAlpha.900">
          We Buy Houses In Any Condition!
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
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box width="80%">
    <Heading textAlign="center" as="h2" mt={5}>
      Sell Your House In Three Easy Steps
    </Heading>
    <Text textAlign="center" mt={5}>
      {' '}
      Explain in a short brief paragraph how these three steps will get them out
      of their frustrating situation FAST. Explain how these steps benefit the
      client.
    </Text>
    </Box>
    </Box>
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
    <Box
      display="flex"
      justifyContent="space-between"
      backgroundColor="blackAlpha.200"
      ml={-3}
      mr={-3}
    >
      <Box width="50%" mt={5} mb={5}>
        <Heading ml={5}>
          [TELL YOUR TRAFFIC ABOUT THE OFFER THEY WILL GET]: We Always Make Fair
          Cash Offers!
        </Heading>
        <Text mt={5} ml={5}>
          [BUILD TRUST]: Explain in more detail about cash offers or your fair
          offer.2
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" width="45%" mt={5} mb={5}>
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
      </Box>
    </Box>
    <Heading mt={10} textAlign="center">
      Here is How We Calculate Your Cash Offer
    </Heading>
    <Box backgroundColor="blackAlpha.400" mt={5} p={14} ml={10} mr={10}>
      <Text
        color="whiteAlpha.900"
        fontWeight="bold"
        textAlign="center"
        fontSize="30px"
      >
        Our Offer = After Repair Value – Cost Of Repairs – Selling Cost –
        Minimum Profit
      </Text>
    </Box>
    <Box display="flex" alignItems="flex-start" justifyContent="space-around">
      <Box width="35%">
        <Text mt={10} ml={5} mr={5}>
          ARV (After Repair Value) – This is the price after we buy it from you,
          we fix it up, and sell it on the market. This price is based off of
          recent sold homes within your neighborhood that were renovated.
        </Text>
      </Box>
      <Box width="35%">
        <Text mt={10} ml={5} mr={5}>
          Cost of Repairs (After Repair Value) – This is the price after we buy
          it from you, we fix it up, and sell it on the market. This price is
          based off of recent sold homes within your neighborhood that were
          renovated.
        </Text>
      </Box>
    </Box>
    <Box display="flex" alignItems="flex-start" justifyContent="space-around">
      <Box width="35%">
        <Text mt={10} ml={5} mr={5}>
          Selling Cost (After Repair Value) – This is the price after we buy it
          from you, we fix it up, and sell it on the market. This price is based
          off of recent sold homes within your neighborhood that were renovated.
        </Text>
      </Box>
      <Box width="35%">
        <Text mt={10} ml={5} mr={5}>
          Minimum Profit (After Repair Value) – This is the price after we buy
          it from you, we fix it up, and sell it on the market. This price is
          based off of recent sold homes within your neighborhood that were
          renovated.
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
  </ChakraProvider>
)

export default App