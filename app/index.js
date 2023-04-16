import getCellTable from "./getCellTable/getCellTable.js";
import getcurrentChangesTableCell from "./getCurrenChangesTableCell/getCurrenChangesTableCell.js";
import stillPlaying from "./stillPlaying/stillPlaying.js";

const wait = stillPlaying(getcurrentChangesTableCell(getCellTable(18, 30)));

export default wait;
