import React from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Zara from "./Zara";
import Dbody from "./Dbody";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [placement, setPlacement] = React.useState("left");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex bgColor="transparent" pos="fixed" top={0} w="100%" zIndex={2}>
      <Flex p="2" gap={24}>
        {/* drawer  */}
        <Box style={{ cursor: "pointer" }} p={2}>
          <Button onClick={() => onOpen()} m={1} bg="transparent">
            <HamburgerIcon />
          </Button>

          <Drawer
            placement={placement}
            onClose={onClose}
            isOpen={isOpen}
            size="sm"
          >
            <DrawerOverlay />

            <DrawerContent>
              <DrawerCloseButton />

              <DrawerHeader ml={12}>
                <Zara />
              </DrawerHeader>

              <DrawerBody>
                <Dbody />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>

        {/* icon  */}

        <Zara />
      </Flex>
      <Spacer />
      <Flex p="4" gap={4}>
        <Box borderBottom="1px" borderColor="black" mb="42px" pr={5}>
          <Text style={{ cursor: "pointer" }} fontSize="lg" fontWeight={500}>
            Search
          </Text>
        </Box>
        <Box>
          <Text style={{ cursor: "pointer" }} fontSize="md" fontWeight={250}>
            <Link to="/login"> Rohit singh</Link>
          </Text>
        </Box>
        <Box>
          <Text style={{ cursor: "pointer" }} fontSize="md" fontWeight={250}>
            Help
          </Text>
        </Box>
        <Box style={{ cursor: "pointer" }}>
          <svg
            width="1.5rem"
            className="layout-header-links__cart-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 5.001V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.001h5v7h-1v-6H5v13.9h10v1H4V5h5zM10 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.001h-4V4z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.8 23.4v-9h-5.4v9l2.695-2.827L22.8 23.4zm-4.6-1.998l1.894-1.987L22 21.407V15.2h-3.8v6.202z"
            ></path>
          </svg>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;