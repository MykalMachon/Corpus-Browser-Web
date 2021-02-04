import {
  Container,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { FC, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';

type CorporaTableProps = {
  rows: Array<any>;
};

const CorporaTable: FC<CorporaTableProps> = ({ rows: rawRows }) => {
  const rowData = useMemo(
    () => [
      ...rawRows.map((row) => {
        const newKeys = Object.keys(row).map((key) => {
          return {
            new: slugify(key),
            old: key,
          };
        });
        let newRow = {};
        newKeys.forEach((key) => {
          newRow[key.new] = row[key.old];
        });
        return newRow;
      }),
    ],
    [rawRows]
  );
  const columnData = useMemo(
    () =>
      Object.keys(rawRows[0]).map((key: string) => ({
        Header: key,
        accessor: slugify(key),
      })),
    [rawRows]
  );

  useEffect(() => {
    console.log(rows);
  }, [rawRows]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: columnData, data: rowData });

  return (
    <Table {...getTableProps()} size="sm" variant="striped" colorScheme="teal">
      <TableCaption>List of Conversations in the Gap Corpus</TableCaption>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

function slugify(string) {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export default CorporaTable;
