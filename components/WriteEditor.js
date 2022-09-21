import React, {useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
function WriteEditor({title, setTitle, body, setBody}) {
  const bodyRef = useRef();
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.titleInput}
        placeholder="제목을 입력해주세요."
        returnKeyType="next"
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.bodyInput}
        placeholder="할 일을 입력해주세요."
        multiline
        textAlignVertical="top"
        ref={bodyRef}
        value={body}
        onChangeText={setBody}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    fontWeight: 'bold',
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
  },
  bodyInput: {
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
    flex: 1,
  },
});

export default WriteEditor;
