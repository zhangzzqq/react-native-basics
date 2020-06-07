import {StyleSheet} from 'react-native';

export const Colors = {
    dark: 'black',
    light: 'white'
};

// 基础
const baseContainerStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};
// 基础
const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
};

//light
const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.dark
    }
});

//dark
const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    }
});

export default function getStyleSheet(useDarkTheme){
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
