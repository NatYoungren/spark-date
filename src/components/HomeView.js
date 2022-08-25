import { Box, Center, Heading, View } from "native-base";
import React from "react";

export const HomeView = () => {

    return (
        <View>
            <Center bg="primary.100">
            <Heading>Spark up your shit</Heading>
                wtf is this
                <Box p="2" bg="primary.500" _text={{
                fontSize: 'md',
                fontWeight: 'medium',
                color: 'warmGray.50',
                letterSpacing: 'lg'
                }}>
                    a box
                </Box>
            </Center>
        </View>
    );
};