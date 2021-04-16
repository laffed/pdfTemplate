import React from 'react';
import utils from 'AdjustMint/assets/utils';
import { View, Text } from 'react-native';
import { useOvermind } from '../../../overmind';

export function SurveyorRequest() {

  const GlobalState = useOvermind().state;

  return (
    <View>
      <Text style={[{ textAlign: 'left', fontWeight: 'bold' }]}>
        For access to the Loss Address to the left contact:
      </Text>
      <Text style={[{ textAlign: 'left' }]}>
        {`${GlobalState.Claim.insuredFirstName} ${GlobalState.Claim.insuredLastName}`}
      </Text>
      <Text>Home: {GlobalState.Claim.insuredHomePhone}</Text>
      <Text>Work:{GlobalState.Claim.insuredWorkPhone}</Text>

      <Text style={[{ textAlign: 'left', marginBottom: 20 }]}>
        Email:  {GlobalState.Claim.insuredEmail}
      </Text>
      <View>
        <Text style={{ marginBottom: 20 }}>
          Please determine and show the existence of a basement or walkout on
          the insured risk. Report the following details, along with any other
          relevant information:
        </Text>
        <Text style={{ marginBottom: 20 }}>
          1. Describe your contact with the policyholder and subsequent
          investigation.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          2. Survey and document all elevations around the risk corners,
          sides, and other areas of question or concern. Be sure that
          elevations for these areas are measured both on the interior and
          exterior in the same locations as accessible.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          3. Determine and report whether the grade of the lowest floor is at
          or above the grade outside.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          4. Determine and report the existence of any positive drainage away
          from the opening.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          5. Photograph all sides and every entrance of the building.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          6. Photograph all surrounding areas towards and away from the
          building.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          7. Photograph a tape measure documenting any steps down.
        </Text>
      </View>
    </View>
  );
}