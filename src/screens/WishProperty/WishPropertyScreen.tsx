import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { WishPropertyStyles } from "./WishPropertyStyles";
import { Ionicons } from "@expo/vector-icons";
import InputSection from "./InputSection";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/ScreenName";
import { styles } from "../styles";

interface WishPropertyScreenProps {}

export const WishPropertyScreen: React.FC<WishPropertyScreenProps> = () => {
  const [leftButtonActive, setLeftButtonActive] = useState(false);
  const [rightButtonActive, setRightButtonActive] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [minBathrooms, setMinBathrooms] = useState("");
  const [maxBathrooms, setMaxBathrooms] = useState("");
  const [minCommonExpenses, setMinCommonExpenses] = useState("");
  const [maxCommonExpenses, setMaxCommonExpenses] = useState("");
  const [minBuiltArea, setMinBuiltArea] = useState("");
  const [maxBuiltArea, setMaxBuiltArea] = useState("");

  const handleLeftButtonPress = () => {
    setLeftButtonActive(true);
    setRightButtonActive(false);
  };

  const handleRightButtonPress = () => {
    setLeftButtonActive(false);
    setRightButtonActive(true);
  };

  const navigation = useNavigation();

  function handleBack() {
    navigation.navigate(screen.account.MainDrawer as never);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity style={styles.back} onPress={handleBack}>
        <Ionicons name="chevron-back" size={45} style={styles.logoBack} />
        <Text style={WishPropertyStyles.backText}>atrás</Text>
      </TouchableOpacity>

      <View style={WishPropertyStyles.container}>
        <Text style={WishPropertyStyles.title}>Propiedad Deseada</Text>
        <View style={WishPropertyStyles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLeftButtonPress}
            style={[
              WishPropertyStyles.button,
              WishPropertyStyles.leftButton,
              leftButtonActive
                ? WishPropertyStyles.activeButton
                : WishPropertyStyles.inactiveButton,
            ]}
          >
            <Text>Arrendar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRightButtonPress}
            style={[
              WishPropertyStyles.button,
              WishPropertyStyles.rightButton,
              rightButtonActive
                ? WishPropertyStyles.activeButton
                : WishPropertyStyles.inactiveButton,
            ]}
          >
            <Text>Comprar</Text>
          </TouchableOpacity>
        </View>

        <InputSection
          title="Precio"
          minValue={minPrice}
          maxValue={maxPrice}
          onMinValueChange={setMinPrice}
          onMaxValueChange={setMaxPrice}
        />

        <InputSection
          title="Dormitorios"
          minValue={minBedrooms}
          maxValue={maxBedrooms}
          onMinValueChange={setMinBedrooms}
          onMaxValueChange={setMaxBedrooms}
        />
        <InputSection
          title="Baños"
          minValue={minBathrooms}
          maxValue={maxBathrooms}
          onMinValueChange={setMinBathrooms}
          onMaxValueChange={setMaxBathrooms}
        />

        <InputSection
          title="Gastos Comunes"
          minValue={minCommonExpenses}
          maxValue={maxCommonExpenses}
          onMinValueChange={setMinCommonExpenses}
          onMaxValueChange={setMaxCommonExpenses}
        />

        <InputSection
          title="Metros Construidos"
          minValue={minBuiltArea}
          maxValue={maxBuiltArea}
          onMinValueChange={setMinBuiltArea}
          onMaxValueChange={setMaxBuiltArea}
        />
      </View>
    </SafeAreaView>
  );
};
