import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import LogItem from './LogItem';

function LogItemList({logs, setHidden}) {
  const onScroll = e => {
    if (setHidden === undefined) {
      return;
    }
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    if (
      contentSize.height > layoutMeasurement.height &&
      distanceFromBottom < 72
    ) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };
  return (
    <FlatList
      data={logs}
      renderItem={({item}) => <LogItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
    />
  );
}

const styles = StyleSheet.create({
  separator: {height: 1, width: '100%', backgroundColor: '#e0e0e0'},
});
export default LogItemList;
