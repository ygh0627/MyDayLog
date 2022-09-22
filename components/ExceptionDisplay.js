import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function NoKeyword() {
  return (
    <View style={styles.block}>
      <Text>검색어를 입력해주세요.</Text>
    </View>
  );
}
function NoResult() {
  return (
    <View style={styles.block}>
      <Text>검색 결과가 없습니다.</Text>
    </View>
  );
}

function ExceptionDisplay({status}) {
  if (status === 'NO_RESULT') return <NoResult />;
  else if (status === 'NO_KEYWORD') return <NoKeyword />;
}

const styles = StyleSheet.create({
  block: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export default ExceptionDisplay;
