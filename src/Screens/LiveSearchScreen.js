import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from 'react-native';

const LiveSearchScreen = ({navigation}) => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [searchTimer, setSearchTimer] = useState(null);
  const [bottomHeight, setBottomHeight] = useState(true);
  // console.log('results', results.length);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      showKeyboard,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      hideKeyboard,
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  });

  const showKeyboard = () => {
    setBottomHeight(false);
  };

  const hideKeyboard = () => {
    setBottomHeight(true);
  };

  const renderItemList = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => handleItemPress(item.id)}>
        <View
          style={[
            styles.item,
            {
              borderWidth: 1,
              borderColor: item.selected ? 'yellow' : 'transparent',
            },
          ]}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemText}>{item.username}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleText = text => {
    if (searchTimer) {
      clearTimeout(searchTimer);
    }
    setInput(text);
    setSearchTimer(
      setTimeout(() => {
        fetchData(text);
      }, 2000),
    );
  };

  const fetchData = async text => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${text}`);
    res
      .json()
      .then(res => {
        console.log(res);
        setResults(res.slice(0, 5));
      })
      .catch(err => {
        setResults([]);
        console.log(err);
      });
  };

  const handleItemPress = id => {
    const updateResults = results.map(user =>
      user.id === id ? {...user, selected: true} : {...user, selected: false},
    );
    setResults(updateResults);
  };

  const screenHeight = useWindowDimensions().height;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.list}>
            <FlatList
              style={{}}
              keyExtractor={item => item.id.toString()}
              data={results}
              inverted={true}
              renderItem={renderItemList}
              ItemSeparatorComponent={() => <View style={{height: 20}} />}
            />
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.headerBottom}>
              <Text style={{color: '#ffff', fontSize: 18, fontWeight: 'bold'}}>
                Add Teammember
              </Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                value={input}
                onChangeText={handleText}
              />
            </View>
            <View style={[styles.btnWrapper]}>
              <TouchableOpacity style={{}}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>confirm</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  inner: {
    width: '92%',
    alignSelf: 'center',
    // paddingHorizontal: 24,
    flex: 1,
    // justifyContent: 'space-around',
  },
  // header: {
  //   fontSize: 36,
  //   marginBottom: 48,
  // },
  // textInput: {
  //   height: 40,
  //   borderColor: '#000000',
  //   borderBottomWidth: 1,
  //   marginBottom: 36,
  // },
  // btnContainer: {
  //   backgroundColor: 'white',
  //   marginTop: 12,
  // },
  // my style
  list: {
    flex: 0.62,
    marginBottom: '4%',
  },

  item: {
    height: 112,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 16,
  },
  itemText: {
    textAlign: 'center',
    color: '#fff',
  },

  inputWrapper: {
    // marginTop: '5%',
    marginBottom: '10%',
  },
  inputStyle: {
    color: '#fff',
    borderRadius: 16,
    height: 64,
    backgroundColor: 'black',
  },

  bottomContainer: {
    flex: 0.38,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: '5%',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },

  headerBottom: {
    marginTop: '5%',
    marginBottom: '7%',
  },

  btnWrapper: {
    marginTop: '8%',
    width: '100%',
    alignSelf: 'center',
  },
  btn: {
    height: 64,
    backgroundColor: 'gold',
    borderRadius: 16,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});

export default LiveSearchScreen;
