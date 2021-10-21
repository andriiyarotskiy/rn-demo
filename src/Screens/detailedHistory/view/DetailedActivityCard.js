import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const DetailedActivityCard = (props: any) => {
  return (
    <TouchableOpacity /* It should Be TouchableOpacity, if you set View the scroll will not work correctly */
      activeOpacity={1}
      style={DetailedActivityCardStyle.cardContainer}>
      <View style={DetailedActivityCardStyle.card}>
        <View
          key={props.item.toString()}
          style={DetailedActivityCardStyle.itemContent}>
          <View style={DetailedActivityCardStyle.itemIcon} />
          <View style={DetailedActivityCardStyle.itemText}>
            <View style={DetailedActivityCardStyle.itemTopRow}>
              <Text style={DetailedActivityCardStyle.textTop}>Heart Rate</Text>
              <View style={DetailedActivityCardStyle.topRightBlock}>
                <Text style={DetailedActivityCardStyle.textTop}>123</Text>
                <Text style={DetailedActivityCardStyle.textTop}>172</Text>
              </View>
            </View>
            <View style={DetailedActivityCardStyle.itemBottomRow}>
              <Text style={DetailedActivityCardStyle.textBottomLeft}>
                min/km
              </Text>
              <Text style={DetailedActivityCardStyle.textBottomRight}>
                {/*+{`${3}`}%*/}
                {/*{<UpBadgeIcon />}*/}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DetailedActivityCard;

const DetailedActivityCardStyle = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  card: {
    paddingHorizontal: '5%',
    backgroundColor: '#191B20',
    marginBottom: 10,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
  itemContent: {
    height: 64,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: '15%',
  },
  itemText: {
    width: '85%',
  },
  itemTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  topRightBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  itemBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  textTop: {
    fontFamily: 'Rubik-Medium',
    fontSize: 13,
    color: '#fff',
  },
  textBottomLeft: {
    fontFamily: 'Rubik-Medium',
    fontSize: 9,
    color: '#808191',
    textTransform: 'uppercase',
  },
  textBottomRight: {
    fontFamily: 'Rubik-Medium',
    fontSize: 9,
  },
});
