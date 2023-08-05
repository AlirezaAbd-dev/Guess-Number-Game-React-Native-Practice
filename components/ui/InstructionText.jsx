import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

/**
 * 
 * @param {Object} param 
 * @param {import('react').ReactNode} param.children
 * @param {import('react-native').StyleProp<import('react-native').TextStyle>} param.style
*/
function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
