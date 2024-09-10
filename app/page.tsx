import { Table, TableBody, TableCell, TableHead, TableRow, Link as MuiLink } from "@mui/material";
import NextLink from 'next/link';
import React from "react";

export default function Home() {

  const datas = [
    {test: "testvalue1", num: 1},
    {test: "testvalue2", num: 2},
    {test: "testvalue3", num: 3},
  ]
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>test</TableCell>
            <TableCell>num</TableCell>
            <TableCell>add</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data, i) => (
            <React.Fragment key={i}>
              <TableRow>
                <TableCell>{data.test}</TableCell>
                <TableCell>{data.num}</TableCell>
                <TableCell>
                  <MuiLink component={NextLink} href={'/add'}>
                    追加
                  </MuiLink>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
