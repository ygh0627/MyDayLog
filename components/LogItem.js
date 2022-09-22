import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

function formatDate(date) {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, {addSuffix: true, locale: ko});
  }
  return format(d, 'PPP EEE p', {locale: ko});
}

function LogItem({log}) {
  const truncate = text => {
    const replaced = text.replace(/\n/g, ' ');
    if (replaced.length <= 100) return replaced;
    else return replaced.slice(0, 100) + '...';
  };
  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}>
      <Text style={styles.date}>{formatDate(log.date)}</Text>
      <Text style={styles.title}>{log.title}</Text>
      <Text style={styles.body}>{truncate(log.body)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {backgroundColor: 'white', paddingVertical: 24, paddingHorizontal: 16},
  date: {fontSize: 12, color: '#546e7a', marginBottom: 8},
  title: {fontWeight: 'bold', fontSize: 18, color: '#263238', marginBottom: 8},
  body: {color: '#37474f', fontSize: 16, lineHeight: 21},
});
export default LogItem;
