import React from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWhiteButton from '../components/FloatingWhiteButton';

function FeedsScreen() {
  return (
    <View style={styles.block}>
      <FloatingWhiteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});
export default FeedsScreen;
