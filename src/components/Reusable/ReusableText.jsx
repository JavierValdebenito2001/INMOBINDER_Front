import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ReusableText = ({ text, family, size, color }) => {
  return (
    <Text style={[styles.text, { fontFamily: family, fontSize: size, color }]}>{text}</Text>
  );
};

export default ReusableText

const styles = StyleSheet.create({
  





})