import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('BarCharts')}>
                <Text style={styles.title}>Bar Charts</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('LineCharts')}>
                <Text style={styles.title}>Line Charts</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('PieCharts')}>

                <Text style={styles.title}>
                    Pie Charts
                </Text>

            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        padding: 20,
        justifyContent: 'center',
    },

    card: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 14,
        marginBottom: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: '700',
    },
});

export default HomeScreen;