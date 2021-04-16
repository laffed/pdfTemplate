import React from 'react'
import {View, Text, Image} from 'react-native';
import {PDFPhotoObj} from '../../../Types';
import utils from 'AdjustMint/assets/utils';

type PDFPhotosProps = {
  twoPhotos: PDFPhotoObj[];
}
export function PDFPhotos({twoPhotos}: PDFPhotosProps) {

  return (
    <View style={{backgroundColor: 'white'}} key={Math.random()}>
      {twoPhotos.map((photo, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Image
              resizeMode="contain"
              source={{
                uri: photo.uri
              }}
              style={{width: '100%', height: 300}}
            />
          </View>
          <View style={{flex: 0.6, paddingLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {photo.location}
            </Text>

            <Text style={{fontSize: 16}}>
              {photo.label}
            </Text>
            <Text style={{paddingVertical: 5}}>
              {photo.description}
            </Text>
            <Text>{`Taken ${utils.convertUnix(photo.timeStamp)}`}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}