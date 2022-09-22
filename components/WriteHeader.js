import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import TransparentCircleButton from './TransparentCircleButton';

function WriteHeader({onSave, onAskRemove, isEditting}) {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <TransparentCircleButton
          name="arrow-back"
          color="#424242"
          onPress={goBack}
        />
      </View>
      <View style={styles.rightWrapper}>
        {isEditting && (
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasRightMargin
            onPress={onAskRemove}
          />
        )}
        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  rightWrapper: {
    flexDirection: 'row',
  },
});

export default WriteHeader;

//arrow-back, delete-forever, check
