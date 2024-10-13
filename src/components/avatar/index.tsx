import { View, Image } from "react-native";
import { styles } from "./style";

export function Avatar() {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: 'https://github.com/LucasMagaldi.png'}}
                style={styles.avatar}
            />
        </View>
    )
}