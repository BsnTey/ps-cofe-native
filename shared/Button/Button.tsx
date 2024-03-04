import {Pressable, PressableProps, StyleSheet, Text, View} from "react-native";
import {Colors, Fonts, Radius} from "../tokens";

export const CustomButton = ({text, size = "l", ...props}: PressableProps & {
    text: string,
    size?: "s" | "m" | "l"
}) => {
    return (
        <Pressable {...props} >
            <View style={[
                styles.button,
                size == "s" && styles.buttonS,
                size == "m" && styles.buttonM,
                size == "l" && styles.buttonL]}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>

        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonS: {
        height: 32,
        backgroundColor: Colors.primary,
        borderRadius: Radius.r8,
    },
    buttonM: {
        height: 38,
        backgroundColor: Colors.primary,
        borderRadius: Radius.r12,
    },
    buttonL: {
        height: 62,
        backgroundColor: Colors.primary,
        borderRadius: Radius.r16,
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f18,
    }
})