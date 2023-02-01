import styled from 'styled-components/native'
import { View, Dimensions } from 'react-native'

export const PrimaryButtonView = styled(View)`
    width: ${0.9*Dimensions.get('screen').width}px;
    background-color: ${props => props.theme.colors.ui.primary};
    padding-vertical: ${props => props.theme.space[2]};
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.space[2]};
`