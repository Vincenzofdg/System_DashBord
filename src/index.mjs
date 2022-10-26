#!/usr/bin/env
import "zx/globals";

import Install from "./tasks/Install.mjs";

await Install.apt()
await Install.flatpak()
