import React, {useEffect, useRef, useState} from 'react';
// import Modal from 'react-native-modal';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Button, Dimensions, FlatList, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ModalDropDown = ({isModalVisible, toggleModal}) => {
  const [testOffset, setTestOffset] = useState(0);
  // console.log('testOffset', testOffset);
  const [scrollDirection, setScrollDirection] = useState(null);
  useEffect(() => {
    if (testOffset > 3 && scrollDirection === 'up') {
      sheetRef.current.snapTo(0);
    } else if (testOffset > 3 && scrollDirection === 'down') {
      sheetRef.current.snapTo(1);
    } else if (scrollDirection === 'down' && testOffset === 0) {
      sheetRef.current.snapTo(2);
      console.log('UNCLEAR', testOffset);
    }
    console.log('scrollDirection', scrollDirection);
  }, [testOffset, scrollDirection]);
  let offset = 0;
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: '100%',
      }}>
      <ScrollView
        // scrollEventThrottle={200}
        onScroll={event => {
          // console.log('event.nativeEvent.contentOffset.y', event.nativeEvent.contentOffset.y);
          const currentOffset = event.nativeEvent.contentOffset.y;

          // const direction = currentOffset > offset ? 'down' : 'up';
          // if (event.nativeEvent.contentOffset.y > 0) {
          //   // setIsActiveScroll(true);
          //   // // console.log('1', event.nativeEvent.contentOffset.y);
          //   sheetRef.current.snapTo(1);
          // } else {
          //   // setIsActiveScroll(false)
          //   // sheetRef.current.snapTo(0);
          // }

          const dif = currentOffset - (offset || 0);

          if (Math.abs(dif) < 3) {
            setScrollDirection('unclear');
            console.log('unclear');
          } else if (dif < 0) {
            setScrollDirection('up');
            // sheetRef.current.snapTo(1);
          } else {
            setScrollDirection('down');
          }
          offset = currentOffset;
          setTestOffset(Math.abs(dif));
        }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <View
            key={item.toString()}
            style={{
              alignSelf: 'center',
              width: '90%',
              height: 100,
              backgroundColor: 'grey',
              marginBottom: 20,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );

  const sheetRef = React.useRef(null);
  const listRef = useRef();

  const [allowScrolling, setAllowScrolling] = useState(false);
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('screen').height;
  // const modalHeight = (screenHeight - (insets.top + insets.bottom)) * 0.7;

  return (
    <>
      <View
        style={{
          flex: 1,
          paddingTop: 50,
          paddingBottom: insets.bottom,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Button
          onPress={() => {
            sheetRef.current.snapTo(2);
          }}
          title="Hide Modal"
        />
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        />
      </View>

      <BottomSheet
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        initialSnap={2}
        ref={sheetRef}
        snapPoints={[450, '80%', 0]}
        borderRadius={10}
        renderContent={renderContent}
      />

      {/*<BottomSheet*/}
      {/*  // snapPoints={[0, hp('60%'), ACTUAL_SCREEN_HEIGHT]}*/}
      {/*  // initialSnap={1}*/}
      {/*  onOpenEnd={() => {*/}
      {/*    this.setState({allowScrolling: true});*/}
      {/*  }}*/}
      {/*  enabledInnerScrolling={true}*/}
      {/*  onCloseStart={() => this.setState({allowScrolling: false})}*/}
      {/*  onCloseEnd={() => this.props.onBackdropPress()}*/}
      {/*  enabledGestureInteraction={true}*/}
      {/*  overdragResistanceFactor={0}*/}
      {/*  enabledHeaderGestureInteraction={true}*/}
      {/*  enabledContentGestureInteraction={!this.state.allowScrolling}*/}
      {/*  renderContent={this.renderContent}*/}
      {/*  renderHeader={this.renderHeader} />*/}
    </>
  );
};

export default ModalDropDown;

const SomeList = () => {
  const flatListRef = useRef();

  return <></>;
};
