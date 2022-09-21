import React from 'react';
import {Platform, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function TransparentCircleButton({hasRightMargin, name, color, onPress}) {
  return (
    <Pressable
      style={[
        hasRightMargin && styles.marginRight,
        ({pressed}) => {
          Platform.OS === 'ios' && pressed && styles.opacity;
        },
      ]}
      android_ripple={{color: '#ededed'}}
      onPress={onPress}>
      <Icon name={name} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  marginRight: {
    marginRight: 8,
  },
  opacity: {
    backgroundColor: '#efefef',
  },
});
export default TransparentCircleButton;
