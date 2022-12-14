var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var TableContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  overflow: auto;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  background-color: #fff;\n  margin-bottom: 20px;\n  padding: 10px;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  color: #333;\n  height: 100%;\n\n  .footer-controls {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    .clear-buttons {\n      display: flex;\n      align-items: center;\n      gap: 5px;\n\n      button {\n        cursor: pointer;\n        padding: 5px 10px;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  overflow: auto;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  background-color: #fff;\n  margin-bottom: 20px;\n  padding: 10px;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  color: #333;\n  height: 100%;\n\n  .footer-controls {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    .clear-buttons {\n      display: flex;\n      align-items: center;\n      gap: 5px;\n\n      button {\n        cursor: pointer;\n        padding: 5px 10px;\n      }\n    }\n  }\n"])));
var TableWrapper = styled.table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  border-spacing: 0;\n  display: grid;\n  grid-template-columns: ", ";\n  grid-auto-rows: minmax(auto, max-content);\n\n  thead,\n  tbody,\n  tr {\n    user-select: none;\n    display: contents;\n  }\n\n  th,\n  td {\n    text-align: left;\n    padding: 16px 20px;\n  }\n\n  tr {\n    &:nth-child(odd) {\n      td {\n        background-color: #f2f2f2;\n      }\n    }\n  }\n\n  td {\n    border-top: 1px solid #ccc;\n  }\n\n  span {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: block;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  border-spacing: 0;\n  display: grid;\n  grid-template-columns: ", ";\n  grid-auto-rows: minmax(auto, max-content);\n\n  thead,\n  tbody,\n  tr {\n    user-select: none;\n    display: contents;\n  }\n\n  th,\n  td {\n    text-align: left;\n    padding: 16px 20px;\n  }\n\n  tr {\n    &:nth-child(odd) {\n      td {\n        background-color: #f2f2f2;\n      }\n    }\n  }\n\n  td {\n    border-top: 1px solid #ccc;\n  }\n\n  span {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: block;\n  }\n"])), function (_a) {
    var columns = _a.columns;
    return columns
        .map(function (column) {
        if (typeof column.width.defaultWidth === "number") {
            return "".concat(column.width.defaultWidth || 200, "px");
        }
        return column.width.defaultWidth;
    })
        .join(" ");
});
export default TableWrapper;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Table.styles.js.map