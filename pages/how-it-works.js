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
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa"
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
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube
};

export default function HomePage({ source }) {
  const content = hydrate(source, { components });

  return <div className="wrapper">{content}</div>;
}

export async function getStaticProps() {
  const fs = require("fs");
  const yaml = require('js-yaml')

  let personal = await yaml.safeLoad(fs.readFileSync('src/content/Personal-Settings.yml', 'utf8'));
  let yamlContent = await fs.readFileSync("src/content/how_it_works_content.yml", "utf8");
  let colors = await fs.readFileSync("src/content/colors.yml", "utf8");
  const colorObject = await yaml.safeLoad(fs.readFileSync('src/content/colors.yml', 'utf8'));

  const template = await services.getPage(personal.template, 'how_it_works')
  .then((data) => {
    return data;
  });
  const filteredYamlContent = yamlContent.split("---").join(' ')
  const filteredColors = colors.split("---").join(' ')
  function brightnessByColor (color) {
    var color = "" + color, isHEX = color.indexOf("#") == 0, isRGB = color.indexOf("rgb") == 0;
    if (isHEX) {
      var m = color.substr(1).match(color.length == 7 ? /(\S{2})/g : /(\S{1})/g);
      if (m) var r = parseInt(m[0], 16), g = parseInt(m[1], 16), b = parseInt(m[2], 16);
    }
    if (isRGB) {
      var m = color.match(/(\d+){3}/g);
      if (m) var r = m[0], g = m[1], b = m[2];
    }
    if (typeof r != "undefined") return ((r*299)+(g*587)+(b*114))/1000;
  }
  const primaryBrightness = brightnessByColor(colorObject.primary_color)
  const secondaryBrightness = brightnessByColor(colorObject.secondary_color)
  const accentBrightness = brightnessByColor(colorObject.accent_color)
  
  const brightnessObject = {primaryBrightness, secondaryBrightness, accentBrightness}
  const source = `---\n${filteredYamlContent}\n${filteredColors}\nprimary_brightness: ${primaryBrightness}\nsecondary_brightness: ${secondaryBrightness}\naccent_brightness: ${accentBrightness}\n--- ${template}`;
  console.log(source)
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  });
  return { props: { source: mdxSource, frontMatter: data } };
}
