hero_header: "[KEYWORD DRIVEN]: Sell Your House In City State"
hero_content: As she sat watching the world go by, something caught her eye.
sell_your_house_header: She considered the birds to be her friends.
sell_your_house_content: She'd put out food for them each morning and then she'd watch
  as they came to the feeders to gorge themselves for the day. She wondered what they
  would do if something ever happened to her. Would they miss the meals she provided
  if she failed to put out the food one morning?
number_one_header: Fill In The Form
number_one_image: ''
number_one_content: She'd put out food for them each morning and then she'd watch
  as they came to the feeders to gorge themselves for the day. She wondered what they
  would do if something ever happened to her. Would they miss the meals she provided
  if she failed to put out the food one morning?
number_two_header: Receive Our Offer
number_two_image: ''
number_two_content: She'd put out food for them each morning and then she'd watch
  as they came to the feeders to gorge themselves for the day. She wondered what they
  would do if something ever happened to her. Would they miss the meals she provided
  if she failed to put out the food one morning?
market_specific_feature_header: Market Specific Feature
market_specific_feature_content: She'd put out food for them each morning and then
  she'd watch as they came to the feeders to gorge themselves for the day. She wondered
  what they would do if something ever happened to her. Would they miss the meals
  she provided if she failed to put out the food one morning?
conclusion_header: Conclusion Header And Stuff
conclusion_content: She'd put out food for them each morning and then she'd watch
  as they came to the feeders to gorge themselves for the day. She wondered what they
  would do if something ever happened to her. Would they miss the meals she provided
  if she failed to put out the food one morning?
number_three_header: Get Your Offer
number_three_image: ''
number_three_content: She'd put out food for them each morning and then she'd watch
  as they came to the feeders to gorge themselves for the day. She wondered what they
  would do if something ever happened to her. Would they miss the meals she provided
  if she failed to put out the food one morning?

primary_color: "#DD6B20"
secondary_color: "#307DCF"
accent_color: "#DD6B20"

primary_brightness: 132.536
secondary_brightness: 111.325
accent_brightness: 132.536

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
    <Heading textAlign="center" as="h2" mt={5}>
      {sell_your_house_header}
    </Heading>
    <Box display="flex" justifyContent="center" alignItems="center">
    <Text mt={5} textAlign="center" width="75%">
      {' '}
      {sell_your_house_content}
    </Text>
    </Box>
    <Box display="flex" m={5} justifyContent="space-between" p={20}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading as="h2" size="md">
          {number_one_header}
        </Heading>
        <Image src={number_one_image} height="100px" width="100px" mt={5} />
        <Text mt={5}>{number_one_content}</Text>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Heading as="h2" size="md">
          {number_two_header}
        </Heading>
        <Image src={number_two_image} height="100px" width="100px" mt={5} />
        <Text mt={5}>{number_two_content}</Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Heading as="h2" size="md">
          {number_three_header}
        </Heading>
        <Image src={number_three_image} height="100px" width="100px" mt={5} />
        <Text mt={5}>{number_three_content}</Text>
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
            backgroundColor={primary_color}
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
      backgroundColor={primary_color}
      ml={-3}
      mr={-3}
      mt={5}
      paddingTop="1rem"
      paddingBottom="1rem"
    >
      <Box width="50%" mt={5} mb={5}>
        <Heading ml={5} color={(primary_brightness > 180) ? "black" : "white"} textAlign="center">
          {market_specific_feature_header}
        </Heading>
        <Text mt={5} ml={5} color={(primary_brightness > 180) ? "black" : "white"}>
          {market_specific_feature_content}
        </Text>
      </Box>
    </Box>
    <Heading mt={20} as="h2" textAlign="center">
      {conclusion_header}
    </Heading>
    <Box display="flex" alignItems="center" justifyContent="center">
    <Text mt={5} fontStyle="italic" ml={5} mr={5} width="75%">
      {conclusion_content}
    </Text>
    </Box>
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
          backgroundColor={primary_color}
          color="whiteAlpha.900"
        >
          Get My Cash Offer Now!
        </Button>
      </Box>
    </Box>
