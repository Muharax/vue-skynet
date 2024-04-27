<template>
  <div class="unit-converter loaded">
    <div class="menu">
      <button v-for="converter in converters" :key="converter.name"
        :class="{ active: activeConverter.name === converter.name }" @click="setActiveConverter(converter)">
        <img :src="converter.iconPath" alt="icon" @load="handleIconLoad(converter)" />
        {{ converter.name }}
      </button>
    </div>
    <div class="converter">
      <div class="input-group" v-for="(value, unit) in activeConverter.units" :key="unit">
        <input :id="unit" type="text" v-model="values[unit]" @input="convertFrom(unit)">
        <label :for="unit">{{ unit }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
interface Unit {
  [unitName: string]: number;
}
interface Converter {
  name: string;
  iconPath: string;
  units: Unit;
  customConvert?: (unit: string, value: string) => void;
}

const converters: Converter[] = reactive([
  {
    name: 'Długość',
    iconPath: '/vue-skynet/icons/length.svg',
    units: {
      "nanometry [nm]": 1e9,
      "mikrometry [µm]": 1e6,
      "milimetry [mm]": 1000,
      "centymetry [cm]": 100,
      "metry [m]": 1,
      "kilometry [km]": 0.001,
      "mile [mi]": 0.000621371,
      "stopy [ft]": 3.28084,
      "cale [in]": 39.3701,
      "mile morskie [nmi]": 0.000539957,
    },
  },
  {
    name: 'Powierzchnia',
    iconPath: '/vue-skynet/icons/surface.svg',
    units: {
      "milimetry kwadratowe [mm²]": 1000000,
      "centymetry kwadratowe [cm²]": 10000,
      "decymetry kwadratowe [dm²]": 100,
      "metry kwadratowe [m²]": 1,
      "kilometry kwadratowe [km²]": 0.000001,
      "akry [ac]": 0.000247105,
      "hektary [ha]": 0.0001,
      "ary [a]": 0.01,
      "stopy kwadratowe [ft²]": 10.7639,
      "cale kwadratowe [in²]": 1550,
      "mile kwadratowe [mi²]": 3.861e-7,
      "jardy kwadratowe [yd²]": 1.19599,
    },
  },
  {
    name: 'Ciśnienie',
    iconPath: '/vue-skynet/icons/pressure.svg',
    units: {
      "paskale [Pa]": 1,
      "bary [bar]": 0.00001,
      "psi (funty na cal kwadratowy) [psi]": 0.000145038,
      "atmosfery standardowe [atm]": 9.8692e-6,
      "torr (milimetry słupa rtęci) [Torr]": 0.00750062,
      "megapaskale [MPa]": 1e-6,
      "kilopaskale [kPa]": 0.001,
      "hektopaskale [hPa]": 0.01,
      "milimetry słupa wody [mmH2O]": 0.101971621,
      "gigapaskale [GPa]": 1e-9,
      "atmosfery techniczne [at]": 0.0000101972,
    },
  },
  {
    name: 'Temperatura',
    iconPath: '/vue-skynet/icons/temperature.svg',
    units: {
      "Celsius (°C)": 1,
      "Fahrenheit (°F)": 1,
      "Kelvin (K)": 1,
    },
    customConvert: (unit: string, value: string) => {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        if (unit === 'Celsius (°C)') {
          values['Fahrenheit (°F)'] = ((numValue * 9 / 5) + 32).toFixed(2);
          values['Kelvin (K)'] = (numValue + 273.15).toFixed(2);
        } else if (unit === 'Fahrenheit (°F)') {
          values['Celsius (°C)'] = ((numValue - 32) * 5 / 9).toFixed(2);
          values['Kelvin (K)'] = (((numValue - 32) * 5 / 9) + 273.15).toFixed(2);
        } else if (unit === 'Kelvin (K)') {
          values['Celsius (°C)'] = (numValue - 273.15).toFixed(2);
          values['Fahrenheit (°F)'] = ((numValue - 273.15) * 9 / 5 + 32).toFixed(2);
        }
      }
    }
  },
  {
    name: 'Masa',
    iconPath: '/vue-skynet/icons/mass.svg',
    units: {
      "kilogramy [kg]": 1,
      "gramy [g]": 1000,
      "miligramy [mg]": 1e6,
      "mikrogramy [µg]": 1e9,
      "funty [lb]": 2.20462,
      "tony [t]": 0.001,
      "uncje [oz]": 35.274,
      "kamienie [st]": 0.157473,
      "tony metryczne [t]": 0.001,
      "karaty [ct]": 5000,
      "gran [gr]": 15432.3584,
      "kwintale [cwt]": 0.0196841,
      "tony długie (brytyjskie) [long t]": 0.000984207,
      "tony krótkie (amerykańskie) [short t]": 0.00110231,
    },
  },
  {
    name: 'Objętość',
    iconPath: '/vue-skynet/icons/capac.svg',
    units: {
      "litry [l]": 1,
      "mililitry [ml]": 1000,
      "galony (US) [gal(US)]": 0.264172,
      "metry sześcienne [m³]": 0.001,
      "centymetry sześcienne [cm³]": 1000,
      "cale sześcienne [in³]": 61.0237,
      "szklanki [cups]": 4.22675,
      "łyżki stołowe [tbsp]": 67.628,
      "łyżeczki [tsp]": 202.884,
      "pinty (US) [pt(US)]": 2.11338,
      "kwarty (US) [qt(US)]": 1.05669,
      "galony (UK) [gal(UK)]": 0.219969,
      "uncje płynne (US) [fl oz(US)]": 33.814,
      "uncje płynne (UK) [fl oz(UK)]": 35.1951,
      "baryłki naftowe [bbl]": 0.00628981,
      "hektolitry [hl]": 0.01,
    },
  },
  {
    name: 'Prędkość',
    iconPath: '/vue-skynet/icons/speed.svg',
    units: {
      'metry na sekundę (m/s)': 1,
      'kilometry na godzinę (km/h)': 3.6,
      'mile na godzinę (mph)': 2.2369362920544,
      'stopy na sekundę (ft/s)': 3.2808398950131,
      'węzły (knots, nmi/h)': 1.9438444924406,
      'mach (przy std. atm. na poziomie morza)': 0.0029386,
      'światło w próżni (c)': 0.000000003335640952,
      'cale na sekundę (in/s)': 39.370078740157,
      'jardy na sekundę (yd/s)': 1.0936132983377,
      'kilometry na sekundę (km/s)': 0.001,
    },
  },
  {
    name: 'Moc',
    iconPath: '/vue-skynet/icons/power.svg',
    units: {
      "waty [W]": 1,
      "kilowaty [kW]": 0.001,
      "megawaty [MW]": 1e-6,
      "gigawaty [GW]": 1e-9,
      "konie mechaniczne [hp, HP]": 0.00134102209,
      "funty-stopa na sekundę [lbf·ft/s]": 0.737562149,
      "BTU na godzinę [BTU/h]": 3.412141633,
      "joule na sekundę [J/s]": 1,
      "calory na sekundę [cal/s]": 0.238845896,
      "kilokalorie na godzinę [kcal/h]": 0.85984522785899,
      "terawaty [TW]": 1e-12,
    },
  },
  {
    name: 'Siła',
    iconPath: '/vue-skynet/icons/force.svg',
    units: {
      "newtony [N]": 1,
      "kilonewtony [kN]": 0.001,
      "funty-siła [lbf]": 0.224809,
      "uncje-siła [ozf]": 3.5969431019354,
      "dyny [dyn]": 100000,
      "kilogramy-siła [kgf]": 0.101971621,
      "gramy-siła [gf]": 101.971621298,
      "tony-siła (krótkie) [short tonf]": 0.000112404472,
      "tony-siła (długie) [long tonf]": 0.000100361135,
      "tony-siła (metryczne) [tf]": 0.000101971621,
    },
  },
  {
    name: 'Energia',
    iconPath: '/vue-skynet/icons/energy.svg',
    units: {
      "dżule [J]": 1,
      "kilodżule [kJ]": 0.001,
      "watogodziny [Wh]": 0.000277778,
      "kalorie [cal]": 0.239006,
      "kilokalorie [kcal]": 0.000239006,
      "BTU [btu]": 0.000947817,
      "elektronowolt [eV]": 6.242e+18,
      "megadżule [MJ]": 1e-6,
      "gigadżule [GJ]": 1e-9,
    },
  },
  {
    name: 'Ilość',
    iconPath: '/vue-skynet/icons/quantity.svg',
    units: {
      "sztuki [szt.]": 1,
      "tuziny [tuz.]": 1 / 12,
      "mendle [mndl.]": 1 / 15,
      "kopa [kopa]": 1 / 60,
      "gros [grs.]": 1 / 144,
      "wielka kopa [w.kopa]": 1 / 120,
      "setki [set]": 1 / 100,
      "tysiące [tys.]": 1 / 1000,
    },
  },
  {
    name: 'Światło',
    iconPath: '/vue-skynet/icons/light.svg',
    units: {
      "lumeny [lm]": 1,
      "kandele [cd]": 1 / 683,
      "luksy [lx]": 1,
      "wat na metr kwadratowy [W/m²]": 1 / 683,
    },
  },
  {
    name: 'Czas',
    iconPath: '/vue-skynet/icons/time.svg',
    units: {
      "sekundy [s]": 1,
      "minuty [min]": 1 / 60,
      "godziny [h]": 1 / 3600,
      "dni [d]": 1 / 86400,
      "tygodnie [tyg.]": 1 / 604800,
      "miesiące [mies.]": 1 / 2628000,
      "lata [lat]": 1 / 31536000,
    },
  },
  {
    name: 'Pamięć',
    iconPath: '/vue-skynet/icons/memory.svg',
    units: {
      "bity [b]": 1,
      "bajty [B]": 0.125,
      "kilobajty [KB]": 1 / 8192,
      "megabajty [MB]": 1 / (1024 * 8192),
      "gigabajty [GB]": 1 / (1024 * 1024 * 8192),
      "terabajty [TB]": 1 / (1024 * 1024 * 1024 * 8192),
      "petabajty [PB]": 1 / (1024 * 1024 * 1024 * 1024 * 8192),
      "eksabajty [EB]": 1 / (1024 * 1024 * 1024 * 1024 * 1024 * 8192),
      "zettabajty [ZB]": 1 / (1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 8192),
      "yottabajty [YB]": 1 / (1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 8192),
    },
  }
]);

