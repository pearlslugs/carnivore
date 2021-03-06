import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import services from "../src/communication/services";

import matter from "gray-matter";

import Image from 'next/image'

import Link from 'next/link'

import {
  Box,
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
  Center
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
  let reusablesInfo = await yaml.safeLoad(fs.readFileSync('src/content/reusables.yml', 'utf8'));
  let yamlContent = await fs.readFileSync("src/content/sell_your_house.yml", "utf8");
  let colors = await fs.readFileSync("src/content/colors.yml", "utf8");
  let reusables = await fs.readFileSync("src/content/reusables.yml", "utf8");
  let personalYaml = await fs.readFileSync("src/content/Personal-Settings.yml", "utf8");
  const colorObject = await yaml.safeLoad(fs.readFileSync('src/content/colors.yml', 'utf8'));
  let altTags = await fs.readFileSync("src/content/sell_your_house_alt_tags.yml", "utf8");
  const heroBackground = reusablesInfo.hero_image
  const phoneNumber = personal.phone_number

  const template = await services.getPage(personal.template, 'sell_your_house')
  .then((data) => {
    return data;
  });

  const filteredYamlContent = yamlContent.split("---").join(' ')
  const filteredColors = colors.split("---").join(' ')
  const filteredReusables = reusables.split("---").join(' ')
  const filteredPersonal = personalYaml.split("---").join(' ')
  const filteredAltTags = altTags.split("---").join(' ')

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
  function LightenDarkenColor(colorCode, amount) {
    var usePound = false;
 
    if (colorCode[0] == "#") {
        colorCode = colorCode.slice(1);
        usePound = true;
    }
 
    var num = parseInt(colorCode, 16);
 
    var r = (num >> 16) + amount;
 
    if (r > 255) {
        r = 255;
    } else if (r < 0) {
        r = 0;
    }
 
    var b = ((num >> 8) & 0x00FF) + amount;
 
    if (b > 255) {
        b = 255;
    } else if (b < 0) {
        b = 0;
    }
 
    var g = (num & 0x0000FF) + amount;
 
    if (g > 255) {
        g = 255;
    } else if (g < 0) {
        g = 0;
    }
 
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
  const darkenedPrimary = LightenDarkenColor(colorObject.primary_color, -30)
  const primaryBrightness = brightnessByColor(colorObject.primary_color)
  const secondaryBrightness = brightnessByColor(colorObject.secondary_color)
  const accentBrightness = brightnessByColor(colorObject.accent_color)
  
  const brightnessObject = {primaryBrightness, secondaryBrightness, accentBrightness}

  const source = `---\n${filteredColors}\n${filteredYamlContent}\n${filteredReusables}\n${filteredPersonal}\n${filteredAltTags}\nhero_background: "url(${heroBackground})"\nprimary_brightness: ${primaryBrightness}\nsecondary_brightness: ${secondaryBrightness}\naccent_brightness: ${accentBrightness}\nclickable_number: "tel:${phoneNumber}"\ndarkened_primary: "${darkenedPrimary}"\n---\n ${template}`;
  console.log(source)
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  });
  return { props: { source: mdxSource, frontMatter: data } };
}
