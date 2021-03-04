import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function Loading({ color, size = null }) {
    
    return (
                    <View
                        style={{
                            paddingLeft: 5,
                            paddingRight: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <ActivityIndicator size={size ? size : 'large'} color={color ? color : '#000'} />
                    </View>
                    
                );
}