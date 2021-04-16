import React from 'react';
import utils from 'AdjustMint/assets/utils';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import ViewShot from 'react-native-view-shot';
import PDFValue from '../PDFValue';
import { useOvermind } from '../../../overmind';
import selectiveACHbg from '../../../assets/img/selectiveACH.jpg'

function RefSelectiveACH(props, ref) {
  const GlobalState = useOvermind().state;

  let address = `${GlobalState.Claim.lossStreet1} ${GlobalState.Claim.lossCity}, ${GlobalState.Claim.lossStateName} ${GlobalState.Claim.lossZip}`;

  return (
    <ViewShot
      key={Math.random()}
      ref={ref}
      options={{ format: 'png', quality: 0.9 }}
      style={{ position: 'absolute', left: 0, zIndex: 20 }}
    >
      <ImageBackground
        source={selectiveACHbg}
        style={{ width: 815, height: 1056 }}
      >
        {/* I so and so authorize... */}
        <PDFValue
          value={`${GlobalState.Claim.insuredFirstName} ${GlobalState.Claim.insuredLastName}`}
          bottom={386}
          left={80}
        />
        {/* ACH Value */}
        <PDFValue value="XXX" bottom={386} left={560} />

        {/* Policy Number */}
        <PDFValue value={GlobalState.Claim.otherInsurancePolicyNumber} bottom={310} left={160} />
        {/* Mailing Address */}
        <PDFValue
          value={address}
          bottom={285}
          left={160}
        />

        {/* Primary Insured */}
        <PDFValue
          value={`${GlobalState.Claim.insuredFirstName} ${GlobalState.Claim.insuredLastName}`}
          bottom={262}
          left={160}
        />

        {/* Insured signature */}
        <PDFValue value="my signature" bottom={262} left={375} />

        {/* Date signed */}
        <PDFValue value="timestamp" bottom={262} left={628} />

        {/* Insured email */}
        <PDFValue value={GlobalState.Claim.insuredEmail} bottom={227} left={144} />

        {/* Cell phone */}
        {GlobalState.Claim.insuredHomePhone.length > 0 && (
          <PDFValue
            value={
              GlobalState.Claim.insuredHomePhone
            }
            bottom={227}
            left={524}
          />
        )}
        {GlobalState.Claim.insuredWorkPhone.length > 0 && (
          <PDFValue
            value={GlobalState.Claim.insuredWorkPhone}
            bottom={227}
            left={524}
          />
        )}
      </ImageBackground>
    </ViewShot>
  );
}
export const SelectiveACH = React.forwardRef(RefSelectiveACH);