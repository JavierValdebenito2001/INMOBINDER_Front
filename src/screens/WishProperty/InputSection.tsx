import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { WishPropertyStyles } from './WishPropertyStyles';

interface InputSectionProps {
  title: string;
  minValue: string;
  maxValue: string;
  onMinValueChange: (value: string) => void;
  onMaxValueChange: (value: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  title,
  minValue,
  maxValue,
  onMinValueChange,
  onMaxValueChange,
}) => {
  return (
    <>
      <Text style={WishPropertyStyles.title}>{title}</Text>
      <View style={WishPropertyStyles.SectionContainer}>
        <View style={WishPropertyStyles.SectionInputContainer}>
          <View style={WishPropertyStyles.SectionInputBox}>
            <TextInput
              style={WishPropertyStyles.SectionInputText}
              placeholder="Min"
              placeholderTextColor="#A9A9A9"
              value={minValue}
              onChangeText={onMinValueChange}
            />
          </View>
          <View style={WishPropertyStyles.SectionInputBox}>
            <TextInput
              style={WishPropertyStyles.SectionInputText}
              placeholder="Max"
              placeholderTextColor="#A9A9A9"
              value={maxValue}
              onChangeText={onMaxValueChange}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default InputSection;