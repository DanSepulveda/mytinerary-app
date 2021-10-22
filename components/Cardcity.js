import { ImageBackground, Text, TouchableOpacity, View } from "react-native"

const Cardcity = () => {
    return (
        <View style={styles.slide} key={index}>
            <TouchableOpacity onPress={() => console.log('hola')}>
                <ImageBackground source={{ uri: `https://mytinerary-dansep.herokuapp.com/${item.src}` }} style={styles.background}>
                    <Text style={styles.title}>{item.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>

    )
}

export default Cardcity