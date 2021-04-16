import React from 'react';
import {View, Text} from 'react-native';
import common from 'AdjustMint/styles/Common';
import {useOvermind} from '../../../overmind';

type UnderwritingReportProps = {
  diffArr: string[];
}

export function UnderwritingReport({diffArr}: UnderwritingReportProps) {
  const GlobalState = useOvermind().state.Claim;

  const renderUAItem = (key: string, index: number) => {
    let friendlyKey = '';
    let underwritingValue = GlobalState.underwriting[key];
    let prelimValue = GlobalState[key];

    switch (key) {
      case 'mortgagee':
        friendlyKey = 'The name of the mortgagee';
        break;
      case 'lossCity':
        friendlyKey = 'The name of the loss city';
        break;
      case 'adjusterFullName':
        friendlyKey = 'The adjuster name';
        break;
      case 'claimType':
        friendlyKey = 'The claim type';
        break;
      case 'insuredFirstName':
        friendlyKey = 'The insured first name';
        break;
      case 'insuredLastName':
        friendlyKey = 'The insured last name';
        break;
      //TODO lossData
      case 'loss_date':
        friendlyKey = 'The loss date';
        break;
      case 'lossType':
        friendlyKey = 'The loss type';
        break;
      case 'lossStreet1':
        friendlyKey = 'The loss street address';
        break;
      case 'lossStateName':
        friendlyKey = 'The loss state name';
        break;
      case 'lossZip':
        friendlyKey = 'The loss zip code';
        break;
      case 'occupancy':
        friendlyKey = 'The occupancy type';
        break;
      case 'hasBasement':
        friendlyKey = 'The basement findings';
        break;
      case 'buildingElevated':
        friendlyKey = 'The elevation findings';
        break;
      case 'floorsOccupiedByInsured':
        friendlyKey = 'The floors occupied by the insured';
        break;
      case 'residencyType':
        friendlyKey = 'The residency type';
        break;
      case 'typeOfBuilding':
        friendlyKey = 'The type of building';
        break;
      case 'floorCount':
        friendlyKey = 'The floor count';
        break;
      case 'coverageVerifiedFrom':
        friendlyKey = 'The coverage verified from';
        break;
      default:
        friendlyKey = key;
    }

    return (
      <View
        key={index}
        style={{marginBottom: 20}}
      >
        <Text style={[common.text.copy, {marginBottom: 7}]}>
          {`${friendlyKey} has changed from:`}
        </Text>
        <Text style={[common.text.copy, {marginBottom: 7}]}>
          {`${underwritingValue} to ${prelimValue}`}
        </Text>
      </View>
    );
  };

  return (
    <View>
      {diffArr.map((x, index) => renderUAItem(x, index))}
    </View>
  );
}