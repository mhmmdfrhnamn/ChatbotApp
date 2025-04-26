import { useFonts } from "expo-font";

export const useCustomFonts = () => {
    return useFonts({
        'Roboto-Variabel': require('../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
        'Roboto-Italic' : require('../../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf')
    })
}