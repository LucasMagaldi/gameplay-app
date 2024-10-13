import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        marginTop: -40,
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: theme.colors.heading,
        marginBottom: 16,
    },
    subTitle: {
        fontSize: 15,
        textAlign: 'center',
        color: theme.colors.heading,
        marginBottom: 64,
    }
})