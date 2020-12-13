import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import services from "../src/communication/services";

import matter from "gray-matter";

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
  Center
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const components = {
  Box,
  Image,
  Link,
  List,
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
  CopyIcon,
  Center
};

export default function HomePage({ source }) {
  const content = hydrate(source, { components });

  return <div className="wrapper">{content}</div>;
}

export async function getStaticProps() {
  const fs = require("fs");
  const yaml = require('js-yaml')

  let personal = await yaml.safeLoad(fs.readFileSync('src/content/Personal-Settings.yml', 'utf8'));
  let yamlContent = await fs.readFileSync("src/content/about_us_content.yml", "utf8");
  let colors = await fs.readFileSync("src/content/colors.yml", "utf8");

  const template = await services.getPage(personal.template, 'sell_your_house')
  .then((data) => {
    return data;
  });
  const filteredYamlContent = yamlContent.split("---").join(' ')
  const filteredColors = colors.split("---").join(' ')
 
  const source = `---\n${filteredColors}\n${filteredYamlContent}\n--- ${template}`;
  console.log(source)
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  });
  return { props: { source: mdxSource, frontMatter: data } };
}
