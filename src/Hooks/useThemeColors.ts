// hooks/useThemeColors.ts
import useColorScheme from "./useColorScheme"
import Colors from "@/Theme/ThemeColor"

const useThemeColors = () => {
  const colorScheme = useColorScheme()
  const colors = Colors[colorScheme]

  return colors
}

export default useThemeColors