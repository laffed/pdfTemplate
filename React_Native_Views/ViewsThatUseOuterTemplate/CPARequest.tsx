import React from 'react';
import utils from 'AdjustMint/assets/utils';
import { View, Text } from 'react-native';
import { useOvermind } from '../../../overmind';

export function CPARequest() {

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
        <Text>Email: {GlobalState.Claim.insuredEmail}</Text>
      </Text>
      <View>
        <Text style={{ marginBottom: 20 }}>
          Please determine the extent that contents or other specified items
          were damaged by flooding. Report the following details, along with
          any other relevant information:
        </Text>
        <Text style={{ marginBottom: 20 }}>
          1. Describe your contact with the policyholder and the subsequent
          investigation.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          2. What portion of the loss may have been pre-existing and to what
          extent was the loss effected by this?
        </Text>
        <Text style={{ marginBottom: 20 }}>
          3. What portion of the loss may have been caused by other perils
          such as wind, fire, or improper handling / drying / mitigation?
        </Text>
        <Text style={{ marginBottom: 20 }}>
          4. What portion may be due to defective materials, construction,
          design, installation or maintenance?
        </Text>
        <Text style={{ marginBottom: 20 }}>
          5. To what extent were the contents or other specified items damaged
          by flooding?
        </Text>
        <Text style={{ marginBottom: 20 }}>
          6. List the age, condition, and actual cash value of each item at
          the time of flooding.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          7. Damaged Inventory Summary and supporting documentation of any
          replacement pricing.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          8. Total replacement cost and actual cash value of loss.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          9. Please inspect and consider only those contents/items/inventory
          in this building (when multiple buildings exist at the same location
          or property) as coverage under the policy may only be limited to the
          same. Please briefly address contents/items/inventory that may exist
          in other buildings. Do not include this in final calculations or
          allowances.
        </Text>
        <Text style={{ marginBottom: 20 }}>
          Additional instructions or other information below:
        </Text>
        <Text>{GlobalState.Claim.accountantRequiredDesc}</Text>
      </View>
    </View>
  );
}