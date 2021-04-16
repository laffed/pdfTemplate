import React from 'react';
import utils from 'AdjustMint/assets/utils';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import ViewShot from 'react-native-view-shot';
import PDFValue from '../PDFValue';
import { useOvermind } from '../../../overmind';
import { getSignatureValue } from '../../../assets/utility'
import prelim2Bg from '../../../assets/img/prelim2.jpg'

//TODO handle this.inArr. Damn you Brett
//TODO handle not needing to pass in these other shitty props
function RefPreliminaryReportPg2(props, ref) {
  const marked = '\u25FE';
  const GlobalState = useOvermind().state;

  const getNfipLicense = () => {
    for (let i in GlobalState.Claim.certifications) {
      if (GlobalState.Claim.certifications[i]['state'] === 'NFIP License') {
        let nfipLicenseNumber = GlobalState.Claim.certifications[i]['licenseNumber'];
        return nfipLicenseNumber;
      }
    }
    return '';
  }

  const enteredDate = new Date(GlobalState.Claim.dateWaterEntered);
  const recededDate = new Date(GlobalState.Claim.dateWaterReceded);

  let waterEnteredDay = enteredDate.getDate();
  let waterRecededDay = recededDate.getDate();
  let waterEnteredHour = enteredDate.getHours();
  let waterRecededHour = recededDate.getHours();
  let waterEnteredMin = enteredDate.getMinutes();
  let waterRecededMin = recededDate.getMinutes();
  let waterEnteredTwelveHour = waterEnteredHour > 12 ? waterEnteredHour - 12 : waterEnteredHour;
  let waterRecededTwelveHour = waterRecededHour > 12 ? waterRecededHour - 12 : waterRecededHour;
  let daysFlooded = waterRecededDay - waterEnteredDay;
  let hoursFlooded = waterRecededHour - waterEnteredHour;
  let minutesFlooded = waterRecededMin - waterEnteredMin;

  return (
    <ViewShot
      key={Math.random()}
      ref={ref}
      options={{ format: 'png', quality: 0.9 }}
      style={{ position: 'absolute', left: 0, zIndex: 20 }}
    >
      <ImageBackground
        source={prelim2Bg}
        style={{ width: 815, height: 1056 }}
      >
        {/* Top of page info */}
        {/* Property Address */}
        <PDFValue
          value={`${GlobalState.Claim.lossStreet1}`}
          top={103}
          left={145}
          style={{ fontSize: 13 }}
        />
        {/* Policy Number */}
        <PDFValue
          value={
            GlobalState.Claim.policyNumber.length > 0
              ? GlobalState.Claim.policyNumber
              : ''
          }
          top={103}
          left={612}
          style={{ fontSize: 13 }}
        />
        {/* City */}
        <PDFValue
          value={GlobalState.Claim.lossCity}
          top={124}
          left={70}
          style={{ fontSize: 13 }}
        />
        {/* State */}
        <PDFValue
          value={GlobalState.Claim.lossStateName}
          top={124}
          left={320}
          style={{ fontSize: 13 }}
        />
        {/* ZIP */}
        <PDFValue
          value={GlobalState.Claim.lossZip}
          top={124}
          left={430}
          style={{ fontSize: 13 }}
        />
        {/* Date of loss */}
        <PDFValue
          value={utils.convertUnix(GlobalState.Claim.lossDate)}
          top={124}
          left={600}
          style={{ fontSize: 13 }}
        />
        {/* Risk Continued */}
        {/* FOUNDATION STRUCTURE */}
        {/* PILES */}

        {GlobalState.Claim.foundationPilesType.indexOf('Wood') !== -1 && (
          <PDFValue value={marked} top={175} left={95} />
        )}

        {GlobalState.Claim.foundationPilesType.indexOf('Concrete slab') !== -1 && (
          <PDFValue value={marked} top={175} left={190} />
        )}

        {GlobalState.Claim.foundationPilesType.indexOf('Other') !== -1 && (
          <PDFValue value={marked} top={175} left={302} />
        )}

        {GlobalState.Claim.foundationPilesType.indexOf('Other') !== -1 && (
          <PDFValue value={marked} top={175} left={372} />
        )}

        {/* Other specify */}
        <PDFValue value={GlobalState.Claim.otherPilesMaterial} top={175} left={440} />

        {/* PIERS */}

        {GlobalState.Claim.foundationPiersType.indexOf('Reinforced concrete') !== -1 && (
          <PDFValue value={marked} top={195} left={95} />
        )}

        {GlobalState.Claim.foundationPiersType.indexOf('Reinforced block') !== -1 && (
          <PDFValue value={marked} top={195} left={238} />
        )}

        {GlobalState.Claim.foundationPiersType.indexOf('Unreinforced block') !== -1 && (
          <PDFValue value={marked} top={195} left={365} />
        )}

        {GlobalState.Claim.foundationPiersType.indexOf('Brick') !== -1 && (
          <PDFValue value={marked} top={195} left={500} />
        )}

        {GlobalState.Claim.foundationPiersType.indexOf('Other') !== -1 && (
          <PDFValue value={marked} top={195} left={565} />
        )}

        {/* Other specify */}
        <PDFValue value={GlobalState.Claim.otherPierMaterial} top={198} left={635} />

        {/* WALLS */}
        {/* Reinforced concrete */}

        {GlobalState.Claim.foundationWallsType.indexOf('Reinforced concrete') !== -1 && (
          <PDFValue value={marked} top={219} left={95} />
        )}

        {GlobalState.Claim.foundationWallsType.indexOf('Block') !== -1 && (
          <PDFValue value={marked} top={219} left={238} />
        )}

        {GlobalState.Claim.foundationWallsType.indexOf('Unreinforced block') !== -1 && (
          <PDFValue value={marked} top={219} left={308} />
        )}

        {GlobalState.Claim.foundationWallsType.indexOf('Reinforced concrete shear') !== -1 && (
          <PDFValue value={marked} top={219} left={443} />
        )}

        {GlobalState.Claim.foundationWallsType.indexOf('Treated plywood') !== -1 && (
          <PDFValue value={marked} top={219} left={619} />
        )}

        {GlobalState.Claim.foundationWallsType.indexOf('Unreinforced block') !== -1 && (
          <PDFValue value={marked} top={219} left={238} />
        )}

        {GlobalState.Claim.foundationWallsType.indexOf('Brick') !== -1 && (
          <PDFValue value={marked} top={242} left={116} />
        )}

        {GlobalState.Claim.foundationWallsType.indexOf('Other') !== -1 && (
          <PDFValue value={marked} top={242} left={182} />
        )}

        {/* Other specify */}
        <PDFValue value={GlobalState.Claim.otherWallMaterial} top={245} left={250} />

        {/* EXTERIOR WALL STRUCTURE */}

        {GlobalState.Claim.exteriorWallStructure.indexOf('Reinforced concrete') !== -1 && (
          <PDFValue value={marked} top={288} left={54} />
        )}

        {GlobalState.Claim.exteriorWallStructure.indexOf('Concrete block') !== -1 && (
          <PDFValue value={marked} top={288} left={190} />
        )}

        {GlobalState.Claim.exteriorWallStructure.indexOf('Wood stud') !== -1 && (
          <PDFValue value={marked} top={288} left={300} />
        )}

        {GlobalState.Claim.exteriorWallStructure.indexOf('Steel and glass') !== -1 && (
          <PDFValue value={marked} top={310} left={54} />
        )}

        {GlobalState.Claim.exteriorWallStructure.indexOf('Brick and stone') !== -1 && (
          <PDFValue value={marked} top={310} left={190} />
        )}

        {GlobalState.Claim.exteriorWallStructure.indexOf('Other') !== -1 && (
          <PDFValue value={marked} top={332} left={54} />
        )}

        {/* Other specify */}
        <PDFValue value={GlobalState.Claim.otherWallStructure} top={335} left={121} />

        {/* EXTERIOR WALL SURFACE TREATMENT */}
        {/* Unfinished */}

        {GlobalState.Claim.exteriorWallSurfaceTreatment.indexOf('Unfinished') !== -1 && (
          <PDFValue value={marked} top={288} left={413} />
        )}

        {GlobalState.Claim.exteriorWallSurfaceTreatment.indexOf('Stone or brick veneer') !== -1 && (
          <PDFValue value={marked} top={288} left={500} />
        )}

        {GlobalState.Claim.exteriorWallSurfaceTreatment.indexOf('Stucco') !== -1 && (
          <PDFValue value={marked} top={288} left={659} />
        )}

        {GlobalState.Claim.exteriorWallSurfaceTreatment.indexOf('Wood siding') !== -1 && (
          <PDFValue value={marked} top={308} left={413} />
        )}

        {GlobalState.Claim.exteriorWallSurfaceTreatment.indexOf('Metal sheathing/siding') !== -1 && (
          <PDFValue value={marked} top={308} left={513} />
        )}

        {GlobalState.Claim.exteriorWallSurfaceTreatment.indexOf('Vinyl sheathing/siding') !== -1 && (
          <PDFValue value={marked} top={329} left={413} />
        )}

        {GlobalState.Claim.exteriorWallSurfaceTreatment.indexOf('Other') !== -1 && (
          <PDFValue value={marked} top={329} left={573} />
        )}

        {/* Other specify */}
        <PDFValue
          value={GlobalState.Claim.otherExteriorSurfaceTreatment}
          top={333}
          left={640}
        />
        {/* CONTENTS ARE: */}
        <PDFValue
          value={
            utils.hasValue(GlobalState.Claim.contentsClassification) !== false
            && marked
          }
          top={GlobalState.Claim.contentsClassification ? 382 : 406}
          left={55}
        />
        {/* CONTENTS LOCATED IN: */}
        {/* Basement */}
        <PDFValue
          value={GlobalState.Claim.contentsLocated.length > 0 && marked}
          top={
            GlobalState.Claim.contentsLocated == 'Basement'
              ? 382
              : GlobalState.Claim.contentsLocated == 'First floor'
                ? 382
                : GlobalState.Claim.contentsLocated == 'Basement and first floor'
                  ? 382
                  : GlobalState.Claim.contentsLocated == 'First floor and above'
                    ? 406
                    : GlobalState.Claim.contentsLocated == 'Second floor and above'
                      ? 406
                      : null
          }
          left={
            GlobalState.Claim.contentsLocated == 'Basement'
              ? 413
              : GlobalState.Claim.contentsLocated == 'First floor'
                ? 499
                : GlobalState.Claim.contentsLocated == 'Basement and first floor'
                  ? 580
                  : GlobalState.Claim.contentsLocated == 'First floor and above'
                    ? 413
                    : GlobalState.Claim.contentsLocated == 'Second floor and above'
                      ? 580
                      : null
          }
        />

        {/* Nearest body of water to the insured building: */}
        <PDFValue
          value={
            GlobalState.Claim.nearestBodyOfWater
          }
          top={470}
          left={310}
        />
        {/* Distance to te insured building */}
        <PDFValue
          value={`${GlobalState.Claim.distanceFromBodyOfWaterFeet}'`}
          top={470}
          left={650}
        />
        {/* ORIGIN */}
        {/* Was there a general and temporary condition of flooding? */}

        <PDFValue
          value={
            marked
          }
          top={513}
          left={
            !GlobalState.Claim.wasThereFlooding
              ? 53
              : 273
          }
        />

        {/* Cause of loss */}

        {GlobalState.Claim.causeOfLoss.indexOf('Tidewater overflow') !== -1 && (
          <PDFValue value={marked} top={545} left={135} />
        )}

        {GlobalState.Claim.causeOfLoss.indexOf('Stream, river or lake overflow') !== -1 && (
          <PDFValue value={marked} top={545} left={282} />
        )}

        {GlobalState.Claim.causeOfLoss.indexOf('Alluvial fan overflow') !== -1 && (
          <PDFValue value={marked} top={545} left={487} />
        )}

        {GlobalState.Claim.causeOfLoss.indexOf('Accumulation of rainfall or snowmelt') !== -1 && (
          <PDFValue value={marked} top={568} left={135} />
        )}


        {/* Flood characteristics */}

        {GlobalState.Claim.floodCharacteristics.indexOf('Velocity flow') !== -1 && (
          <PDFValue value={marked} top={612} left={173} />
        )}
        {GlobalState.Claim.floodCharacteristics.indexOf('Low velocity flow/ponding') !== -1 && (
          <PDFValue value={marked} top={612} left={273} />
        )}
        {GlobalState.Claim.floodCharacteristics.indexOf('Wave action') !== -1 && (
          <PDFValue value={marked} top={612} left={460} />
        )}
        {/* Was there Erosion */}
        <PDFValue
          value={
            marked
          }
          top={614}
          left={
            GlobalState.Claim.erosionFound
              ? 676
              : 737
          }
        />
        {/* Did other than natural cause contribute to flooding? */}
        <PDFValue
          value={
            marked
          }
          top={661}
          left={
            GlobalState.Claim.otherThanNaturalCauseContribute
              ? 332
              : 396
          }
        />

        {/* DATE/TIME WATER ENTERED BUILDING */}
        {/* Date */}
        <PDFValue
          value={
            GlobalState.Claim.dateWaterEntered !== 0
            && utils.convertUnix(GlobalState.Claim.dateWaterEntered)
          }
          top={745}
          left={96}
          style={{ fontSize: 13 }}
        />
        {/* Time */}
        <PDFValue
          value={
            GlobalState.Claim.dateWaterEntered !== 0
            && `${waterEnteredTwelveHour}:${waterEnteredMin}`
          }
          bottom={293}
          left={221}
          style={{ fontSize: 13 }}
        />
        {/* AM/PM */}
        <PDFValue
          value={marked}
          bottom={283}
          left={waterEnteredHour < 12 ?
            297 : 350} />

        {/* DATE/TIME WATER RECEDED BUILDING */}
        {/* Date */}
        <PDFValue
          value={
            GlobalState.Claim.dateWaterReceded !== 0
            && utils.convertUnix(GlobalState.Claim.dateWaterReceded)
          }
          bottom={243}
          left={96}
          style={{ fontSize: 13 }}
        />
        {/* Time */}
        <PDFValue
          value={
            GlobalState.Claim.dateWaterReceded !== 0
            && `${waterRecededTwelveHour}:${waterRecededMin}`
          }
          bottom={243}
          left={221}
          style={{ fontSize: 13 }}
        />
        {/* AM/PM */}
        <PDFValue
          value={marked}
          bottom={233}
          left={waterRecededHour < 12 ?
            297 : 350} />

        {/* Days */}
        <PDFValue
          style={{
            display:
              daysFlooded > 0
                ? 'flex'
                : 'none',
          }}
          value={`${daysFlooded}`}
          bottom={190}
          left={100}
        />
        {/* Hours */}
        <PDFValue
          style={{
            display:
              hoursFlooded > 0
                ? 'flex'
                : 'none',
          }}
          value={`${hoursFlooded}`}
          bottom={190}
          left={190}
        />
        {/* Minutes */}
        <PDFValue
          style={{
            display:
              minutesFlooded > 0
                ? 'flex'
                : 'none',
          }}
          value={`${minutesFlooded}`}
          bottom={190}
          left={300}
        />
        {/* WATER WAVE HEIGHT IN INCHES */}
        {/* Main building */}
        {/* Exterior */}
        <PDFValue
          value={
            GlobalState.Claim.waterHeightMainBuildingExtInches.length > 0
            && `${GlobalState.Claim.waterHeightMainBuildingExtInches}"`
          }
          bottom={270}
          left={480}
        />
        {/* Interior */}
        <PDFValue
          value={
            GlobalState.Claim.waterHeightMainBuildingIntInches.length > 0
            && `${GlobalState.Claim.waterHeightMainBuildingIntInches}"`
          }
          bottom={270}
          right={80}
        />
        {/* Detatched Garage */}
        <PDFValue
          value={
            GlobalState.Claim.waterHeightDetachedGarageExtInches.length > 0
            && `${GlobalState.Claim.waterHeightDetachedGarageExtInches}"`
          }
          bottom={190}
          left={480}
        />
        {/* Interior */}
        <PDFValue
          value={
            GlobalState.Claim.waterHeightDetachedGarageIntInches.length > 0
            && `${GlobalState.Claim.waterHeightDetachedGarageIntInches}"`
          }
          bottom={190}
          right={80}
        />
        {/* Date */}
        <PDFValue
          value={utils.dateToday()}
          bottom={95}
          left={93}
          style={{ fontSize: 13 }}
        />
        {/* Adjuster Signature */}
        {/* {GlobalState.Claim.signatures.handbookAdjusterSignature.uri.length > 0 && (
          <View style={{ position: 'absolute', bottom: 148, left: 260 }}>
            <ImageBackground
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
              source={{
                uri: GlobalState.Claim.signatures.handbookAdjusterSignature.uri,
              }}
              imageStyle={{
                height: 80,
                width: 200,
                transform: [{ rotate: '-90deg' }],
              }}
            />
          </View>
        )} */}
        {/* FCN (NFIP License Number) */}
        <PDFValue
          value={getNfipLicense()}
          bottom={65}
          left={333}
          style={{ fontSize: 13 }}
        />
      </ImageBackground>
    </ViewShot>
  );
}
export const PreliminaryReportPg2 = React.forwardRef(RefPreliminaryReportPg2);
