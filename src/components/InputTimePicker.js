import React, {useEffect, useRef, useState} from 'react';
import {Keyboard, Text, TextInput, View, StyleSheet} from 'react-native';
import TimeIcon from '../icons/TimeIcon';

const InputTimePicker = React.memo(props => {
  const [state, setState] = useState({
    leftValue: '',
    rightValue: '',
  });

  const firstInputRef = useRef();
  const secondInputRef = useRef();

  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    if (!!state.leftValue || !!state.rightValue) {
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(true);
    }
  }, [state.leftValue, state.rightValue]);

  useEffect(() => {
    const isEmptyLeftValue =
      secondInputRef.current.isFocused() &&
      !state.leftValue &&
      state.rightValue.length === 2;
    if (isEmptyLeftValue) {
      setState({...state, leftValue: '00'});
    }
    props.onChangeText(`${state.leftValue}${state.rightValue}`);
  }, [props, state]);

  const des = state.leftValue.length >= 1 || state.rightValue.length >= 1;

  return (
    <View style={styles.inputWrapper}>
      <View style={styles.iconWrap}>
        <TimeIcon />
      </View>

      {showPlaceholder && !des && (
        <View style={styles.placeholderStyle}>
          <Text style={{opacity: 0.5}}>{props.placeholder}</Text>
        </View>
      )}
      <View style={styles.inputsContainer}>
        <TextInput
          selectTextOnFocus
          ref={firstInputRef}
          style={styles.inputStyleLeft}
          keyboardType={'numeric'}
          value={state.leftValue}
          maxLength={2}
          onChangeText={val => {
            setState({...state, leftValue: val});
            if (val.length === 2) {
              secondInputRef.current.focus();
            }
          }}
        />
        {!showPlaceholder && <Text style={{bottom: 1}}>{':'}</Text>}
        {/*{state.leftValue || state.rightValue.length !== 0 ? (*/}
        {/*  <Text style={{bottom: 1}}>{':'}</Text>*/}
        {/*) : null}*/}
        <TextInput
          selectTextOnFocus
          ref={secondInputRef}
          maxLength={2}
          style={styles.inputStyleRight}
          keyboardType={'numeric'}
          value={state.rightValue}
          onChangeText={val => {
            setState({...state, rightValue: val});
            if (val.length === 0) {
              firstInputRef.current.focus();
            }
          }}
        />
      </View>
      {des && (
        <View style={styles.description}>
          <Text>{props.description}</Text>
        </View>
      )}
    </View>
  );
});

export default InputTimePicker;

const styles = StyleSheet.create({
  inputWrapper: {
    height: 64,
    width: '48%',
    flexDirection: 'row',
    backgroundColor: 'brown',
    borderRadius: 16,
  },
  inputsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrap: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    left: '15%',
  },

  inputStyleLeft: {
    right: -3,
    width: '51%',
    height: '100%',
    textAlign: 'right',
  },
  inputStyleRight: {
    left: -3,
    height: 64,
    width: '49%',
    textAlign: 'left',
  },

  placeholderStyle: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    left: '40%',
  },
  description: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    left: '65%',
  },
});
