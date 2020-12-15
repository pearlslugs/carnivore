import { Heading } from "@chakra-ui/react"

primary_color: "#DD6B20"
secondary_color: "#307DCF"
accent_color: "#DD6B20"

hero_header: "[KEYWORD DRIVEN]: Legitimate Home Buyers In Location"
hero_content: No realtors, No fees, No commissions & No repairs!
introduce_company_header: "[SHOW YOU ARE REAL HONEST PEOPLE]: We Are Company or Names"
introduce_company_content: "[TALK ABOUT YOURSELF]: This is where you tell your story
  and tell your traffic about yourself. Talk about your “Why” and how you started
  this business. Use images to back up your story. For example, if you talk
  about your family then also include a photo with you and your family."
connect_with_traffic_banner: "[WAY TO CONNECT WITH TRAFFIC]: Explain in a brief paragraph
  more about yourself regarding something specific to you. Talk about one
  of your hobbies unrelated to real estate. Do you love to travel, are you
  an avid runner, do you love sushi, or do you enjoy playing with your dog?
  Something like this is a perfect way to connect with your traffic on
  a more personal level and will build trust. Use images to back this up!"
values_header: Our Values
values_content: "[COMPANY VALUES ETC]: Explain in a brief paragraph more about your
  company. This could be in the form of your company values/standards or your
  company’s mission. Include info on how your company is reputable (licensed
  business, BBB accredited, etc)."
conclusion_header: "[ADD A GOOD CONCLUSION/RECAP TITLE]"
conclusion_content: Here we write a conclusion. Never just end the page randomly.
  Ideally end with a call to action. Tell your traffic what they need to do
  next. Let there be continuation to their browsing session. Be sure you do
  this in the form of a closing statement. Recap what you do why you are a good choice
  and direct them to the next part of the process… the how it works page perhaps?
  Remember this is strategic. We don’t do random, and everything you do needs
  to have a solid reason or motive behind it!

primary_brightness: 132.536
secondary_brightness: 111.325
accent_brightness: 132.536
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
              backgroundColor={primary_color}
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
          {hero_header}
        </Heading>
        <Text textAlign="center" mt={5} color="whiteAlpha.900">
          {hero_content}
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
    <Heading textAlign="center" as="h2" mt={5} paddingTop="1rem">
      {introduce_company_header}
    </Heading>
    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" paddingTop="1rem">
    <Box width="50%" flexDirection="row" justifyContent="center" alignItems="center">
    <Image padding="auto" margin="auto" height="100px" width="100px" mt={5} justifySelf="center" />
    </Box>
    <Text width="38%" mt={5} ml={5} mr={5}>
      {introduce_company_content}
    </Text>
    </Box>
    <FormControl
      mt={10}
      width="60%"
      ml="auto"
      mr="auto"
      backgroundColor="#f5f5f5"
    >
      <FormErrorMessage>Error message</FormErrorMessage>
    </FormControl>
    <Box
      display="flex"
      justifyContent="center"
      backgroundColor={primary_color}
      ml={-3}
      mr={-3}
      mt={5}
      paddingBottom="1rem"
    >
      <Box width="50%" mt={5} mb={5}>
        <Heading textAlign="center" as="h2" mt={5} color={(primary_brightness > 180) ? "black" : "white"}>
          Header
        </Heading>
        <Text mt={5} ml={5} color={(primary_brightness > 180) ? "black" : "white"}>
          {connect_with_traffic_banner}
        </Text>
      </Box>
    </Box>
    <Heading mt={5} ml={5} mr={5} textAlign="center">
      {values_header}
    </Heading>
    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
    <Text mt={5} ml={5} mr={5} width="75%">
      {values_content}
    </Text>
    </Box>
    <Heading mt={20} as="h2" textAlign="center">
      {conclusion_header}
    </Heading>
    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
    <Text mt={5} fontStyle="italic" ml={5} mr={5} width="75%">
      {conclusion_content}
    </Text>
    </Box>
    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
    <Box p={10} width="75%">
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
          backgroundColor={primary_color}
          color="whiteAlpha.900"
        >
          Get My Cash Offer Now!
        </Button>
      </Box>
    </Box>
    </Box>
  </ChakraProvider>
)

export default App