const activeConverter = ref(converters[0]);
const values = reactive({});

watch(activeConverter, () => {
  resetValues();
});

const resetValues = () => {
  for (const unit of Object.keys(activeConverter.value.units)) {
    values[unit] = '';
  }
};

resetValues();

function convertFrom(unit: string) {
  if (activeConverter.value?.customConvert) {
    activeConverter.value.customConvert(unit, values[unit]);
  } else {
    const baseValue = values[unit] / activeConverter.value.units[unit];
    for (const [key, conversionRate] of Object.entries(activeConverter.value.units)) {
      const convertedValue = (baseValue * conversionRate).toFixed(10);
      values[key] = Number(convertedValue);
    }
  }
};

function setActiveConverter(converter: Converter) {
  activeConverter.value = converter;
  Object.keys(converter.units).forEach(unit => {
    values[unit] = '';
  });
}


function handleIconLoad(converter: Converter) {
  // Obsługa załadowania ikony
  converter.loaded = true;
}

</script>

<style scoped>
button>img {
  margin-right: 5px;
}

.menu>button {
  padding: 2px 5px 2px 5px;
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.menu>button:hover {
  background-color: var(--primary);
  color: var(--font-color);
  z-index: 999;
  transition: 400ms;
}

.active {
  background-color: var(--primary);
  color: var(--font-color);
  transition: 400ms;
  z-index: 0;
}

.unit-converter {
  display: flex;
  justify-content: space-between;
  padding: 3rem;
}

.menu {
  display: flex;
  flex-direction: column;
}

.converter {
  width: 75%;
}

.input-group {
  margin-bottom: 10px;
}

@media screen and (max-width: 600px) {
  .unit-converter {
    padding: 0px;
    width: 97%;
  }

  .input-group>input {
    /* width: 90%; */
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-group>label {
    font-size: 14px;
  }

  .menu>button {
    padding-top: 2px;
    padding-bottom: 2px;
  }
}
</style>
