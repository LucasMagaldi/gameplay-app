import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.colors.buttonPrimary,
        alignItems: 'center',
        height: 56,
        width: 286,
        borderRadius: 10,
    },
    iconWrapper: {
        width: 56,
        height: 56, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: 'grey'
    },
    icon: {
        width: 24,
        height: 18
    },
    title: {
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
        color: theme.colors.heading,
    }
})