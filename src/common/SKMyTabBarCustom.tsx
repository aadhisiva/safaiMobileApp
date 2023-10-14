import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {MyTabBarCustomPropsI, routesPropsI} from '../utils/typesOrInterFace';

export default function MyTabBarCustom({
  state,
  descriptors,
  navigation,
}: MyTabBarCustomPropsI) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: routesPropsI, index: string) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    display: 'flex',
    justifyContent: 'center'
  },
});
