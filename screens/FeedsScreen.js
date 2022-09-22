import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWhiteButton from '../components/FloatingWhiteButton';
import LogItemList from '../components/LogItemList';
import {Logcontext} from '../contexts/LogContext';

function FeedsScreen() {
  const {logs} = useContext(Logcontext);
  const [hidden, setHidden] = useState(false);
  return (
    <View style={styles.block}>
      <LogItemList logs={logs} setHidden={setHidden} />
      <FloatingWhiteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});
export default FeedsScreen;
