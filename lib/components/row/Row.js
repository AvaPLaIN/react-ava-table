import React from "react";
import RowContainer from "./Row.styles";
var Row = function (_a) {
    var item = _a.item, columns = _a.columns, selectable = _a.selectable, selected = _a.selected, contextMenu = _a.contextMenu, onSelect = _a.onSelect, onContextMenu = _a.onContextMenu, renderData = _a.renderData;
    return (React.createElement(RowContainer, { columns: columns, onClick: selectable
            ? function (event) {
                return onSelect(event, item);
            }
            : null, onContextMenu: contextMenu
            ? function (event) {
                return onContextMenu(event, item);
            }
            : null, selected: selected }, columns.map(function (column) { return renderData(item, column); })));
};
export default Row;
//# sourceMappingURL=Row.js.map