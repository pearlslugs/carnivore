import React from "react";
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
  IconButton,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import services from "../src/communication/services";


const HomePage = ({ template }) => {
  const testDb = (id) => {
    console.log("test");
    services.getTemplates(id).then((res) => console.log(res, "res"));
  };
  const pageContent = content;
  const templateNum = pageContent.Template_Number;
  console.log(templateNum);
  if (templateNum == 1) {
    console.log("good");

    return (
      <div>

        <button onClick={() => testDb(1)}>Test</button>
      </div>
    );
  } else {
    console.log("something");
    return null;
  }
};

export default HomePage;
