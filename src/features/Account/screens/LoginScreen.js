import React, {useState} from 'react'
import {TextInput} from 'react-native-paper'
import { PrimaryButton } from '../../../components/buttons/Buttons'
import styled from 'styled-components/native'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import {Spacer} from '../../../components/spacer/SpacerComponent'
import { Text } from '../../../components/typography/TextComponent'
import { theme } from '../../../infrastructure/theme/lightTheme'

import { LoginAction } from '../../../utils/Account'

const ContentView = styled(View)`
    align-items: center;
    justify-content: center;
    padding-horizontal: ${props => props.theme.space[2]}
`
const BottomView = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-horizontal: ${props => props.theme.space[2]}
`

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (email, password) => {
        LoginAction(email, password)
        .then((userCredentials) => {
            console.log(userCredentials.user)
            navigation.navigate('HomeScreen')
        })
        .catch((err) => {
            console.error(err)
        })
    }

    return (
        <>
            <ContentView>
                <Spacer size="large"/>
                <Spacer size="large"/>
                <Spacer size="large"/>

                <Text variant="h5">Welcome to K-tronik</Text>
                <Spacer size="medium"/>
                <Text variant="title">Login into your account</Text>
                <Spacer size="medium"/>
                <Spacer size="large"/>
                <Spacer size="large"/>
                <TextInput 
                    mode="outlined"
                    placeholder='Enter your email address'
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    keyboardType="email-address"
                    style={{
                        width: 0.9*Dimensions.get('screen').width,
                        backgroundColor: 'transparent' 
                    }}
                    outlineColor={theme.colors.ui.primary}
                />

                <Spacer size="large"/>

                <TextInput
                    mode="outlined"
                    placeholder='Enter your password'
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    secureTextEntry
                    style={{
                        width: 0.9*Dimensions.get('screen').width,
                        backgroundColor: 'transparent'
                    }}
                    outlineColor={theme.colors.ui.primary}
                />
                <Spacer size="large"/>
                <Text style={{color: theme.colors.ui.primary}}>Forgot your password ? </Text>
                <Spacer size="large"/>


                <PrimaryButton
                    title='Login'
                    pressAction={() => login(email, password)}
                />
                <Spacer size="medium"/>

                <BottomView>
                    <Text>Already have an account ? </Text>
                    <TouchableOpacity>
                        <Text style={{color: theme.colors.ui.primary}}>Login </Text>
                    </TouchableOpacity>
                </BottomView>


            </ContentView>
        </>
    )
}
