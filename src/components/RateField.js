import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from '../I18n';
import {Presets} from '../styles';
import colors from '../styles/colors';

const reateDegrees = [1, 2, 3, 4, 5];

function RateField({onChange, name, value}) {
    const handleRateChange = (number) => onChange(number);

    const renderStar = (item) => (
        <TouchableOpacity key={item} onPress={() => handleRateChange(item)}>
            <Icon
                name={item <= value ? 'star' : 'star-o'}
                color={colors.orange}
                size={30}
                style={{paddingLeft: 2, paddingRight: 2}}
            />
        </TouchableOpacity>
    );

    return (
        <View
            style={[
                Presets.flexRow,
                Presets.justifyBetween,
                Presets.alignCenter,
                Presets.container,
                {paddingTop: 5, paddingBottom: 5}
            ]}>
            <Text style={{fontSize: 16, color: colors.grayLink, width: '25%'}}>
                {I18n.t(name)}
            </Text>
            <View style={[Presets.flexRow, Presets.justifyStart]}>
                {reateDegrees.map((item) => renderStar(item))}
            </View>
        </View>
    );
}

export default RateField;
