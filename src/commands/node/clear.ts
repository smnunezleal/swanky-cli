import { removeDirIfExists } from "./index.js";
import { SwankyCommand } from "../../lib/swankyCommand.js";
import { BUILD_PATH, TEST_PATH, CARGO_PATH } from "./consts.js";

export class clearArtifacts extends SwankyCommand<typeof clearArtifacts> {
  await removeDirIfExists(BUILD_PATH);
  await removeDirIfExists(TEST_PATH);
  await removeDirIfExists(CARGO_PATH);
  console.info('Clear command executed successfully');
}