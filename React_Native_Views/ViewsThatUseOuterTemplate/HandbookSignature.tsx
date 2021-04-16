import React from 'react';
import utils from 'AdjustMint/assets/utils';
import { View, Image, Text } from 'react-native';
import common from 'AdjustMint/styles/Common';
import { useOvermind } from '../../../overmind';
import { getSignatureValue } from '../../../assets/utility'

export function HandbookSignature() {

  const GlobalActions = useOvermind().actions.Claim;
  const GlobalState = useOvermind().state;

  return (
    <View>
      <Text>
        I received a copy of the National Flood Insurance Program’s Flood
        Insurance Claims Handbook from the adjuster.
      </Text>
      <View>
        <View style={{ marginVertical: 40 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontStyle: 'italic' }}>Insured signature</Text>
            <Text>
              {GlobalState.Claim.signatures.handbookInsuredSignature.timeStamp > 0 ? utils.convertUnix(GlobalState.Claim.signatures.handbookInsuredSignature.timeStamp)
                : null}
            </Text>
          </View>
          <View
            style={{
              width: 520,
              height: 120,
              borderWidth: 1,
              borderColor: common.colors.accent1,
              overflow: 'hidden',
              marginVertical: 10,
            }}
          >
            {getSignatureValue(GlobalState.Claim.signatures, 'handbookInsuredSignature', 'uri').length > 0 && (
              <Image
                source={{
                  uri: getSignatureValue(GlobalState.Claim.signatures, 'handbookInsuredSignature', 'uri')
                }}
                style={{
                  resizeMode: 'contain',
                  width: '100%',
                  height: 150,
                  transform: [
                    { rotate: '-90deg' },
                    { translateX: 20 },
                    { translateY: 0 },
                  ],
                }}
              />
            )}
          </View>
        </View>
      </View>
      <View>
        <View style={{ marginVertical: 40 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontStyle: 'italic' }}>Adjuster signature</Text>
            <Text>
              {GlobalState.Claim.signatures.handbookAdjusterSignature.timeStamp > 0 ? utils.convertUnix(GlobalState.Claim.signatures.handbookAdjusterSignature.timeStamp)
                : null}
            </Text>
          </View>
          <View
            style={{
              width: 520,
              height: 120,
              borderWidth: 1,
              borderColor: common.colors.accent1,
              overflow: 'hidden',
              marginVertical: 10,
            }}
          >
            {getSignatureValue(GlobalState.Claim.signatures, 'handbookAdjusterSignature', 'uri').length > 0 && (
              <Image
                source={{
                  uri: getSignatureValue(GlobalState.Claim.signatures, 'handbookAdjusterSignature', 'uri')
                }}
                style={{
                  resizeMode: 'contain',
                  width: '100%',
                  height: 150,
                  transform: [
                    { rotate: '-90deg' },
                    { translateX: 20 },
                    { translateY: 0 },
                  ],
                }}
              />
            )}
          </View>
        </View>
      </View>
      {!GlobalState.Claim.insuredPresent && (
        <Text style={{ fontWeight: 'bold' }}>
          Note: Insured was not present
        </Text>
      )}
    </View>
  );
}