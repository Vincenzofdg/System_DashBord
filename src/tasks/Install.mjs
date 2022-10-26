#!/usr/bin/env
import "zx/globals";

import Apps from "../data/Apps.mjs";
import { APT, FLATPAK } from "../tools/Terms.mjs";

const Install = {
  apt: async () => {
    Apps
      .filter(({ type }) => type === APT)
      .forEach(async ({ toInstall }) => {
        try {
          await $`dpkg -l | grep ${toInstall}`;
        } catch (err) {
          await $`sudo apt install ${toInstall} -y`;
        }
        await $`clear`;
      });
  },

  flatpak: async () => {
    Apps
      .filter(({ type }) => type === FLATPAK)
      .forEach(async ({ toInstall }) => {
        try {
          await $`flatpak list | grep ${toInstall}`;
        } catch (err) {
          await $`flatpak install flathub ${toInstall} -y`;
        }
        await $`clear`;
      });
  },
};

export default Install;
