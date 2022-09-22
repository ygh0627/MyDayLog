import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import ExceptionDisplay from '../components/ExceptionDisplay';
import LogItemList from '../components/LogItemList';
import {Logcontext} from '../contexts/LogContext';
import {SearchContext} from '../contexts/SearchContext';

function SearchScreen() {
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(Logcontext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(el => el.includes(keyword)),
        );
  if (keyword === '') return <ExceptionDisplay status="NO_KEYWORD" />;
  if (filtered.length === 0) return <ExceptionDisplay status="NO_RESULT" />;
  return (
    <View style={styles.block}>
      <LogItemList logs={filtered} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default SearchScreen;
