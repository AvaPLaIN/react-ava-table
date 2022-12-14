import styled from "styled-components";
import { ColumnRefType } from "./utils/createColumnRefs";

interface TableProps {
  columns: ColumnRefType[];
  checkable: boolean;
}

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  overflow: auto;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  color: #333;
  height: 100%;

  .footer-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .clear-buttons {
      display: flex;
      align-items: center;
      gap: 5px;

      button {
        cursor: pointer;
        padding: 5px 10px;
      }
    }
  }
`;

const TableWrapper = styled.table<TableProps>`
  width: 100%;
  height: 100%;
  overflow: auto;
  border-spacing: 0;
  display: grid;
  grid-template-columns: ${({ columns, checkable }) => {
    let columnWidths = columns
      .map((column: ColumnRefType) => {
        if (typeof column.width.defaultWidth === "number") {
          return `${column.width.defaultWidth || 200}px`;
        }
        return column.width.defaultWidth;
      })
      .join(" ");

    if (checkable) columnWidths = "50px " + columnWidths;

    return columnWidths;
  }};
  grid-auto-rows: minmax(auto, max-content);

  thead,
  tbody,
  tr {
    user-select: none;
    display: contents;
  }

  th,
  td {
    text-align: left;
    padding: 16px 20px;
  }

  tr {
    &:nth-child(odd) {
      td {
        background-color: #f2f2f2;
      }
    }
  }

  td {
    border-top: 1px solid #ccc;
  }

  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
  }
`;

export default TableWrapper;
