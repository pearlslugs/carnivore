primary_color: "#DD6B20"
secondary_color: "#307DCF"
accent_color: "#DD6B20"

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


button_text: Get Your Free Offer
hero_image: "/pexels-photo-1144687.jpeg"
logo: "/frogman.png"
facebook_link: facebook
twitter_link: twitter
linkedin_link: ''
youtube_link: youtube
instagram_link: insta
company_name: We Buy Houses Over There


template: Journey
name: ''
email: email@email.com
address: 123 fake street
phone_number: 555-123-1234

hero_background: "url(/pexels-photo-1144687.jpeg)"
primary_brightness: 132.536
secondary_brightness: 111.325
accent_brightness: 132.536
clickable_number: "tel:555-123-1234"

<Box>
   <Box
      bgImage={hero_background}
      m={-3}
      >
      <Box display="flex" justifyContent="space-between">
      <Link href="/"><a><Box _hover={{cursor: "pointer"}} margin="1.5rem" padding="1.5rem"><Image src={logo} height="100px" width="100px" ml={5} mt={5} /></Box></a></Link>
         <List
            display="flex"
            mr={5}
            width="50%"
            justifyContent="space-between"
            alignItems="center"
            >
      <Link href="/how-it-works"><a><Box _hover={{cursor: "pointer", textDecoration: "underline"}} color="white" id="top-link">How It Works</Box></a></Link>
      <Link href="/reviews" ><a><Box _hover={{cursor: "pointer", textDecoration: "underline"}} color="white" id="top-link">Reviews</Box></a></Link>
      <Link href="/how-it-works"><a><Box _hover={{cursor: "pointer", textDecoration: "underline"}} color="white" id="top-link">About Us</Box></a></Link>
      <Link href="/sell-your-house"><a><Box borderRadius="5px" backgroundColor={primary_color} color="white" _hover={{cursor: "pointer", backgroundColor: darkened_primary}} p={3} >Sell Your House</Box></a></Link>
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
         icon={
         <CopyIcon />
         }
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
      <Image alt={fill_out_the_form_alt_tag} src={number_one_image} height="100px" width="100px" mt={5} />
      <Text width="75%" mt={5}>{number_one_content}</Text>
   </Box>
   <Box display="flex" alignItems="center" flexDirection="column">
      <Heading as="h2" size="md">
         {number_two_header}
      </Heading>
      <Image alt={get_your_offer_alt_tag} src={number_two_image} height="100px" width="100px" mt={5} />
      <Text width="75%" mt={5}>{number_two_content}</Text>
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
      <Image alt={get_your_cash_alt_tag} src={number_three_image} height="100px" width="100px" mt={5} />
      <Text width="75%" mt={5}>{number_three_content}</Text>
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
      <Box
         backgroundColor="#696969"
         color="white"
         display="flex"
         flexDirection="row"
         justifyContent="space-around"
         alignItems="space-around"
         m={0}
         p={0}
         width="100vw"
         position="relative" 
         paddingTop="2rem"
         paddingBottom="2rem"
         marginTop="2rem"
         >
         <Box width="26%">
            <Box display="flex">
               <Text ml="1.5rem" fontSize="xl" pb="0.5rem" position="relative" left="1.1rem">
                  Contact
               </Text>
            </Box>
            <Box display="flex">
               <Box width={10} height={10} />
               <Box width="80%" ml="1.5rem" marginBottom="2rem">
                  <Text><a href={clickable_number}>{phone_number}</a></Text>
                  <Text>{address}</Text>
                  <Text>{email}</Text>
               </Box>
            </Box>
         </Box>
         <Box
            width="26%"
            ml={0}
            mr={0}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            >
            <Box ml={0} mr={0} pl={0} pr={0} width="110%" pb="0.5rem">
               <Text
                  fontSize="xl"
                  ml={0}
                  mr={0}
                  pr={0}
                  pl={0}
                  width="100%"
                  >
                  SEO & Website Design Powered By:
               </Text>
            </Box>
            <Box>
               <Text width="80%" fontSize="lg">
                  Seo For Real Estate Investors LLC. Deeloped By Real Estate Investors
                  For Real Estate Investors
               </Text>
               <Image src="/seoforrei.png" width={300} height={220} />
            </Box>
         </Box>
      </Box>
      <Box
         backgroundColor="#585858"
         color="white"
         display="flex"
         flexDirection="row"
         justifyContent="center"
         alignItems="center"
         m={0}
         p={0}
         width="100vw"
         position="relative" 
         paddingTop="1rem"
         paddingBottom="2rem"
         >
         <Box
            paddingTop="1.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="80%"
            >
        {(facebook_link) ? <Link href={facebook_link}><a><Box _hover={{cursor: "pointer"}} padding="1em"><FaFacebookF padding="1em" size="24" /></Box></a></Link> : null}
        {(twitter_link) ? <Link href={facebook_link}><a><Box _hover={{cursor: "pointer"}} padding="1em"><FaTwitter padding="1em" size="24" /></Box></a></Link> : null}
        {(instagram_link) ? <Link href={facebook_link}><a><Box _hover={{cursor: "pointer"}} padding="1em"><FaInstagram padding="1em" size="24" /></Box></a></Link> : null}
        {(linkedin_link) ? <Link href={facebook_link}><a><Box _hover={{cursor: "pointer"}} padding="1em"><FaLinkedin padding="1em" size="24" /></Box></a></Link> : null}
        {(youtube_link) ?<Link href={facebook_link}><a> <Box _hover={{cursor: "pointer"}} padding="1em"><FaYoutube padding="1em" size="24"/></Box></a></Link> : null}
         </Box>
      </Box>