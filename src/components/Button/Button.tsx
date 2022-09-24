import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Heading1 } from '../Typography/Heading1';
interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Heading1 style={styles.text}>{text}</Heading1>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'violet',
  },
  text: { color: 'black' },
});
