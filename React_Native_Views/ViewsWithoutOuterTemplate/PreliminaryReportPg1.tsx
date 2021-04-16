import React from 'react';
import utils from 'AdjustMint/assets/utils';
import {View, StyleSheet, Image, Text, ImageBackground} from 'react-native';
import ViewShot from 'react-native-view-shot';
import PDFValue from '../PDFValue';
import {useOvermind} from '../../../overmind';
import prelim1Bg from '../../../assets/img/prelim1.jpg'

function RefPreliminaryReportPg1(props, ref) {
  const GlobalState = useOvermind().state;
  // const { photoData } = data;
  const marked = '\u25FE';

  const photoCount = () => {
    let count = 0;
    for (let key in GlobalState.Claim.photos) {
      count += GlobalState.Claim.photos[key].entries.length;
    }
    return count;
  };

  return (
    <ViewShot
      key={Math.random()}
      ref={ref}
      options={{format: 'png', quality: 0.9}}
      style={{position: 'absolute', left: 0, zIndex: 20}}
    >
      <ImageBackground
        source={prelim1Bg}
        style={{width: 815, height: 1056}}
      >
        {/* Prelim Page 1, General Info */}
        <PDFValue
          value={`${GlobalState.Claim.insuredFirstName} ${GlobalState.Claim.insuredLastName}`}
          top={114}
          left={170}
        />
        <PDFValue
          value={` ${GlobalState.Claim.lossStreet1}`}
          top={138}
          left={130}
        />
        <PDFValue
          value={GlobalState.Claim.lossCity}
          top={163}
          left={60}
        />
        <PDFValue
          value={GlobalState.Claim.lossStateName}
          top={163}
          left={320}
        />
        <PDFValue
          value={GlobalState.Claim.lossZip}
          top={163}
          left={430}
        />

        <PDFValue value={GlobalState.Claim.claimid} top={184} left={650} />

        {/* Policy # */}
        <PDFValue value={GlobalState.Claim.policyNumber} top={113} left={630} />
        {/* Date of loss */}
        <PDFValue
          value={utils.convertUnix(GlobalState.Claim.lossDate)}
          top={138}
          left={600}
        />
        {/* FICO # */}
        <PDFValue value={GlobalState.Claim.subcatNumber} top={160} left={605} />
        {/* Tax ID # */}
        <PDFValue value="Tax ID #" top={206} left={608} />
        {/* Date loss assigned */}
        <PDFValue
          value={utils.convertUnix(GlobalState.Claim.assignedDate)}
          top={256}
          left={663}
        />
        {/* Date insured contacted */}
        <PDFValue
          value={utils.convertUnix(GlobalState.Claim.contactDate)}
          top={280}
          left={663}
        />
        {/* Date loss inspected */}
        <PDFValue
          value={utils.convertUnix(GlobalState.Claim.inspectionDate)}
          top={303}
          left={663}
        />
        {/* Adjusting company */}
        <PDFValue
          value="CNC Catastrophe & National Claims"
          top={280}
          left={160}
        />
        {/* Adjuster address */}
        <PDFValue value="2928 North McVay Dr." top={304} left={160} />
        <PDFValue value="Mobile" top={327} left={60} />
        <PDFValue value="Alabama" top={352} left={98} />
        <PDFValue value="36606" top={352} left={288} />
        {/* Adjuster's Telephone Numbers */}
        <PDFValue value={GlobalState.Claim.adjusterPhoneWork} top={390} left={68} />
        <PDFValue
          value={GlobalState.Claim.adjusterPhoneMobile}
          top={390}
          left={317}
        />

        {/* Prelim Page 1, Attatchments */}
        {/* ATTS. */}

        {/* Photographs */}
        <PDFValue
          value={photoCount() > 0 ? marked : ''}
          top={439}
          left={247}
        />
        <PDFValue
          value={`${photoCount()}`}
          top={440}
          left={374}
        />
        {/* Prelim Page 1, Insurance */}
        {/* Coverage verified from:  */}
        {/* NFIP */}
        <PDFValue
          value={
            GlobalState.Claim.coverageVerifiedFrom == 'NFIP' ||
              GlobalState.Claim.coverageVerifiedFrom == 'Flood (NFIP)'
              ? marked
              : ''
          }
          top={520}
          left={54}
        />
        {/* Agent's Daily */}
        <PDFValue
          value={marked}
          top={542}
          left={54}
          style={{
            display:
              GlobalState.Claim.coverageVerifiedFrom == "Agent's Daily"
                ? 'flex'
                : 'none',
          }}
        />
        {/* Insured's Policy */}
        <PDFValue
          value={marked}
          top={564}
          left={54}
          style={{
            display:
              GlobalState.Claim.coverageVerifiedFrom == "Insured's Policy"
                ? 'flex'
                : 'none',
          }}
        />

        {/* Advance payment request */}
        {/* Yes */}
        <PDFValue
          value={marked}
          top={604}
          left={GlobalState.Claim.advPaymentRequest == 'Yes' ? 279 : 228}
        />

        {/* Coverage */}
        {/* Building Coverage */}

        <PDFValue
          value={GlobalState.Claim.coverageA}
          top={615}
          left={490}
          style={{fontSize: 14}}
        />
        {/* Building Deductible */}
        <PDFValue
          value={GlobalState.Claim.deductibleA}
          top={615}
          left={595}
          style={{fontSize: 14}}
        />
        {/* Building Reserve */}
        <PDFValue
          value={`${GlobalState.Claim.reservesBuildingReserve}`}
          top={615}
          left={705}
          style={{fontSize: 14}}
        />

        {/* Contents Coverage */}
        <PDFValue
          value={GlobalState.Claim.coverageB}
          top={637}
          left={490}
          style={{fontSize: 14}}
        />
        {/* Contents Deductible */}
        <PDFValue
          value={GlobalState.Claim.deductibleB}
          top={637}
          left={595}
          style={{fontSize: 14}}
        />
        {/* Reserve */}
        <PDFValue
          value={`${GlobalState.Claim.reservesContentsReserve}`}
          top={637}
          left={705}
          style={{fontSize: 14}}
        />

        {/* Policy Term */}
        {/* From: */}
        <PDFValue
          style={{
            display:
              GlobalState.Claim.policyStartDate == undefined ? 'none' : 'flex',
          }}
          value={utils.convertUnix(GlobalState.Claim.policyStartDate)}
          top={535}
          left={260}
        />
        {/* To: */}
        <PDFValue
          // style={{
          //   display: claimData.policy_end_date == undefined ? 'none' : 'flex',
          // }}
          value='' //TODO We need the policy end date from CNC
          top={563}
          left={260}
        />

        {/* Program  */}
        <PDFValue
          style={{
            display: GlobalState.Claim.emergencyOrRegulaFloodProgram == undefined ? 'none' : 'flex',
          }}
          value={marked}
          top={GlobalState.Claim.emergencyOrRegulaFloodProgram == 'Regular' ? 542 : 520}
          left={415}
        />

        {/* SFIP Form */}
        <PDFValue
          style={{
            display: GlobalState.Claim.claimType == undefined ? 'none' : 'flex',
          }}
          value={marked}
          top={
            GlobalState.Claim.claimType == 'Dwelling'
              ? 542
              : GlobalState.Claim.claimType == 'RCBAP'
                ? 562
                : 520
          }
          left={590}
        />

        {/* Prelim Page 1, Risk */}

        {/* Type of Building */}
        {/* Single Family */}
        <PDFValue
          value={
            marked
          }
          bottom={
            GlobalState.Claim.typeOfBuilding == 'Single family'
              ? 363
              : GlobalState.Claim.typeOfBuilding == '2-4 family'
                ? 363
                : GlobalState.Claim.typeOfBuilding == 'Condo association'
                  ? 363
                  : GlobalState.Claim.typeOfBuilding == 'Condo unit'
                    ? 363
                    : GlobalState.Claim.typeOfBuilding == 'Other residential'
                      ? 363
                      : GlobalState.Claim.typeOfBuilding == 'Mobile home'
                        ? 318
                        : GlobalState.Claim.typeOfBuilding == 'Non-residential'
                          ? 338
                          : 0
          }
          left={
            GlobalState.Claim.typeOfBuilding == 'Single family'
              ? 169
              : GlobalState.Claim.typeOfBuilding == '2-4 family'
                ? 270
                : GlobalState.Claim.typeOfBuilding == 'Condo association'
                  ? 270
                  : GlobalState.Claim.typeOfBuilding == 'Condo unit'
                    ? 489
                    : GlobalState.Claim.typeOfBuilding == 'Other residential'
                      ? 580
                      : GlobalState.Claim.typeOfBuilding == 'Mobile home'
                        ? 169
                        : GlobalState.Claim.typeOfBuilding == 'Non-residential'
                          ? 169
                          : 0
          }
        />

        {/* Mobile Home Make */}
        <PDFValue
          value={
            GlobalState.Claim.mobileHomeMake.length > 0 ? marked : ''
          }
          bottom={328}
          left={418}
        />
        {/* Mobile Home Model */}
        <PDFValue
          value={
            GlobalState.Claim.mobileHomeModel.length > 0
              ? marked
              : ''
          }
          bottom={305}
          left={220}
        />
        {/* Mobile Home Serial */}
        <PDFValue
          value={
            GlobalState.Claim.mobileHomeSerial.length > 0
              ? marked
              : ''
          }
          bottom={305}
          left={585}
        />

        {/* Occupancy */}
        <PDFValue
          value={
            GlobalState.Claim.occupancy.length > 0 ? marked : ''
          }
          bottom={266}
          left={
            GlobalState.Claim.occupancy == 'Owner'
              ? 135
              : GlobalState.Claim.occupancy == 'Tenant'
                ? 205
                : GlobalState.Claim.occupancy == 'State government owned'
                  ? 275
                  : GlobalState.Claim.occupancy == 'Unoccupied'
                    ? 443
                    : 0
          }
        />

        {/* Residency */}
        <PDFValue
          value={
            GlobalState.Claim.residencyType.length > 0 ? marked : ''
          }
          bottom={266}
          left={
            GlobalState.Claim.residencyType == 'Principal'
              ? 620
              : GlobalState.Claim.residencyType == 'Seasonal'
                ? 699
                : 0
          }
        />

        {/* TITLE VERIFIED */}
        <PDFValue
          value={
            marked
          }
          bottom={243}
          left={
            GlobalState.Claim.hasTitleVerified
              ? 153
              : 213
          }
        />

        {/* Source of verification  */}
        <PDFValue
          value={
            GlobalState.Claim.sourceOfVerification.length > 0
              ? GlobalState.Claim.sourceOfVerification
              : ''
          }
          bottom={252}
          left={406}
        />

        {/* Number of floors in the building  */}
        <PDFValue
          value={
            marked
          }
          bottom={219}
          left={
            GlobalState.Claim.floorCount == '1'
              ? 404
              : GlobalState.Claim.floorCount == '2'
                ? 449
                : GlobalState.Claim.floorCount == '3 or more'
                  ? 496
                  : 0
          }
        />
        {/* Is this building split level? */}
        <PDFValue
          value={
            marked
          }
          bottom={199}
          left={
            GlobalState.Claim.isSplitLevel
              ? 178
              : 240

          }
        />
        {/* In case of multiple occupancy... */}
        <PDFValue
          value={
            GlobalState.Claim.floorsOccupiedByInsured.length > 0
              ? marked
              : ''
          }
          bottom={178}
          left={
            GlobalState.Claim.floorsOccupiedByInsured == 'Basement'
              ? 416
              : GlobalState.Claim.floorsOccupiedByInsured == 'First'
                ? 509
                : 578

          }
        />
        {/* Type of basement */}
        <PDFValue
          value={
            marked
          }
          bottom={156}
          left={
            !GlobalState.Claim.hasBasement
              ? 154
              : GlobalState.Claim.basementType == 'Unfinished'
                ? 223
                : GlobalState.Claim.basementType == 'Finished'
                  ? 308
                  : 0
          }
        />
        {/* Is basement flood proof */}
        <PDFValue
          value={
            marked
          }
          bottom={156}
          left={
            GlobalState.Claim.basementFloodproofed
              ? 577
              : 612

          }
        />
        {/* Is building eleveated? */}
        <PDFValue
          value={
            marked
          }
          bottom={133}
          left={
            GlobalState.Claim.buildingElevated
              ? 155
              : 208

          }
        />
        {/* Foundation area enclosure */}
        {/* None */}
        <PDFValue
          value={
            GlobalState.Claim.foundationAreaEnclosure.length > 0
              ? ''
              : marked
          }
          bottom={133}
          left={
            GlobalState.Claim.foundationAreaEnclosure === 'None'
              ? 413
              : GlobalState.Claim.foundationAreaEnclosure === 'Breakaway walls'
                ? 480
                : GlobalState.Claim.foundationAreaEnclosure === 'Unfinished'
                  ? 612
                  : GlobalState.Claim.foundationAreaEnclosure === 'Finished'
                    ? 705
                    : 0
          }
        />
        {/* Prior condition of Building */}
        <PDFValue
          value={
            GlobalState.Claim.priorConditionOfBuilding.length > 0 ? marked : ''
          }
          bottom={92}
          left={
            GlobalState.Claim.priorConditionOfBuilding == 'Poor'
              ? 470
              : GlobalState.Claim.priorConditionOfBuilding == 'Fair'
                ? 525
                : GlobalState.Claim.priorConditionOfBuilding == 'Good'
                  ? 577
                  : GlobalState.Claim.priorConditionOfBuilding == 'Very Good'
                    ? 637
                    : 0
          }
        />
        {/* Prior condition of Contents */}
        <PDFValue
          value={
            GlobalState.Claim.priorConditionOfContents.length > 0
              ? marked
              : ''
          }
          bottom={72}
          left={
            GlobalState.Claim.priorConditionOfContents == 'Poor'
              ? 470
              : GlobalState.Claim.priorConditionOfContents == 'Fair'
                ? 525
                : GlobalState.Claim.priorConditionOfContents == 'Good'
                  ? 577
                  : GlobalState.Claim.priorConditionOfContents == 'Very Good'
                    ? 637
                    : 0
          }
        />
        {/* Is Risk under construction */}
        <PDFValue
          value={
            marked
          }
          bottom={110}
          left={GlobalState.Claim.isUnderConstruction ? 253 : 305}
        />
        {/* Date of construction */}
        {/* Construction Date */}
        <PDFValue
          value={utils.convertUnix(GlobalState.Claim.constructionDate)}
          bottom={95}
          left={183}
        />
        {/* Pre-Firm / Post-Firm */}
        <PDFValue
          value={marked}
          bottom={69}
          left={GlobalState.Claim.postFirm == 0 ? 290 : 210}
        />
        {/* FIRM Date */}
        <PDFValue
          value={utils.convertUnix(GlobalState.Claim.firmDate)}
          bottom={75}
          left={128}
        />
      </ImageBackground>
    </ViewShot>
  );
}
export const PreliminaryReportPg1 = React.forwardRef(RefPreliminaryReportPg1);