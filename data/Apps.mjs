import {
  APT,
  FLATPAK,
  GIT,
  AUDIO,
  SOCIAL,
  GAME,
  TOOLS,
  PHOTO,
  DEVELOPMENT,
} from "../tools/Terms.mjs";

const Apps = [
  {
    name: "Audacity",
    toInstall: "audacity",
    categorry: AUDIO,
    type: APT,
  },
  {
    name: "EasyTag",
    toInstall: "easytag",
    categorry: AUDIO,
    type: APT,
  },
  {
    name: "Sound Converter",
    toInstall: "soundconverter",
    categorry: AUDIO,
    type: APT,
  },
  {
    name: "Lollypop",
    toInstall: "lollypop",
    categorry: AUDIO,
    type: APT,
  },
  {
    name: "Discord",
    toInstall: "discord",
    categorry: SOCIAL,
    type: APT,
  },
  {
    name: "Telegram",
    toInstall: "org.telegram.desktop",
    categorry: SOCIAL,
    type: FLATPAK,
  },
  {
    name: "Zoom",
    toInstall: "us.zoom.Zoom",
    categorry: SOCIAL,
    type: FLATPAK,
  },
  {
    name: "Slack",
    toInstall: "com.slack.Slack",
    categorry: SOCIAL,
    type: FLATPAK,
  },
  {
    name: "RetroArch",
    toInstall: "org.libretro.RetroArch",
    categorry: GAME,
    type: FLATPAK,
  },
  {
    name: "Steam",
    toInstall: "steam",
    categorry: GAME,
    type: APT,
  },
  {
    name: "MangoHud",
    toInstall: "https://github.com/flightlessmango/MangoHud.git",
    categorry: GAME,
    type: GIT,
  },
  {
    name: "NLoad",
    toInstall: "nload",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "Speedtest",
    toInstall: "speedtest-cli",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "Net Tools",
    toInstall: "net-tools",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "Peek: Gif Generator",
    toInstall: "peek",
    categorry: PHOTO,
    type: APT,
  },
  {
    name: "Gimp",
    toInstall: "gimp",
    categorry: PHOTO,
    type: APT,
  },
  {
    name: "LibreSprite",
    toInstall: "com.github.libresprite.LibreSprite",
    categorry: PHOTO,
    type: FLATPAK,
  },
  {
    name: "CMUS Music Player",
    toInstall: "cmus",
    categorry: AUDIO,
    type: APT,
  },
  {
    name: "Bpython",
    toInstall: "bpython",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "ZSTD",
    toInstall: "zstd",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "Ranger",
    toInstall: "ranger",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "Matrix Terminal",
    toInstall: "cmatrix",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "NeoFetch",
    toInstall: "neofetch",
    categorry: TOOLS,
    type: APT,
  },

  {
    name: "Gromit MPX",
    toInstall: "gromit-mpx",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "GParted",
    toInstall: "gparted",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "Tweaks",
    toInstall: "gnome-tweaks",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "Todoist: To-Do List & Tasks",
    toInstall: "com.todoist.Todoist",
    categorry: TOOLS,
    type: FLATPAK,
  },
  {
    name: "OnlyOffice",
    toInstall: "org.onlyoffice.desktopeditors",
    categorry: TOOLS,
    type: FLATPAK,
  },
  {
    name: "XClip: Copy and Paste",
    toInstall: "xclip",
    categorry: TOOLS,
    type: APT,
  },
  {
    name: "Python 3",
    toInstall: "python3",
    categorry: DEVELOPMENT,
    type: APT,
  },
  {
    name: "Pip",
    toInstall: "python3-pip",
    categorry: DEVELOPMENT,
    type: APT,
  },
  {
    name: "Venv",
    toInstall: "python3-venv",
    categorry: DEVELOPMENT,
    type: APT,
  },
  {
    name: "Android Studio",
    toInstall: "com.google.AndroidStudio",
    categorry: DEVELOPMENT,
    type: FLATPAK,
  },
  {
    name: "DBeaver",
    toInstall: "io.dbeaver.DBeaverCommunity",
    categorry: DEVELOPMENT,
    type: FLATPAK,
  },
  {
    name: "Postman",
    toInstall: "com.getpostman.Postman",
    categorry: DEVELOPMENT,
    type: FLATPAK,
  },
  {
    name: "Scrcpy",
    toInstall: "scrcpy",
    categorry: DEVELOPMENT,
    type: APT,
  },
  {
    name: "ADB",
    toInstall: "adb",
    categorry: DEVELOPMENT,
    type: APT,
  },
  {
    name: "Watchman",
    toInstall: "watchman",
    categorry: DEVELOPMENT,
    type: APT,
  },
  {
    name: "VIM Text Editor",
    toInstall: "vim",
    categorry: DEVELOPMENT,
    type: APT,
  },
  {
    name: "Java",
    toInstall: "openjdk-11-jdk",
    categorry: DEVELOPMENT,
    type: APT,
  },
];

export default Apps;
