import { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {StockHistory} from '../App.types'

type SummaryProps = {
  summary: StockHistory[];
}
const Summary:React.FC<SummaryProps> = ({summary}) => {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const lists = summary.map((val: any, key: any) =>
    <StyledTableRow key={val.code}>
      <StyledTableCell component="th" scope="row">
        {val.code}
      </StyledTableCell>
      <StyledTableCell align="right">{val.rate[0]}</StyledTableCell>
      <StyledTableCell align="right">{Math.min.apply(null, val.rate)}</StyledTableCell>
      <StyledTableCell align="right">{Math.max.apply(null, val.rate)}</StyledTableCell>
      <StyledTableCell align="right">{val.rate[val.rate.length - 1]}</StyledTableCell>
    </StyledTableRow>
  );
  return (
    <div style={{ marginLeft: '4em' }}>
      <div style={{ marginBottom: "1em" }}>
        <Typography variant='h6'> Summary</Typography>
      </div>
      <div style={{ border: '1px solid #b3b4b5', padding: "1em" }}>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Stock</StyledTableCell>
                <StyledTableCell align="right">Starting</StyledTableCell>
                <StyledTableCell align="right">Lowest</StyledTableCell>
                <StyledTableCell align="right">Highest</StyledTableCell>
                <StyledTableCell align="right">Current</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lists}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Summary;
