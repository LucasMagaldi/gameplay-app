import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    user: {
        flexDirection: 'row'
    },
    greeting: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 24,
        marginRight: 6
    },
    name: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 24,
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    }
})