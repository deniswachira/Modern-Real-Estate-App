import Link from "next/dist/client/link";
import {Menu, MenuButton, MenuItem, IconButton, Flex, Box, Spacer, MenuList} from '@chakra-ui/react';
import {FcMenu, FcHome, FcAbout} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import {FiKey} from 'react-icons/fi';

 import React from 'react'
 
const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.200">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingLeft="2">Realtor</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as ={IconButton} icon={<FcMenu />} variant="outlined" color="red.400"/>
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href="/Search" passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href="/Search?purpose=for-sale" passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href="/Search?purpose=for-rent" passHref>
                            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
            </Menu>
        </Box>
    </Flex>
);

 
 export default Navbar
