import React from 'react';
import { View, Text } from 'react-native';
import { useOvermind } from '../../../overmind';

export function InspectionReport() {

  const GlobalState = useOvermind().state;


  return (
    <View>
      <Text style={{ marginBottom: 20 }}>
        Mortgagee confirmed as: {GlobalState.Claim.mortgageeName}
      </Text>
      <Text style={{ marginBottom: 20 }}>
        {`Mailing address: ${GlobalState.Claim.lossStreet1} ${GlobalState.Claim.lossCity}, ${GlobalState.Claim.lossStateName}, ${GlobalState.Claim.lossZip} `}
      </Text>
      <Text>Assignment:</Text>
      <Text style={{ marginBottom: 20 }}>
        {GlobalState.Claim.inspectionAssignmentDesc}
      </Text>
      <Text>Origin of flood:</Text>
      <Text style={{ marginBottom: 20 }}>
        {GlobalState.Claim.originOfFloodDesc}
      </Text>
      <Text>Inspection scope:</Text>
      <Text>{GlobalState.Claim.inspectionScopeDesc}</Text>
    </View>
  );
}