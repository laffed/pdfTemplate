import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import common from 'AdjustMint/styles/Common';
import { useOvermind } from '../../../overmind';

export function EngineerRequest() {
  const GlobalState = useOvermind().state;

  return (
    <View>
      <Text style={[{ textAlign: 'left', fontWeight: 'bold' }]}>
        For access to the Loss Address contact:
        </Text>
      <Text style={[{ textAlign: 'left' }]}>
        {`${GlobalState.Claim.insuredFirstName.length > 0
          ? GlobalState.Claim.insuredFirstName
          : 'No first name provided'
          } ${GlobalState.Claim.insuredLastName.length > 0
            ? GlobalState.Claim.insuredLastName
            : 'No last name provided'
          }`}
      </Text>
      <Text>Home: {GlobalState.Claim.insuredHomePhone}</Text>
      <Text>Work:{GlobalState.Claim.insuredWorkPhone}</Text>

      <Text style={[{ textAlign: 'left', marginBottom: 20 }]}>
        Email:  {GlobalState.Claim.insuredEmail}
      </Text>
      <Text style={[{ fontWeight: 'bold', paddingTop: 20 }]}>Adjuster:</Text>
      <Text>
        1. Describe conditions observed during inspection. Attach supporting
        photo:
        </Text>
      <Text>Provided answer</Text>
      <Text>
        2. Report on any specific concerns raised by the insure, but not
        immediately verifiable during adjuster’s inspection:
        </Text>
      <Text>Provided answer</Text>

      <Text style={{ fontWeight: 'bold', paddingTop: 20 }}>Engineer:</Text>
      <Text>
        Please inspect and report findings as agreed with the hiring WYO.
        Include license and state seal validations. Specifically, we request
        the following:
        </Text>
      <Text>
        • Identify cause and origin of any conditions or damages associated
        with the foundation or structural elements.
        </Text>
      <Text>
        • Speak specifically to all conditions reported by the adjuster and/or
        the policyholder.
        </Text>
      <Text>
        • If more than one peril contributed to the conditions observed,
        address in detail.
        </Text>
      <Text>
        • Provide scientifically based conclusions with supporting
        documentation, such as but not limited to sketches, weather data,
        surge data, soils data, construction documents , photos, measurements
        or other information relevant to the conclusions drawn.
        </Text>
      <Text />
      {GlobalState.Claim.insuredClaimingStructuralDamage && (
        <View>
          <Text>Insured comments:</Text>
          <Text>
            {GlobalState.Claim.insuredClaimingStructuralDamageDesc}
          </Text>
        </View>
      )}
      {GlobalState.Claim.adjusterAgreesStructuralDamage && (
        <View>
          <Text />
          <Text>Adjuster comments:</Text>
          <Text>
            {GlobalState.Claim.adjusterAgreesStructuralDamageDesc}
          </Text>
        </View>
      )}
    </View>
  );
}
