## Features

- Build easy high performance react tables
- Server and Client Side rendering
- Filter and Sort Data
- Select Rows and Copy (multi)
- Resizable columns
- Typescript support

## Preview

https://react-hook-tables.vercel.app

## Install

```
npm install react-table-npm
```

## Examples

Client Side: https://codesandbox.io/s/react-table-npm-example-client-side-wunuk4?file=/src/App.tsx
Server Side: https://codesandbox.io/s/react-table-npm-example-server-side-qojv3d?file=/src/App.tsx

## Start

```
import { Table } from "react-table-npm"

type Width = {
  minWidth?: number;
  defaultWidth?: string | number;
};

type Column = {
  id: string;
  label: string;
  filter?: string;
  sort?: boolean;
  width?: Width;
};

type Data = {
  id: string;
  name: string;
  age: number;
  state: string;
};

const columns: Column[] = [
  {
    id: "name",
    label: "Name",
    sort: true,
    width: { minWidth: 300, defaultWidth: "1fr" },
  },
  {
    id: "age",
    label: "Age",
    sort: true,
    width: { defaultWidth: 200 },
  },
  {
    id: "state",
    label: "State",
    sort: true,
    width: { minWidth: 300, defaultWidth: 400 },
  },
];

const users = [
  {
    "id": "62e2dd905e37187e20fd4a13",
    "name": "Mcintyre Forbes",
    "age": 69,
    "state": "Idaho"
  },
  {
    "id": "62e2dd90c7d21f4a03638d4f",
    "name": "Verna Berger",
    "age": 18,
    "state": "Louisiana"
  },
  {
    "id": "62e2dd90edc01768932b2da7",
    "name": "Gladys Dawson",
    "age": 100,
    "state": "Federated States Of Micronesia"
  }
]
const data: Data[] = users;

function App() {
  const handleColumnKeyExtractor = (item: Column) => item.id;
  const handleRenderColumn = (item: Column) => item.label;

  const handleDataKeyExtractor = (item: Data) => {
    return `${item.name}-${item.age}-${item.state}`;
  };

  const handleRenderData = (item: Data, column: Column) => {
    return (
      <td key={`${item.name}-${column.id}`}>
        <span>{item[column.id as keyof Data]}</span>
      </td>
    );
  };

  // only for server side
  const handleFetchDataOnPagination = async (
    page: number,
    limit: number,
    filter: any
  ) => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            data: [...users]
              .sort((a: any, b: any) => {
                if (filter?.sort?.sortBy?.value === "asc") {
                  return a[filter?.sort?.sortBy?.id] >
                    b[filter?.sort?.sortBy?.id]
                    ? 1
                    : -1;
                }
                if (filter?.sort?.sortBy?.value === "desc") {
                  return a[filter?.sort?.sortBy?.id] <
                    b[filter?.sort?.sortBy?.id]
                    ? 1
                    : -1;
                }
                return 0;
              })
              .slice((page - 1) * limit, page * limit),
            hasNextPage: users.length > page * limit,
          }),
        1000
      )
    );
  };

  return (
    <Table
      columns={columns}
      columnKeyExtractor={handleColumnKeyExtractor}
      renderColumnItem={handleRenderColumn}
      data={data}
      dataKeyExtractor={handleDataKeyExtractor}
      renderData={handleRenderData}
      // isServerSide={true} only for server side
      // fetchDataOnPagination={handleFetchDataOnPagination} only for server side
    />
  );
}
```
