import React from 'react';
import {View} from 'react-native';
import DetailedActivityCard from './DetailedActivityCard';

const DetailedActivityList = (props: any) => {
  return (
    <>
      {props.list.map((item: number) => (
        <View key={Math.random().toString()}>
          <DetailedActivityCard item={item} />
        </View>
      ))}
    </>
  );
};

export default DetailedActivityList;
