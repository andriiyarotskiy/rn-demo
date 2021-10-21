import React, {useEffect, useState} from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import {StyleSheet, useWindowDimensions, View, Dimensions} from 'react-native';
import {PanGestureHandler, ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ModalDropDown = ({sheetRef, children}: any) => {
  const ref = React.useRef(null);
  const scrollRef = React.useRef(null);

  const [enable, setEnable] = useState(true);
  const [show, setShow] = useState(false);

  const _onScrollDown = (event: any) => {
    if (!enable) {
      return;
    }
    const {translationY} = event.nativeEvent;

    if (translationY > 10) {
      sheetRef.current.snapTo(2);
    }
  };

  const _onScroll = ({nativeEvent}: any) => {
    if (nativeEvent.contentOffset.y < 10 && !enable) {
      setEnable(true);
    }
    if (nativeEvent.contentOffset.y > 10 && enable) {
      sheetRef.current.snapTo(1);
      setEnable(false);
    }
  };

  const insets = useSafeAreaInsets();

  const screenHeight = useWindowDimensions().height;

  const [customScreenHeight, setCustomScreenHeight] = useState(screenHeight);

  useEffect(() => {
    if (insets) {
      setCustomScreenHeight(prev => prev - insets.top);
    }
  }, [insets]);

  const renderContent = () => (
    <>
      <View style={styles.listContainer}>
        <ScrollView
          ref={scrollRef}
          onScroll={_onScroll}
          waitFor={enable ? ref : scrollRef}
          scrollEventThrottle={16}>
          <PanGestureHandler
            enabled={enable}
            ref={ref}
            activeOffsetY={5}
            failOffsetY={-5}
            onGestureEvent={_onScrollDown}>
            <View>{children}</View>
          </PanGestureHandler>
        </ScrollView>
      </View>
    </>
  );
  return (
    <>
      {show && <View style={styles.openedBackground} />}
      <BottomSheet
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        initialSnap={2}
        ref={sheetRef}
        onOpenStart={() => {
          setShow(true);
        }}
        onCloseEnd={() => {
          setShow(false);
        }}
        snapPoints={[450, customScreenHeight * 0.91, 0]}
        renderContent={renderContent}
      />
    </>
  );
};

export default ModalDropDown;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  item: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 64,
    backgroundColor: 'grey',
    marginBottom: 20,
  },
  openedBackground: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
    left: '-4%',
    top: '-19.7%',
    backgroundColor: 'rgba(31, 33, 40, 0.8)',
  },
  listContainer: {
    backgroundColor: '#242731',
    height: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
