import { useFonts } from "expo-font";

export const useCustomFonts = () => {
    return useFonts({
        'Roboto-Variabel': require('../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
        'Roboto-Italic' : require('../../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf'),
        'Fira-Bold' : require('../../assets/fonts/FiraSans-Bold.ttf'),
        'Fira-Medium' : require('../../assets/fonts/FiraSans-Medium.ttf'),
        'Fira-Regular' : require('../../assets/fonts/FiraSans-Regular.ttf'),
        'Fira-Light' : require('../../assets/fonts/FiraSans-Light.ttf'),

    })
}