import React from 'react';
import {View, Text} from 'react-native';
import {useOvermind} from '../../../overmind';

export function SalvorRequest() {

  const GlobalState = useOvermind().state;

  return (
    <View>
      <Text style={[{textAlign: 'left', fontWeight: 'bold'}]}>
        For access to the Loss Address to the left contact:
      </Text>
      <Text style={[{textAlign: 'left'}]}>
        {`${GlobalState.Claim.insuredFirstName} ${GlobalState.Claim.insuredLastName}`}
      </Text>
      <Text>Home: {GlobalState.Claim.insuredHomePhone}</Text>
      <Text>Work:{GlobalState.Claim.insuredWorkPhone}</Text>
      <Text style={[{textAlign: 'left', marginBottom: 20}]}>
        <Text>Email:  {GlobalState.Claim.insuredEmail}</Text>
      </Text>
      <View>
        <Text style={{marginBottom: 20}}>
          Please determine the salvage value of the insured’s damaged contents
          or other specified items. Report the following details, along with
          any other relevant information:
        </Text>
        <Text style={{marginBottom: 20}}>
          1. Describe your contact with the policyholder and the subsequent
          investigation.
        </Text>
        <Text style={{marginBottom: 20}}>
          2. Full inventory of all salvageable and non-salvageable items
          damaged by the flood.
        </Text>
        <Text style={{marginBottom: 20}}>
          3. What portion of the loss may have been pre-existing and to what
          extent was the loss affected by this?
        </Text>
        <Text style={{marginBottom: 20}}>
          4. What portion of the loss may have been caused by other perils
          such as wind, fire, or improper handling / drying / mitigation?
        </Text>
        <Text style={{marginBottom: 20}}>
          5. What portion may be due to defective materials, construction,
          design, installation or maintenance?
        </Text>
        <Text style={{marginBottom: 20}}>
          6. Please inspect and consider only those contents/items/inventory/
          salvage in this building (when multiple buildings exist at the same
          location or property) as coverage under the policy may only be
          limited to the same. Please briefly address
          contents/items/inventory/salvage that may exist in other buildings.
          Do not include this in final calculations or allowances.
        </Text>
        <Text style={{marginBottom: 20}}>
          Additional instructions or other information below:
        </Text>
        <Text>{GlobalState.Claim.hasSalvageValueDesc}</Text>
      </View>
    </View>
  );
}
