import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?:boolean;
}

export function Profile({showProfileData=true}:ProfileProps){
    return (
        <Flex
        align="center"
        >
            {showProfileData &&(
            <Box mr="4" textAlign="right">
                <Text>Gustavo Viana</Text>
                <Text color="gray.300" fontSize="small">gustavoviana910@gmail.com</Text>
            </Box>
            )}
            <Avatar size="md" name="Gustavo Viana" src="https://github.com/gustavo910.png"/>
        </Flex>
    )
}