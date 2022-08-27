import { Box, Button, Center, Heading, Text, VStack } from "native-base";
import React from "react";

export const WelcomeView = () => {

    return (
        <Center padding={5}>
            <VStack space={4} alignItems="center">
            <Box margin={4} w="md" bg="amber.400" rounded="md" shadow={3} padding={4}>
                <Heading size="xl" mb="4">Spark</Heading>
                <Text>Electrify your relationship(s) (...or something, idk some chatch phrase goes here)</Text>
            </Box>

            <Box w="md" bg="amber.200" rounded="md" shadow={3} padding={4}>
            <Heading size="md">How does it work?</Heading>
                <Text> 1. Enter your interests</Text>
                <Text> 2. Add your friend's interests</Text>
                <Text> 3. Get recommendations for fun events, dates, activies, and more that you both enjoy!</Text>
                <Text>text is placeholder lol</Text>
            </Box>

            <Box w="md" bg="amber.200" rounded="md" shadow={3} padding={4}>
                <Text>this is ugly</Text>
            </Box>

            <Button size="lg" colorScheme="amber" onPress={() => console.log("do something")}>Get Started</Button>

            </VStack>
        </Center>
    );
};