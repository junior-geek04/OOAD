import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

const Navbar = () => {
  return (
    <Flex justifyContent={'space-between'} p={5}>
    <Text>E-Ticketing System</Text>
    <ColorModeSwitcher/>        
    </Flex>
  )
}

export default Navbar