import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

const FROM_COLOR = '#4c669f';
const MIDDLE_COLOR = '#3b5998';
const TO_COLOR = '#192f6a';

export default function ButtonGradient() {
  console.log('button here');
  return (
    <TouchableOpacity style={styles.container}>
      <Svg height='100%' width='100%' style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient id='grad' x1='0%' y1='0%' x2='0%' y2='100%'>
            <Stop offset='0' stopColor={FROM_COLOR} />
            <Stop offset='0.5' stopColor={MIDDLE_COLOR} />
            <Stop offset='1' stopColor={TO_COLOR} />
          </LinearGradient>
        </Defs>
        <Rect width='100%' height='100%' fill='url(#grad)' />
      </Svg>

      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 50,
    width: '80%',
    overflow: 'hidden',
    borderRadius: 25,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});
