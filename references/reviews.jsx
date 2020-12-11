---
primary_color: "#DD6B20"
secondary_color: "#307DCF"
accent_color: "#DD6B20"
hero_header: '[REVIEW TITLE]: People Love Us And So Will You'
review_text:
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

---
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
    {hero_header}
  </Heading>
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
     {hero_header}
   </Heading>
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
 <Box height="7rem" />
 <Box
       display="flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
     >
       <Heading textAlign="center">Heading title</Heading>
       <Box width="80%">
         <Text>Text value</Text>
       </Box>
     </Box>
 {review_text.map((review, i) =>{
   console.log(review, i);
   return(
     <Box
 backgroundColor={(i % 2 !== 0) ? '' : primary_color} 
 color={(i % 2 !== 0) ? 'black' : 'white'}
 width="100%"
 display="flex"
 flexDirection="column"
 justifyContent="center"
 alignItems="center"
 paddingTop="1.5rem"
 paddingBottom="1.5rem"
 >
 <Center width="80%">
   <Text>{review}</Text>
 </Center>
 <Box width="70%" >
   <Box display="flex" justifyContent="flex-end">
     <Image src={reviewer_images[i]} height="100px" width="100px" />
     <Text display="flex" justifyContent="center" alignItems="center">
       {reviewer_names[i]}
     </Text>
   </Box>
 </Box>
 </Box>
   )},0)}
 
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
 <Box height="7rem" />
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
<Box height="7rem" />

{review_text.map((review, i) =>{
  console.log(review, i);
  return(
    <Box
backgroundColor={(i % 2 !== 0) ? '' : primary_color} 
color={(i % 2 !== 0) ? 'black' : 'white'}
width="100%"
display="flex"
flexDirection="column"
justifyContent="center"
alignItems="center"
paddingTop="1.5rem"
paddingBottom="1.5rem"
>
<Center width="80%">
  <Text>{review}</Text>
</Center>
<Box width="70%" >
  <Box display="flex" justifyContent="flex-end">
    <Image src={reviewer_images[i]} height="100px" width="100px" />
    <Text display="flex" justifyContent="center" alignItems="center">
      {reviewer_names[i]}
    </Text>
  </Box>
</Box>
</Box>
  )},0)}

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