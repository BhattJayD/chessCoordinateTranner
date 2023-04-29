import {Observer} from 'mobx-react';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import ThemeStore from '../store/ThemeStore';
import AppStore from '../store/AppStore';
import {storeToAsyncStorage} from '../utils/helper';
import StorageConstants from '../utils/StorageConstants';
const Theme = () => {
  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <FlatList
            data={ThemeStore.initialThemes}
            ItemSeparatorComponent={() => (
              <View style={styles.itemSeparatorStyle} />
            )}
            renderItem={({item, index}) => {
              return (
                <Observer>
                  {() => (
                    <TouchableHighlight
                      style={{
                        backgroundColor:
                          ThemeStore.defaultThemeIndex === index
                            ? '#146C948f'
                            : null,
                      }}
                      underlayColor={'#146C94'}
                      onPress={() => {
                        ThemeStore.setField('lightColor', item.lightColor);
                        ThemeStore.setField('darkColor', item.darkColor);
                        ThemeStore.setField('defaultThemeIndex', index);
                        storeToAsyncStorage(
                          StorageConstants.DEFAULT_THEME,
                          JSON.stringify(index),
                        );
                      }}>
                      <View style={styles.itemStyle}>
                        <Text style={styles.themeNameStyle}>
                          {item.themeName}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <View
                            style={[
                              styles.squreStyle,
                              {
                                backgroundColor: item.lightColor,
                              },
                            ]}
                          />
                          <View
                            style={[
                              styles.squreStyle,
                              {
                                backgroundColor: item.darkColor,
                              },
                            ]}
                          />
                        </View>
                      </View>
                    </TouchableHighlight>
                  )}
                </Observer>
              );
            }}
          />
        </View>
      )}
    </Observer>
  );
};

export default Theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeStore.backGroundColor,
  },
  squreStyle: {
    width: AppStore.width / 10,
    height: AppStore.width / 10,
  },
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 16,
  },
  itemSeparatorStyle: {borderWidth: 0.5, borderColor: '#fff'},
  themeNameStyle: {color: '#fff', fontWeight: 'bold'},
});
