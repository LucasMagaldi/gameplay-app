import React from "react"
import { View, Text, Image } from "react-native"

import IllustrationImg from '../../assets/illustration.png'
import { styles } from "./styles"

export function SignIn() {
    return (
        <View style={styles.container}>
            <Image 
                source={IllustrationImg} 
                style={styles.image}
            />

            <View style={styles.content}>
                <Text 
                    style={styles.title}
                >   
                    Here you'll find a way to {`\n`}
                    manage your gameplays
                </Text>
                <Text 
                    style={styles.subTitle}
                >   
                    Create teams to play {`\n`}
                    your favarite games with your crew
                </Text>
            </View>
        </View>
    )
}