import React from 'react';
import { Text } from 'react-native';

type PDFValueProps = {
  value: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  style?: any;
}

function PDFValue({ value, top, bottom, left, right, style = {} }: PDFValueProps) {
  return (
    <Text
      style={[
        {
          position: 'absolute',
          textAlign: 'left',
          fontSize: value == '\u25FE' ? 25 : null,
          top: top ? top : null,
          bottom: bottom ? bottom : null,
          left: left ? left : null,
          right: right ? right : null,
        },
        style,
      ]}>
      {value}
    </Text>
  );
}

export default PDFValue;
