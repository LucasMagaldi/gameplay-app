import React from "react"
import { View, Text, Image,  TouchableOpacity} from "react-native"

import discordImage from '../../assets/discord.png'
import { styles } from "./styles"

export function Button() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={discordImage} style={styles.icon}/>
            </View>
            <Text style={styles.title}>
                Sign-in with Discord
            </Text>
        </TouchableOpacity>
    )
}