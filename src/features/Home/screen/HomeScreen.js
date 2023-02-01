import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/SpacerComponent'
import { Text } from '../../../components/typography/TextComponent'

const ContentView = styled(View)`
    align-items: center;
    justify-content: center;
    padding-horizontal: ${props => props.theme.space[3]}
`

export const HomeScreen = () => {
    return (
        <>
            <ContentView>
                <Spacer size="large"/>
                <Spacer size="large"/>
                <Text variant="h5" style={{textAlign: 'center'}}>At K-tronik, we change the world, one line of code at a time</Text>
                <Spacer size="large"/>

                <Text variant="h5" style={{textAlign: 'center'}}>🚀😮🚀😮🚀</Text>
            </ContentView>
        </>
    )
}
