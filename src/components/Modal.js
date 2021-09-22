import React, {useEffect, useState} from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import {Button, StyleSheet, useWindowDimensions, View} from 'react-native';
import {PanGestureHandler, ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// const screenHeight = Dimensions.get('window').height;

const ModalDropDown = ({isModalVisible, toggleModal}) => {
  const sheetRef = React.useRef(null);
  const ref = React.useRef(null);
  const scrollRef = React.useRef(null);

  const [enable, setEnable] = useState(true);

  // useEffect(() => {
  //   if (testOffset > 3 && scrollDirection === 'up') {
  //     sheetRef.current.snapTo(0);
  //   } else if (testOffset > 3 && scrollDirection === 'down') {
  //     sheetRef.current.snapTo(1);
  //   } else if (scrollDirection === 'down' && testOffset === 0) {
  //     sheetRef.current.snapTo(2);
  //   }
  // }, [testOffset, scrollDirection]);
  // let offset = 0;

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

  const insets = useSafeAreaInsets();

  const screenHeight = useWindowDimensions().height; // 24 48

  const [testHeight, setTestHeight] = useState(screenHeight);
  useEffect(() => {
    if (insets) {
      setTestHeight(prev => prev - insets.top);
    }
  }, [insets]);

  const renderContent = () => (
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
  return (
    <>
      <View style={styles.container}>
        <Button
          onPress={() => {
            sheetRef.current.snapTo(2);
          }}
          title="Hide Modal"
        />
        <Button
          title="Open Bottom Sheet"
          onPress={() => {
            sheetRef.current.snapTo(0);
          }}
        />
      </View>

      <BottomSheet
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        initialSnap={2}
        ref={sheetRef}
        snapPoints={[450, testHeight, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
};

export default ModalDropDown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    alignSelf: 'center',
    width: '90%',
    height: 100,
    backgroundColor: 'grey',
    marginBottom: 20,
  },
  listContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: '100%',
  },
});
