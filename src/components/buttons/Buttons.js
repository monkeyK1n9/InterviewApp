import React from 'react';
import { TouchableOpacity } from 'react-native';
import { PrimaryButtonView } from './ButtonsStyle';
import {Text} from '../typography/TextComponent'

export const PrimaryButton = ({pressAction, title}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={pressAction}
        >
            <PrimaryButtonView>
                <Text variant="titleBoldWhite">{title}</Text>
            </PrimaryButtonView>
        </TouchableOpacity>
    )
}