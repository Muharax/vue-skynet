import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Home/home.vue';
import Logowanie from '../Logowanie/logowanie.vue';
import Settings from '../Settings/settings.vue';
import SettingsHome from '../Settings/settingsHome.vue';

import LanguageSettings from '../Settings/language/language.vue';
import Theme from '../Settings/theme/theme.vue';
import Cookie from '../Settings/cookie/cookie.vue';

import Logout from '../Logowanie/logout.vue';
import AI from '../LeftBar/musicVideoAi.vue';
import Ads from '../Ads/Ads.vue'

import Geometry from '../Geometry/Geometry.vue';
import Game from '../Game/Game.vue';

import UnitConverter from '../Unit-Converter/Unit-Converter-Main.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Logowanie },
    // { path: '/Ai', component: AI },
    { path: '/vue-skynet/', component: Home },
    { path: '/Ads', component: Ads },
    { path: '/Unit-Converter', component: UnitConverter },
    { path: '/Geometry', component: Geometry },
    { path: '/Game', component: Game },
    {
      path: '/settings',
      component: Settings,
      children: [
        {
          path: '',
          component: SettingsHome,
        },
        {
          path: 'language',
          component: LanguageSettings,
          // settingsLanguage: LanguageSettings
        },
        {
          path: 'theme',
          component: Theme,
          // settingsLanguage: LanguageSettings
        },
        {
          path: 'cookies',
          component: Cookie,
          // settingsLanguage: LanguageSettings
        },
      ],
    },
    { path: '/logout', component: Logout },
  ],
});

export default router;
