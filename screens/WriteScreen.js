import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import {Logcontext} from '../contexts/LogContext';

function WriteScreen({route}) {
  const log = route.params?.log;
  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const navigation = useNavigation();
  const {onCreate, onModify, onRemove} = useContext(Logcontext);

  const onSave = () => {
    if (log) {
      onModify({id: log.id, date: log.date, title, body});
    } else onCreate({title, body, date: new Date().toISOString()});
    navigation.pop();
  };

  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        {text: '취소', style: 'cancel'},
        {
          text: '삭제',
          style: 'destructive',
          onPress: () => {
            onRemove(log?.id);
            navigation.pop();
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditting={!!log}
        />
        <WriteEditor
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'white'},
  keyboard: {
    flex: 1,
  },
});
export default WriteScreen;
