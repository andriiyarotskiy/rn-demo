import React, {useRef, useState} from 'react';
import {
  Button,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  UIManager,
  useWindowDimensions,
  View,
} from 'react-native';
// @ts-expect-error
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import GestureRecognizer from 'react-native-swipe-gestures';

const RANGE = 24;
const initialDate = '2021-09-12';

const Calendar = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  LocaleConfig.locales.en = {
    formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
    monthNames: monthNames,
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep.',
      'Oct',
      'Nov',
      'Dec',
    ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: '',
  };

  LocaleConfig.defaultLocale = 'en';

  const [selected, setSelected] = useState('');

  const markedDates = {
    [selected]: {
      selected: true,
      disableTouchEvent: true,
      selectedColor: '#5E60CE',
      selectedTextColor: 'white',
    },
  };

  const onDayPress = day => {
    setSelected(day.dateString);
  };
  const {width} = useWindowDimensions();
  const calendarWidth = (width / 100) * 83.33;
  // console.log(calendarWidth);

  const calendarRef = useRef(null);

  const renderCustomHeader = date => {
    const header = date.toString('MMMM yyyy');
    const [month, year] = header.split(' ');
    const textStyle = {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    };

    return (
      <View style={styles.header}>
        <Text style={[styles.month, textStyle]}>{`${month}`}</Text>
        {/*<Text style={[styles.year, textStyle]}>{selected ? selected : year}</Text>*/}
      </View>
    );
  };

  const renderDayComponent = ({date, state}) => {
    const borderColor = {
      borderColor: date.dateString === selected ? 'purple' : 'transparent',
    };
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setSelected(date.dateString);
          // setSelectedDate(date.dateString);
          // _handleOnDayPress(date);
        }}>
        <View style={[styles.calendarDay, borderColor]}>
          <Text style={styles.calendarDayText}>{date.day}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{width: '100%', height: '80%', alignItems: 'center'}}>
      <GestureRecognizer
        onSwipe={(gestureName, gestureState) => {
          const {dx} = gestureState;
          if (dx > 0) {
            calendarRef.current.addMonth(-1);
          }
          if (dx < 0) {
            calendarRef.current.addMonth(1);
          }
        }}>
        <CalendarList
          ref={calendarRef}
          testID={'horizontalList'}
          horizontal
          animateScroll={true}
          dayComponent={renderDayComponent}
          calendarWidth={calendarWidth}
          scrollEnabled={false}
          current={initialDate}
          pastScrollRange={RANGE}
          futureScrollRange={RANGE}
          renderHeader={renderCustomHeader}
          theme={theme}
          onDayPress={onDayPress}
          markedDates={markedDates}
        />
      </GestureRecognizer>
      <View style={{flexDirection: 'row'}}>
        <Button
          title={'prev'}
          onPress={() => {
            calendarRef.current.addMonth(-1);
          }}
        />
        <Button
          title={'next'}
          onPress={() => {
            calendarRef.current.addMonth(1);
          }}
        />
      </View>
    </View>
  );
};

const theme = {
  calendarBackground: 'red',
  dotColor: 'purple',
  selectedDotColor: '#ffffff',
  // 'stylesheet.calendar.header': {
  //   dayHeader: {
  //     fontWeight: '600',
  //     color: '#48BFE3',
  //   },
  // },
  // 'stylesheet.day.basic': {
  //   today: {
  //     borderColor: '#48BFE3',
  //     borderWidth: 0.8,
  //   },
  //   todayText: {
  //     color: '#5390D9',
  //     fontWeight: '800',
  //   },
  // },
};

export default Calendar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  calendarDay: {
    backgroundColor: 'orange',
    width: 36,
    height: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  calendarDayText: {
    color: 'white',
  },
});
