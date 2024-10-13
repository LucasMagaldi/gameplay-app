import React from "react"
import { View, Text, Image } from "react-native"

import IllustrationImg from '../../assets/illustration.png'
import { styles } from "./styles"
import { Button } from "../../components/button"
import { useNavigation } from "@react-navigation/native"

export function SignIn() {
    const navigation = useNavigation()
    function handleSignIn() {
        navigation.navigate('home')
    }

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
                    Here {`\n`}
                    you'll find a way to {`\n`}
                    manage your gameplays
                </Text>
                <Text 
                    style={styles.subTitle}
                >   
                    Create teams to play {`\n`}
                    your favarite games with your crew
                </Text>
            </View>

            <Button 
                title="Sign-in with Discord" 
                activeOpacity={0.7}
                onPress={handleSignIn}
                />
        </View>
    )
}