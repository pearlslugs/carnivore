---
primary_color: "#DD6B20"
secondary_color: "#307DCF"
accent_color: "#DD6B20"
hero_header: '[REVIEW TITLE]: People Love Us And So Will You'
page_intro_header: 'We Care About Our Customers'
page_intro_content: 'Yeah, totally... laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non'
- '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum."'
- '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum."'
- '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum."'
reviewer_name: ''
reviewer_images:
- "..//public/f06d217b6e506b307752568e0df2a88d-2.png"
- "..//public/f06d217b6e506b307752568e0df2a88d-1.png"
- "..//public/f06d217b6e506b307752568e0df2a88d.png"
conclusion_header: ''
conclusion_content: ''
reviewer_names:
- '3'
- '2'
- '1'
primary_brightness: 132.536
secondary_brightness: 111.325
accent_brightness: 132.536
---
<Box>
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
              <Link href="/how-it-works" ><a><Box fontSize="xl" _hover={{cursor: "pointer", textDecoration: "underline"}} color="white" id="top-link">How It Works</Box></a></Link>
              <Text fontSize="xl" color="white" id="top-link">Reviews</Text>
              <Link href="/about-us"><a><Box fontSize="xl" _hover={{cursor: "pointer", textDecoration: "underline"}} color="white" id="top-link">About Us</Box></a></Link>
              <Link href="/sell-your-house"><a><Box fontSize="xl" borderRadius="5px" backgroundColor={primary_color} color="white" _hover={{cursor: "pointer", backgroundColor: darkened_primary}} p={3} >Sell Your House</Box></a></Link>
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
<Box height="7rem" />
<Box
display="flex"
flexDirection="column"
justifyContent="center"
alignItems="center"
>
<Heading textAlign="center">{page_intro_header}</Heading>
<Box width="80%">
   <Text>{page_intro_content}</Text>
</Box>
</Box>
<Box height="7rem" />
<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
{review_text.map((review, i) =>{
console.log(review, i);
return(
<Box
backgroundColor={(i % 2 !== 0) ? '' : primary_color} 
color={(i % 2 !== 0) ? 'black' : (primary_brightness > 180) ? "black" : "white"}
width="75%"
display="flex"
flexDirection="column"
justifyContent="center"
alignItems="center"
paddingTop="1.5rem"
paddingBottom="1.5rem"
marginTop="1rem"
marginBottom="1rem"
>
<Center width="80%">
<Text fontSize="xl">{review}</Text>
</Center>
<Box width="70%" >
<Box display="flex" justifyContent="flex-end" float="right" >
  <div className="rounded-image" position="relative" height="75px" width="75px" borderRadius="50%">
   <Image className="rounded-image" borderRadius='50%' src={reviewer_images[i]} width={75} height={75} />
   </div>
   <Text fontSize="xl" marginRight="2rem" marginLeft="2rem" display="flex" justifyContent="center" alignItems="center">
      {reviewer_names[i]}
   </Text>
</Box>
</Box>
</Box>
)},0)}
</Box>
<Heading mt={20} as="h2" textAlign="center">
{conclusion_header}
</Heading>
<Text mt={5} fontStyle="italic" ml={5} mr={5}>
{conclusion_content}
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
</Box>