import React from "react"
import { View, Text, Image,  TouchableOpacity, TouchableOpacityProps} from "react-native"

import discordImage from '../../assets/discord.png'
import { styles } from "./styles"

type IProps = TouchableOpacityProps & {
    title: string
}

export function Button({ title, ...rest }: IProps) {
    return (
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={discordImage} style={styles.icon}/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}