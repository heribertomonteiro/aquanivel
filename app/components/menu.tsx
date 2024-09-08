import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Menu() {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity><Image source={require('../assets/images/home.png')}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../assets/images/reports.png')}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../assets/images/user.png')}/></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    menu: {
        backgroundColor: '#0057AA',
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})