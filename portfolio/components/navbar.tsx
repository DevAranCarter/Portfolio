import React from "react";
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  HStack,
  Text,
  Link,
  Avatar,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex bg='#f4ede4' align="center" justify={"space-between"}>
      <Flex direction={'row'} textColor={"blackAlpha.900"}> 
      <Text pt='8px'>
        Devin Carter
      </Text>
      </Flex>
      <Box display={{ base: "flex", md: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Dropdown menu"
            icon={<HamburgerIcon />}
          ></MenuButton>
          <MenuList>
            <MenuItem>
              <Link as={NextLink} href="/#about" >
                About Me
              </Link>
            </MenuItem>
            <MenuItem>
              <Link as={NextLink} href="/#work">
                Work
              </Link>
            </MenuItem>
            <MenuItem>
              <Link as={NextLink} href="/#contact">
                Contact
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <HStack
        spacing={{ md: "120px", lg: "180px", xl: "240px" }}
        justify={"space-between"}
        display={{ base: "none", md: "flex" }}
        pr={{md: "100px", lg:"220px"}}
        textColor={"blackAlpha.900"}
      >
        <Link as={NextLink} href="/#about">
          <Button
            _hover={{ bg: "white" }}
            variant="ghost"
            as="a"
            cursor="pointer"
            fontSize="20px"
            textColor={"blackAlpha.900"}
          >
            About Me
          </Button>
        </Link>
        <Link as={NextLink} href="/#work">
          <Button
            _hover={{ bg: "white" }}
            variant="ghost"
            as="a"
            cursor="pointer"
            fontSize="20px"
            textColor={"blackAlpha.900"}
          >
            Work
          </Button>
        </Link>
        <Link as={NextLink} href="/#contact">
          <Button
            _hover={{ bg: "white" }}
            variant="ghost"
            as="a"
            cursor="pointer"
            fontSize="20px"
            textColor={"blackAlpha.900"}
          >
            Contact
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
