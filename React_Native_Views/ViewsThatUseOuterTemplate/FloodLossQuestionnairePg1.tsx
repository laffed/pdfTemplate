import React from 'react';
import { View, Text } from 'react-native';
import common from 'AdjustMint/styles/Common';
import { useOvermind } from '../../../overmind';
import utils from 'AdjustMint/assets/utils';

export function FloodLossQuestionnairePg1() {
  const GlobalState = useOvermind().state;

  return (
    <View>
      <Text style={{ textAlign: 'right' }}>pg.1</Text>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`1. What month and year was the building constructed?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {utils.convertUnix(GlobalState.Claim.constructionDate)}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`2. What month and year was the risk purchased?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {utils.convertUnix(GlobalState.Claim.riskPurchased)}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`3. Do you own the building?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.occupancy == 'Owner' ? 'Yes' : 'No'}`}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`4. Is this your Seasonal Residence or Condo Unit?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.isCondoUnit ? 'Condo Unit' : 'Seasonal Residence'}`}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`5. If this is a rental property and has contents coverage, do you own all of the contents?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.rentalContentOwnership ? 'Yes' : 'No'}`}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`6. Since you have owned the property, have you completed any major improvements? If yes, please explain.`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.improvementsDetails.length > 0 ? GlobalState.Claim.improvementsDetails : 'N/A'}`}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`7. If Mortgage paid off, give year paid off (Please provide Pay Off Letter from Mortgagee. If pay off documents are not received and/or if you have not provided the most current mortgage , the current mortgage as listed above will be included on your building payment check.):`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.mortgagePaidOffYear}`}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`8. Date and Time water entered your building?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {utils.convertUnix(GlobalState.Claim.dateWaterEntered)}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`9. Date and Time water receded your building?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {utils.convertUnix(GlobalState.Claim.dateWaterReceded)}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`10. The floodwaters that came in were:`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.floodWaterType}`}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`11. Nearest body of water?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.nearestBodyOfWater}`}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: common.colors.mintDark, marginBottom: 5 }}>
          {`12. Body of water total distance from risk?`}
        </Text>
        <Text
          style={{
            display: 'flex',
            color: common.colors.grey,
            paddingLeft: 16,
          }}
        >
          {`${GlobalState.Claim.distanceFromBodyOfWaterFeet}`}
        </Text>
      </View>

    </View>
  );
}