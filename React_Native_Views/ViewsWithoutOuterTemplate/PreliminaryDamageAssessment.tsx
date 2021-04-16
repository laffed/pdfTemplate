import React from 'react';
import utils from 'AdjustMint/assets/utils';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import ViewShot from 'react-native-view-shot';
import PDFValue from '../PDFValue';
import { useOvermind } from '../../../overmind';
import pdaBg from '../../../assets/img/pda.jpg'

function RefPreliminaryDamageAssessment(props, ref) {

  const GlobalState = useOvermind().state;

  return (
    <ViewShot
      ref={ref}
      options={{ format: 'png', quality: 0.9 }}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -10,
      }}
    >
      <ImageBackground
        // onLoadEnd={onLoadFunction}
        source={pdaBg}
        style={{ width: 815, height: 1056 }}
      >
        {/* Adjuster Name */}
        <PDFValue value={`${GlobalState.Claim.adjusterFullName}`} top={100} left={170} />
        {/* Date of loss */}
        <PDFValue value={utils.convertUnix(GlobalState.Claim.lossDate)} top={100} left={560} />
        {/* FICO Number */}
        <PDFValue value={`${GlobalState.Claim.subcatNumber}`} top={100} left={739} />
        {/* Insured name */}
        <PDFValue
          value={`${GlobalState.Claim.insuredFirstName} ${GlobalState.Claim.insuredLastName}`}
          top={125}
          left={170}
        />
        {/* Policy Number */}
        <PDFValue value={`${GlobalState.Claim.policyNumber}`} top={125} left={620} />
        {/* Address of insured property */}
        <PDFValue
          value={
            GlobalState.Claim.lossStreet1
          }
          top={170}
          left={120}
        />
        {/* City */}
        <PDFValue
          value={
            GlobalState.Claim.lossCity
          }
          top={195}
          left={70}
        />
        {/* State */}
        <PDFValue
          value={
            GlobalState.Claim.lossStateName
          }
          top={195}
          left={570}
        />
        {/* Zip */}
        <PDFValue
          value={
            GlobalState.Claim.lossZip
          }
          top={195}
          left={720}
        />
        {/* Est. Main Building Repair Cost */}
        <PDFValue value={GlobalState.Claim.reservesBuildingReserve} top={253} left={90} />
        {/* Est. Main Building Replacement Cost Value */}
        <PDFValue value={`${GlobalState.Claim.ercv}`} top={253} left={350} />
        {/* Est. Main Building Actual Cash Value */}
        <PDFValue value={`${GlobalState.Claim.acv}`} top={253} left={610} />

        {/* Est. Detatched Garage Repair Cost */}
        <PDFValue value={''} top={300} left={140} />
        {/* Est. Detatched Replacement Cost Value */}
        <PDFValue value={''} top={300} left={390} />
        {/* Est. Detatched Actual Cash Value */}
        <PDFValue value={''} top={300} left={640} />

        {/* Est. Contents Repair Cost */}
        <PDFValue
          value={''}
          top={330}
          left={280}
        />
        {/* Contents Actual Cash Value */}
        <PDFValue value={''} top={330} left={635} />

        {/* Est. Appurtenant Structure Structure Contents Cost */}
        <PDFValue
          value={''}
          top={383}
          left={135}
        />

        {/*  Appurtenant Structure Structure Actual Cash Value */}
        <PDFValue
          value={''}
          top={383}
          left={478}
        />
      </ImageBackground>
    </ViewShot>
  );
}
export const PreliminaryDamageAssessment = React.forwardRef(RefPreliminaryDamageAssessment);