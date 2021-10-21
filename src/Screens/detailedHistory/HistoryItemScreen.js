import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PieProgressBar from '../../components/PieProgressBar';
import MapDisplay from '../MapDisplay';
import DetailedActivityList from './view/DetailedActivityList';

const HistoryItemScreen = () => {
  // const activity = useRoute<RouteProp<ActivityScreenNavigationParams, "params">>().params;
  return (
    // <ModalContainer
    //   contentHeight={"90%"}>

    <View style={styles.container}>
      {/*<ScrollView>*/}

      <View style={styles.header}>
        <Text style={styles.headerText}>Training Details</Text>
      </View>

      <View style={styles.progressContainer}>
        <PieProgressBar currentProgress={80} title="aerobic" />
        <PieProgressBar currentProgress={50} title="anaerobic" />
      </View>

      <View style={styles.mapContainer}>
        <View style={styles.mapHeader}>
          <Text style={styles.sectionTitle}>Location</Text>
        </View>
        <View style={styles.mapWrapper}>
          <MapDisplay />
        </View>
      </View>

      <View style={{}}>
        <View style={styles.headerInfoList}>
          <Text style={styles.sectionTitle}>Information</Text>
          <View style={styles.headerInfoRight}>
            <Text style={styles.sectionSubTitle}>Avg</Text>
            <Text style={styles.sectionSubTitle}>Max</Text>
          </View>
        </View>
        <DetailedActivityList list={[1, 2, 3, 4, 5, 6]} />
      </View>

      {/*</ScrollView>*/}
    </View>

    // </ModalContainer>
  );
};

export default HistoryItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    paddingVertical: '8%',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  progressContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: '5%',
    paddingHorizontal: '5%',
    borderBottomColor: '#36393F',
    borderBottomWidth: 1,
  },
  mapContainer: {
    borderBottomColor: '#36393F',
    borderBottomWidth: 1,
    flex: 0.39,
  },
  mapHeader: {
    paddingVertical: '5%',
  },
  mapWrapper: {
    flex: 1,
    height: 140,
    marginBottom: '5%',
  },
  headerInfoList: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: '5%',
  },
  headerInfoRight: {
    paddingRight: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '36%',
  },
  sectionTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 13,
    color: '#fff',
  },
  sectionSubTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 13,
    color: '#808191',
  },
});
