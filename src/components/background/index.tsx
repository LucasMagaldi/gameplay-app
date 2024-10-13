import { ReactNode } from "react"
import { View } from "react-native"
import { styles } from "./styles"

interface IProps {
    children: ReactNode
}

export function Background({ children }: IProps) {
    return (
        <View style={styles.container}>
            { children }
        </View>
    )
}