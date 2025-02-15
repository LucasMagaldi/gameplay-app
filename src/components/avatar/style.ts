import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const styles = StyleSheet.create({
    container: {
        width: 49,
        height: 49,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 22,
        borderColor: theme.colors.highlight,
        borderWidth: 2
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 8
    },
})