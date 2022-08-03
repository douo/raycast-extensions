import { showHUD } from "@raycast/api";
import { runAppleScript } from "run-applescript";
import { BrightnessAction, makeScript } from "./script";

export default async () => {
  await runAppleScript(makeScript(BrightnessAction.Down));
  await showHUD("Brightness decreased");
};
