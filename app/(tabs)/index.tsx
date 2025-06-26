import React from 'react';
import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
const AboutMe = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <Image source={require('../../assets/images/Me.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Hi, I'm Daniel Garcia</Text>
        <Text style={[styles.description, { color: isDark ? '#ccc' : '#333' }]}>
Daniel Garcia is a 15-year-old in the program Urban TXT. A role that he wants to be for this SCLA is a project manager. One of his dream careers is to become a mechanical engineer. 
        </Text>
      </View>
    </View>
  );
};
export default AboutMe;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});