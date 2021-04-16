import React from 'react';
import { View, Text } from 'react-native';
import common from 'AdjustMint/styles/Common';
import { useOvermind } from '../../../overmind';

export function FloodLossQuestionnairePg2() {

  const GlobalState = useOvermind().state;

  const priorLossFunc = () => {
    if (GlobalState.Claim.priorLossArr.length !== 0) {
      const item = GlobalState.Claim.priorLossArr.map((data) => (
        <Text>{`${data.date} - $${data.lossAmount}       `}</Text>
      ));
      return item;
    }
    return <Text>{`No Prior Losses`}</Text>;
  };

  return (
    <View>
      <Text style={{ textAlign: 'right' }}>.pg 2</Text>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`1. Name of other insurance`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.nameOfOtherInsurance.length > 0 ? GlobalState.Claim.nameOfOtherInsurance : 'No Other Insurance'}`}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`2. Do you have excess flood coverage for building?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.excessFloodCoverageForBuilding ? GlobalState.Claim.excessFloodCoverageForBuilding : 'N/A'}`}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`3. Do you have excess flood coverage for contents?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.excessFloodCoverageForContents ? GlobalState.Claim.excessFloodCoverageForContents : 'N/A'}`}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`4. Has your building suffered any prior losses from flood?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {priorLossFunc()}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`5. Are you using a general contractor?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {GlobalState.Claim.usingAGeneralContractor ? `${GlobalState.Claim.generalContractorName}: ${GlobalState.Claim.generalContractorAddress}, ${GlobalState.Claim.generalContractorLocation}, ${GlobalState.Claim.generalContractorPhone}` : 'No'}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`6. The policy is currently listed under the name of:`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.insuredFirstName} ${GlobalState.Claim.insuredLastName}`}
        </Text>
      </View>
    </View>
  );
}