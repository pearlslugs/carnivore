import {
    Box,
    Image,
    List,
    Link,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Button,
    Divider,
    ListItem,
    IconButton
  } from '@chakra-ui/react'
  import { CopyIcon } from '@chakra-ui/icons'
  import pageContent from '../content/content.json'

const TemplateOne = () => {
    return (
        <div>
      <Box padding-right="15px" padding-left="15px" margin-right="auto" margin-left="auto"  width="90vw" position="relative" right="75vw" left="5vw"> 
      <Box
        width="100" position="relative" left="0" padding="0" margin="0" 
        bgImage='url("https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?cs'
        m={-3}
        display="flex"
        flex-direction="column"
      >
        <Box display="flex" flex-dirction="column" justifyContent="space-between">
          <Image height="100px" width="100px" ml={5} mt={5} />
          <List
            margin-left="-2em!important"
            display="flex"
            mr={5}
            width="50%"
            justifyContent="space-between"
            alignItems="center"
            padding="0!important"
            margin-right="0!important"
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
        <Heading textAlign="center" mt={20} color="whiteAlpha.900">
          {pageContent.main_site_heading}
        </Heading>
        <Text textAlign="center" mt={5} color="whiteAlpha.900">
          {pageContent.main_site_subheading}
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
      <Heading mt={10} textAlign="center" as="h2">
        {pageContent.main_site_heading}
      </Heading>
      <Text mt={5} textAlign="center">
        {pageContent.Sell_Your_House_In_Area}
      </Text>
      <FormControl
        mt={5}
        width="50%"
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
              {pageContent.button_text}
            </Button>
          </Box>
        </Box>
      </FormControl>
      <Divider borderColor="blackAlpha.500" mt={10} />
      <Heading pt={10} textAlign="center" as="h2">
        {pageContent.explain_the_process}
      </Heading>
      <Text mt={5}>
      {pageContent.explain_the_process_content}
      </Text>
      <Box mt={5} display="flex" justifyContent="space-between">
        <Box
          width="30%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" as="h3" textAlign="center">
          {pageContent.learn_how_it_works}
          </Heading>
          <Image height="100px" width="100px" mt={5} />
          <Text mt={5}>
          {pageContent.learn_how_it_works_content}
          </Text>
        </Box>
        <Box
          width="30%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" as="h3" textAlign="center">
          {pageContent.learn_about_us}
          </Heading>
          <Image height="100px" width="100px" mt={5} />
          <Text mt={5}>
          {pageContent.learn_about_us_content}
          </Text>
        </Box>
        <Box
          width="30%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" as="h3" textAlign="center">
          {pageContent.learn_how_to_sell_your_house}
          </Heading>
          <Image height="100px" width="100px" mt={5} />
          <Text mt={5}>
          {pageContent.learn_how_to_sell_your_house_content}
          </Text>
        </Box>
      </Box>
      <Divider borderColor="blackAlpha.500" mt={10} />
      <Box mt={10}>
        <Box
          display="flex"
          justifyContent="space-between"
          backgroundColor="blackAlpha.100"
          ml={-3}
          mr={-3}
        >
          <Image height="100px" width="100px" m={5} />
          <Box width="60%" mb={5} mt={5} mr={5}>
            <Heading as="h2">{pageContent.sell_your_house_the_easy_way_header}</Heading>
            <Text mt={5}>
            {pageContent.sell_your_house_the_easy_way_content}
            </Text>
            <Text mt={5} fontWeight="bold">
            {pageContent.sell_your_house_the_easy_way_intro_content}
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
                    {pageContent.button_text}
                  </Button>
                </Box>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Divider borderColor="blackAlpha.500" mt={10} />
      <Box>
        <Heading mt={10} textAlign="center" as="h2">
        {pageContent.list_section_header}
        </Heading>
        <Text mt={5} textAlign="center">
        {pageContent.list_section_content}
        </Text>
        <Box
          mt={5}
          display="flex"
          justifyContent="space-between"
          width="60%"
          ml="auto"
          mr="auto"
        >
          <Box width="30%">
            <List>
              {pageContent.left_side_of_list.map(item => {
                return(
                  <ListItem m={5}>{item}</ListItem>
                )
              })}
            </List>
          </Box>
          <Box width="30%">
            <List>
            {pageContent.right_side_of_list.map(item => {
                return(
                  <ListItem m={5}>{item}</ListItem>
                )
              })}
            </List>
          </Box>
        </Box>
      </Box>
      <Divider borderColor="blackAlpha.500" mt={10} />
      <Box
        mt={10}
        display="flex"
        justifyContent="space-between"
        minWidth="300px"
        minHeight="600px"
        bgImage='url("https://i1.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/04/old-house.jpg?w'
        bgSize="cover"
        bgRepeat="no-repeat"
        ml={-3}
        mr={-3}
      >
        <Box width="30%" opacity={1} m={20} bgColor="rgba(0,0,0,0.6)">
          <Box p={10}>
            <Heading opacity={1} color="whiteAlpha.900" as="h2">
              {pageContent.any_condition_section}
            </Heading>
            <Text color="whiteAlpha.900" mt={5}>
            {pageContent.any_condition_content}
            </Text>
          </Box>
        </Box>
        <Box width="30%" opacity={1} m={20} bgColor="rgba(0,0,0,0.6)">
          <Box p={10}>
            <Heading opacity={1} color="whiteAlpha.900" as="h2">
            {pageContent.any_situation_header}
            </Heading>
            <Text color="whiteAlpha.900" mt={5}>
            {pageContent.any_situation_content}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        display="block"
        justifyContent="space-between"
        backgroundColor="blackAlpha.100"
        ml={-3}
        mr={-3}
        p={10}
      >
        <Heading mt={5} textAlign="center" as="h2">
          {pageContent.people_love_us_header}
        </Heading>
        <Box mt={5} display="flex" justifyContent="space-between" m={20}>
          <Box
            width="33.3%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Image height="100px" width="100px" mt={5} />
            <Text mt={5} fontWeight="bold" fontStyle="italic">
            {pageContent.featured_testimonial_1}
            </Text>
            <Text
              mt={5}
              textAlign="right"
              display="flex"
              justifyContent="flex-end"
            >
              {pageContent.featured_testimonial_1_name}
            </Text>
          </Box>
          <Box
            width="33.3%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Image height="100px" width="100px" mt={5} />
            <Text mt={5} fontWeight="bold" fontStyle="italic">
            {pageContent.featured_testimonial_2}
            </Text>
            <Text
              mt={5}
              textAlign="right"
              display="flex"
              justifyContent="flex-end"
            >
              {pageContent.featured_testimonial_2_name}
            </Text>
          </Box>
          <Box
            width="33.3%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Image height="100px" width="100px" mt={5} />
            <Text mt={5} fontWeight="bold" fontStyle="italic">
            {pageContent.featured_testimonial_3}
            </Text>
            <Text
              mt={5}
              textAlign="right"
              display="flex"
              justifyContent="flex-end"
            >
              {pageContent.featured_testimonial_3_name}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
        <Heading mt={10} textAlign="center" as="h2">
        {pageContent.benefit_you_offer_header}
        </Heading>
        <Text mt={5} textAlign="center">
        {pageContent.benefit_you_offer_content}
        </Text>
        <Box
          mt={5}
          display="flex"
          justifyContent="space-between"
          width="60%"
          ml="auto"
          mr="auto"
        >
          <Box width="30%">
            <List>
            {pageContent.benefits_list_left_side.map(item => {
                return(
                  <ListItem m={5}>{item}</ListItem>
                )
              })}
            </List>
          </Box>
          <Box width="30%">
            <List>
            {pageContent.benefits_list_right_side.map(item => {
                return(
                  <ListItem m={5}>{item}</ListItem>
                )
              })}
            </List>
          </Box>
        </Box>
      </Box>
      <Heading mt={5} as="h2" textAlign="center">
        {pageContent.conclusion_header}
      </Heading>
      <Text mt={5} fontStyle="italic">
      {pageContent.conclusion_content}
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
              {pageContent.button_text}
            </Button>
          </Box>
        </Box>
      </FormControl>
      </Box>
    </div>
)
}

export default TemplateOne