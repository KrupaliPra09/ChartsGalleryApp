import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ChartSection = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 30,
    padding: 16,
    borderRadius: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
});

export default ChartSection;