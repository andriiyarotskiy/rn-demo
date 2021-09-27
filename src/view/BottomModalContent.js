import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {PanGestureHandler, ScrollView} from 'react-native-gesture-handler';

const BottomModalContent = ({sheetRef}) => {
  const ref = React.useRef(null);
  const scrollRef = React.useRef(null);

  const [enable, setEnable] = useState(true);

  const _onScrollDown = event => {
    if (!enable) {
      return;
    }
    const {translationY} = event.nativeEvent;

    if (translationY > 0) {
      sheetRef.current.snapTo(2);
    }
  };

  const _onScroll = ({nativeEvent}) => {
    if (nativeEvent.contentOffset.y < 0 && !enable) {
      setEnable(true);
    }
    if (nativeEvent.contentOffset.y > 0 && enable) {
      sheetRef.current.snapTo(1);
      setEnable(false);
    }
  };

  return (
    <View style={styles.listContainer}>
      <ScrollView
        ref={scrollRef}
        onScroll={_onScroll}
        waitFor={enable ? ref : scrollRef}
        scrollEventThrottle={40}>
        <PanGestureHandler
          enabled={enable}
          ref={ref}
          activeOffsetY={5}
          failOffsetY={-5}
          onGestureEvent={_onScrollDown}>
          <View>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <View key={item.toString()} style={styles.item} />
            ))}
          </View>
        </PanGestureHandler>
      </ScrollView>
    </View>
  );
};

export default BottomModalContent;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: '100%',
  },
});
