import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import Icon from '@react-native-vector-icons/fontawesome6';


export default function DetailListIt({ icon, title, subtitle }: { icon: string, title: string, subtitle: string }) {
  return (
    <View style={styles.row}>
      <Icon name={icon as any} size={24} color="#000" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.label}>{title}</Text>
        <Text
          style={styles.link}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  icon: {
    marginTop: 2,
    width: 28,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
    marginBottom: 2,
  },
  link: {
    fontSize: 15,
    color: '#3366cc',
  },
});
