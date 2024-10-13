import { View, Text } from "react-native";

import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>Hi,</Text>
                    <Text style={styles.name}>Lucas</Text>
                </View>
            </View>

            <Text style={styles.message}>Ready for your next victory ?</Text>
        </View>
    )
}