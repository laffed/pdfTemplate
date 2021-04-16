import React from 'react';
import utils from 'AdjustMint/assets/utils';
import { View, Image, Text } from 'react-native';
import common from 'AdjustMint/styles/Common';
import { useOvermind } from '../../../overmind';
import { getSignatureValue } from '../../../assets/utility'

export function NonWaiverAgreement() {

  const GlobalState = useOvermind().state;

  const day =
    GlobalState.Claim.nonWaiverDay.length > 0 ? GlobalState.Claim.nonWaiverDay : null;
  const month =
    GlobalState.Claim.nonWaiverMonth.length > 0 ? GlobalState.Claim.nonWaiverMonth : null;
  const year =
    GlobalState.Claim.nonWaiverYear.length > 0 ? GlobalState.Claim.nonWaiverYear : null;

  return (
    <View>
      <Text style={{ marginBottom: 20 }}>
        It is agreed, that any action taken heretofore or hereafter by the
        insurance company, or companies, signing this agreement in
        ascertaining the amount of the actual cash value; and the amount of
        the loss and damage which occured to , located at , and in
        investigating the cause thereof, shall not waive or invalidate any of
        the conditions of the policies of insurance.
        </Text>
      <Text style={{ marginBottom: 20 }}>
        Notice, is hereby given and accepted, and it is hereby mutually
        understood and agreed, that no representative of any insurance company
        signing this agreement has power or authority to waive any of the
        conditions of their respective policies, unless such waiver be
        specifically made in writing.
        </Text>
      <Text style={{ marginBottom: 20 }}>
        The reasons(s) for executing this request (in addition to any such
        other reasons as may appear):
        </Text>
      <Text style={{ marginBottom: 20 }}>
        {GlobalState.Claim.nonWaiverDescription.length > 0 &&
          GlobalState.Claim.nonWaiverDescription}
      </Text>
      <Text style={{ marginBottom: 20 }}>
        The sole object and intent of this agreement is to provide for the
        determination of the amount of the actual cash value and the amount of
        the loss and damage, and an investigation of the cause thereof,
        without regard to the liability, if any, of said insurance companies.
        </Text>
      <Text style={{ marginBottom: 20 }}>
        {`Witness our hands in duplicate this ${day} day of ${month} year of ${year}.`}
      </Text>
      {/* Non-Waiver Insured Signature */}
      <View>
        <View style={{ marginVertical: 10 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontStyle: 'italic' }}>
              Non-Waiver Insured signature
              </Text>
            <Text>
              {GlobalState.Claim.signatures.nonWaiverInsuredSignature.timeStamp > 0 ? utils.convertUnix(GlobalState.Claim.signatures.nonWaiverInsuredSignature.timeStamp)
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
            {GlobalState.Claim.signatures.nonWaiverInsuredSignature.uri.length > 0 && (
              <Image
                source={{
                  uri: getSignatureValue(GlobalState.Claim.signatures, "nonWaiverInsuredSignature", "uri"),
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
      {/* Non-Waiver Adjuster Signature */}
      <View>
        <View style={{ marginVertical: 10 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontStyle: 'italic' }}>
              Non-Waiver Adjuster signature
              </Text>
            <Text>
              {GlobalState.Claim.signatures.nonWaiverAdjusterSignature.timeStamp > 0 ? utils.convertUnix(
                GlobalState.Claim.signatures.nonWaiverAdjusterSignature.timeStamp)
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
            {GlobalState.Claim.signatures.nonWaiverAdjusterSignature.uri.length > 0 && (
              <Image
                source={{
                  uri: getSignatureValue(GlobalState.Claim.signatures, 'nonWaiverAdjusterSignature', 'uri'),
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
    </View>
  );
}
