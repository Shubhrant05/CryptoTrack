import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import { styled } from '@mui/material/styles';
import { ElevenMpOutlined } from '@mui/icons-material';
import { AiOutlineStar, AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { SlOptionsVertical } from 'react-icons/sl'
import '../Style.css'
import { ProgressBar } from 'react-bootstrap';
import { LinearProgress } from '@mui/material';
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 14,
    fontWeight: 600
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 600
  },
}));

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(idx, img, symbol, name, price, hours, days, marketcap, volume, circulatingsupply , option) {
  return { idx, img, symbol, name, price, hours, days, marketcap, volume, circulatingsupply , option};
}

// const rows = [
//   createData('Cupcake', 305, 3.7),
//   createData('Donut', 452, 25.0),
//   createData('Eclair', 262, 16.0),
//   createData('Frozen yoghurt', 159, 6.0),
//   createData('Gingerbread', 356, 16.0),
//   createData('Honeycomb', 408, 3.2),
//   createData('Ice cream sandwich', 237, 9.0),
//   createData('Jelly Bean', 375, 0.0),
//   createData('KitKat', 518, 26.0),
//   createData('Lollipop', 392, 0.2),
//   createData('Marshmallow', 318, 0),
//   createData('Nougat', 360, 19.0),
//   createData('Oreo', 437, 18.0),
// ]
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function DisplayTable(props) {
  // { console.log(props, "table") }
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rows = []

  props?.data?.forEach(ele => {
    rows.push(createData(
      ele.market_cap_rank,
      ele.image,
      ele.symbol.toUpperCase(),
      ele.name,
      ele.current_price,
      ele.price_change_percentage_24h.toFixed(2),
      ele.price_change_percentage_7d_in_currency.toFixed(2),
      ele.market_cap,
      ele.total_volume,
      ele.circulating_supply
    ))
  });

  // .sort((a, b) => (a.calories < b.calories ? -1 : 1));
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='tableTilte' style={{ color: 'white' }}>#</StyledTableCell>
            <StyledTableCell className='tableTilte'>#</StyledTableCell>
            <StyledTableCell className='tableTilte'>Name</StyledTableCell>
            <StyledTableCell align="right" >Price</StyledTableCell>
            <StyledTableCell align="right" className='tableTilte'>24H</StyledTableCell>
            <StyledTableCell align="right" className='tableTilte'>7D</StyledTableCell>
            <StyledTableCell align="right" className='tableTilte'>Market Cap</StyledTableCell>
            <StyledTableCell align="right" className='tableTilte'>Volume(24H)</StyledTableCell>
            <StyledTableCell align="right" className='tableTilte'>Circulating Supply</StyledTableCell>
            <StyledTableCell className='tableTilte' style={{ color: 'white' }}>#</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{ width: 10, color: "#808A9D" }} align="right">
                <AiOutlineStar />
              </TableCell>
              <TableCell style={{ width: 10 }} align="right">
                {row.idx}
              </TableCell>
              <TableCell component="th" scope="row" >
                <div style={{ display: "flex", alignItems: 'center' }}>

                  <img src={row.img} alt='' style={{ width: "24px", height: "24px", paddingRight: '5px' }} />
                  <div style={{ textWrap: "none" }}>
                    {row.name}
                    <span style={{ paddingLeft: "4px", fontWeight: "500", color: "#808A9D" }}>({row.symbol})</span>
                  </div>
                </div>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                ${row.price}
              </TableCell>
              <TableCell style={{ width: 160, fontWeight: "600", color: `${row.hours < 0 ? "#EA3943" : "#16C784"}` }} align="right">
                {row.hours < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}{row.hours}%
              </TableCell>
              <TableCell style={{ width: 160, fontWeight: "600", color: `${row.days < 0 ? "#EA3943" : "#16C784"}` }} align="right">
                {row.days < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}{row.days}%
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                ${row.marketcap}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                ${row.volume}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.circulatingsupply} BTC
                <ProgressBar now={60} variant = "progress-custom" style={{ height : "0.5rem" , borderRadius : "1.5rem"}}/>
              </TableCell>
              <TableCell style={{ width: 60 }} align="right">
                <SlOptionsVertical/>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={10}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}