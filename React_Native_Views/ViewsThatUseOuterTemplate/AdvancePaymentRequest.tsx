import React from 'react';
import utils from 'AdjustMint/assets/utils';
import { View, Image, Text } from 'react-native';
import common from 'AdjustMint/styles/Common';
import { useOvermind } from '../../../overmind';
import { getSignatureValue } from '../../utility';

export function AdvancePaymentRequest() {

  const GlobalState = useOvermind().state;

  let buildingAdv: number = GlobalState.Claim.advPaymentRequestBuildingValue;
  let contentsAdv: number = GlobalState.Claim.advPaymentRequestContentsValue;
  let totalAdvance: string = (buildingAdv + contentsAdv).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const renderAdvConditions = () => {
    if (
      //Not a boolean: yes, no, insured not present
      GlobalState.Claim.advPaymentRequest === 'No' &&
      GlobalState.Claim.advPaymentRequestNoReason ===
      'At this time I do not request an advance towards this claim/advanced not required'
    ) {
      return (
        <Text style={[{ textAlign: 'left' }, common.highlighted]}>
          At this time I do not request an advance towards this claim/advanced
          not required.
        </Text>
      );
    }
    if (
      GlobalState.Claim.advPaymentRequest === 'No' &&
      GlobalState.Claim.advPaymentRequestNoReason ===
      'Advance not offered due to coverage limitiations'
    ) {
      return (
        <Text style={[{ textAlign: 'left' }, common.highlighted]}>
          Advance not offered due to coverage limitiations.
        </Text>
      );
    }
    if (GlobalState.Claim.advPaymentRequest === 'Insured not present') {
      return (
        <Text style={[{ textAlign: 'left' }, common.highlighted]}>
          Insured not present.
        </Text>
      );
    }

    if (
      GlobalState.Claim.advPaymentRequest === 'No' &&
      GlobalState.Claim.advPaymentRequestNoReason === 'Other'
    ) {
      return (
        <Text style={[{ textAlign: 'left' }, common.highlighted]}>
          Other reason: {`${GlobalState.Claim.advPaymentRequestOtherReason}`}.
        </Text>
      );
    }

    if (GlobalState.Claim.advPaymentRequest === 'Yes') {
      return null;
    }
  };

  return (
    <View>
      <Text style={[{ textAlign: 'center' }]}>Mail advance payment to:</Text>
      <Text style={[{ textAlign: 'center' }, common.text.copy]}>
        {GlobalState.Claim.lossStreet1}
        {`${GlobalState.Claim.lossCity}, ${GlobalState.Claim.lossStateName}`}
        ,{' '}
        {GlobalState.Claim.lossZip}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, marginVertical: 10 }}>
          <Text style={[{ textAlign: 'center' }, common.text.copy]}>
            Contents advance:
          </Text>
          <Text
            style={[
              {
                textAlign: 'center',
                paddingVertical: 20,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: common.colors.accent1,
                marginHorizontal: 30,
                marginVertical: 10,
              },
              common.text.copy,
            ]}
          >
            {contentsAdv.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </View>
        <View style={{ flex: 1, marginVertical: 10 }}>
          <Text style={[{ textAlign: 'center' }, common.text.copy]}>
            Building advance:
          </Text>
          <Text
            style={[
              {
                textAlign: 'center',
                paddingVertical: 20,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: common.colors.accent1,
                marginHorizontal: 30,
                marginVertical: 10,
              },
              common.text.copy,
            ]}
          >
            {buildingAdv.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ marginVertical: 20 }}>
          This agreement acknowledges you have sustained a loss on the above
          date at the above address. {GlobalState.Claim.carrier} agrees to advance
          you {totalAdvance} against the final payment of your loss. It is
          understood by you, that the investigation of your loss is not
          complete at this time. It may be established after the investigation
          of your loss, that Selective Insurance Company SE has no legal
          obligation for payment of your claim. If it is determined your claim
          is not a valid claim under your insurance policy, you agree to
          reimburse the {totalAdvance} advanced to you. Issuance of an advance
          payment by us is not an admission of liability on our part.
          Acceptance by you does not represent a satisfaction or release of
          all claims.
        </Text>
        <Text>
          This is not a PROOF OF LOSS as required by the policy. A PROOF OF
          LOSS must still be submitted to the company within sixty (60) days
          of the date of loss, as stated in your policy. This agreement or
          payment of this advance is not intended to change or modify any of
          the conditions, terms, provisions, or requirements contained in the
          policy. Any obligations or legal rights which may now or hereafter
          be available to you or the company are reserved.
        </Text>
        <View
          style={{
            marginTop: 50,
            marginBottom: 10,
            flexDirection: 'row',

            justifyContent: 'space-evenly',
          }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 220,
              }}
            >
              <Text style={{ fontStyle: 'italic' }}>Insured signature</Text>
              <Text>
                {GlobalState.Claim.signatures.handbookInsuredSignature.timeStamp > 0 ?
                  utils.convertUnix(
                    GlobalState.Claim.signatures.handbookInsuredSignature.timeStamp
                  ) : null}
              </Text>
            </View>
            <View
              style={{
                width: 220,
                height: 120,
                borderWidth: 1,
                borderColor: common.colors.accent1,
                overflow: 'hidden',
                marginVertical: 10,
              }}
            >
              {GlobalState.Claim.signatures.handbookInsuredSignature.uri.length > 0 && (
                <Image
                  source={{
                    uri: getSignatureValue(GlobalState.Claim.signatures, "handbookInsuredSignature", "uri"),
                  }}
                  style={{
                    resizeMode: 'contain',
                    width: '100%',
                    height: 180,
                    transform: [
                      { rotate: '-90deg' },
                      { translateX: 30 },
                      { translateY: 0 },
                    ],
                  }}
                />
              )}
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 220,
              }}
            >
              <Text style={{ fontStyle: 'italic' }}>Adjuster signature</Text>
              <Text>
                {GlobalState.Claim.signatures.handbookAdjusterSignature.timeStamp > 0 ?
                  utils.convertUnix(
                    GlobalState.Claim.signatures.handbookAdjusterSignature.timeStamp
                  ) : null}
              </Text>
            </View>
            <View
              style={{
                width: 220,
                height: 120,
                borderWidth: 1,
                borderColor: common.colors.accent1,
                overflow: 'hidden',
                marginVertical: 10,
              }}
            >
              <Image
                source={{
                  uri: getSignatureValue(GlobalState.Claim.signatures, "handbookAdjusterSignature", "uri"),
                }}
                style={{
                  resizeMode: 'contain',
                  width: '100%',
                  height: 180,
                  transform: [
                    { rotate: '-90deg' },
                    { translateX: 30 },
                    { translateY: 0 },
                  ],
                }}
              />
            </View>
          </View>
        </View>
        {renderAdvConditions()}
      </View>
    </View>
  );
}