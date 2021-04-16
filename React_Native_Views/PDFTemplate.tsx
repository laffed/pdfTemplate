import React, {forwardRef} from 'react'
import {useOvermind} from '../../overmind';
import {View, StyleSheet, Image, Text, ImageBackground} from 'react-native';
import common from 'AdjustMint/styles/Common';
import ViewShot from 'react-native-view-shot';

type PDFTemplateProps = {
  children: React.ReactNode;
  title: string;
  index?: number;
}

function RefPDFTemplate({children, title, index = -1}: PDFTemplateProps, ref) {
  const GlobalState = useOvermind().state;
  let nfipLicense = '';
  for (let obj of GlobalState.Claim.certifications) {
    if (obj.state === 'NFIP License') {
      nfipLicense = obj.licenseNumber;
    }
  }

  return (
    <ViewShot
      ref={ref}
      key={Math.random()}
      options={{format: 'png', quality: 0.9}}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          height: 1056,
          width: 815,
          flex: 1,
          padding: 20,
          borderWidth: 1,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
          }}
        >
          {/* Carrier name */}
          <View style={{flex: 0.3}}>
            <Text
              style={[
                styles.sidebarText,
                {textAlign: 'left', fontWeight: 'bold', fontSize: 20},
              ]}
            >
              {/* TODO add this state */}
              Add Company Name State
              {/* {data.friendlyCompanyName} */}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={[common.text.title, {textAlign: 'center'}]}>
              {title}
            </Text>
          </View>
        </View>
        {/* Body */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingRight: 20,
            flex: 1,
          }}
        >
          {/* Sidebar */}
          <View
            style={{
              flex: 0.3,
              height: '100%',
              justifyContent: 'flex-start',
              paddingHorizontal: 20,
              marginRight: 20,
            }}
          >
            {/* Sidebar Section 1 */}
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: common.colors.accent1,
                paddingBottom: 10,
              }}
            >
              <View>
                <Text style={[styles.sidebarText, {fontWeight: 'bold'}]}>
                  Insured:
                </Text>
                <Text style={styles.sidebarText}>
                  {`${GlobalState.Claim.insuredFirstName} ${GlobalState.Claim.insuredLastName}`}
                </Text>
              </View>
              <View>
                <Text style={[styles.sidebarText, {fontWeight: 'bold'}]}>
                  Policy #:
                </Text>
                <Text style={styles.sidebarText}>
                  {GlobalState.Claim.policyNumber}
                </Text>
              </View>
              <View>
                <Text style={[styles.sidebarText, {fontWeight: 'bold'}]}>
                  Date of loss:
                </Text>
                <Text style={styles.sidebarText}>
                  {(new Date(GlobalState.Claim.lossDate)).toLocaleDateString()}
                </Text>
              </View>
              <View>
                <Text style={[styles.sidebarText, {fontWeight: 'bold'}]}>
                  Loss address:
                </Text>
                <Text style={styles.sidebarText}>
                  {`${GlobalState.Claim.lossStreet1},  ${GlobalState.Claim.lossCity}, ${GlobalState.Claim.lossZip}`}
                </Text>
              </View>
            </View>
            {/* Sidebar Section 2 */}
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: common.colors.accent1,
                paddingVertical: 10,
              }}
            >
              <View>
                <Text style={[styles.sidebarText, {fontWeight: 'bold'}]}>
                  Adjuster:
                </Text>
                <Text style={styles.sidebarText}>
                  {GlobalState.Claim.adjusterFullName}
                </Text>
              </View>
              <View>
                <Text style={[styles.sidebarText, {fontWeight: 'bold'}]}>
                  Adjuster FCN:
                </Text>
                <Text style={styles.sidebarText}>
                  {nfipLicense}
                </Text>
              </View>
              <View>
                <Text style={[styles.sidebarText, {fontWeight: 'bold'}]}>
                  Office: {GlobalState.Claim.adjusterPhoneWork}
                </Text>
                <Text style={styles.sidebarText}>
                  Mobile: {GlobalState.Claim.adjusterPhoneMobile}
                </Text>
              </View>
            </View>
            {/* Sidebar Section 3 */}
            <View
              style={{
                paddingVertical: 10,
              }}
            >
              <View>
                <Text
                  style={[
                    {
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: common.colors.accent1,
                      paddingBottom: 10,
                    },
                  ]}
                >
                  CNC Catastrophe & National Claims
                </Text>

                <Text style={styles.sidebarText}>2928 McVay Dr. North</Text>

                <Text style={styles.sidebarText}>Mobile, AL 36606</Text>

                <Text style={styles.sidebarText}>251-471-4718, ext. 5</Text>
                <Text style={styles.sidebarText}>
                  claims@cnc-resource.com
                </Text>
                <Text style={styles.sidebarText}>
                  AdjustingExpectations.com
                </Text>
              </View>
            </View>
          </View>
          {/* Content */}
          <View
            style={{
              flex: 1,
              height: '100%',
              marginHorizontal: 20,
            }}
          >
            {children}
          </View>
        </View>
        <View style={{flex: 0.2, paddingHorizontal: 5}}>
          <Image
            resizeMode="cover"
            style={{
              height: 42,
              width: '100%',
              alignSelf: 'center',
            }}
            source={require('../img/template-footer.jpg')}
          />
        </View>
      </View>
    </ViewShot>
  );
}

const styles = StyleSheet.create({
  sidebarText: {
    fontSize: 15,
    lineHeight: 23,
    color: common.colors.accent1,
  },
});

const PDFTemplate = React.forwardRef(RefPDFTemplate);
export default PDFTemplate;

