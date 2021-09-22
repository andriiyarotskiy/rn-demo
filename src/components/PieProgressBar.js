import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as Progress from 'react-native-progress';

const PieProgressBar = props => {
  const CURRENT_PROGRESS = (0.7 / 100) * props.currentProgress;
  const SIZE = 120;
  const THICKNESS = 8;
  return (
    <View>
      <Progress.Circle
        style={PieProgressBarStyle.unfilledContainer}
        borderWidth={0}
        color="#191B20"
        thickness={THICKNESS}
        strokeCap={'round'}
        useNativeDriver={true}
        progress={0.7}
        size={SIZE}
        indeterminate={false}
      />
      <View style={PieProgressBarStyle.filledContainer}>
        <Progress.Circle
          borderWidth={0}
          color={'white'}
          useNativeDriver={true}
          thickness={THICKNESS}
          strokeCap={'round'}
          showsText
          formatText={p => {
            return props.currentProgress / 100;
          }}
          textStyle={PieProgressBarStyle.progressText}
          progress={CURRENT_PROGRESS}
          size={SIZE}
          indeterminate={false}
        />
      </View>
      <View style={PieProgressBarStyle.title}>
        <Text style={PieProgressBarStyle.titleText}>{props.title}</Text>
      </View>
    </View>
  );
};

export default PieProgressBar;

const PieProgressBarStyle = StyleSheet.create({
  unfilledContainer: {
    transform: [{rotate: '-125deg'}],
  },
  filledContainer: {
    position: 'absolute',
    transform: [{rotate: '-125deg'}],
  },
  progressText: {
    fontWeight: 'bold',
    transform: [{rotate: '125deg'}],
  },
  title: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  titleText: {
    textAlign: 'center',
    color: '#808191',
    fontSize: 9,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
