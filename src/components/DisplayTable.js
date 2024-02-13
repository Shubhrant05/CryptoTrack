import * as React from 'react';
import { useState, useEffect } from 'react';
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
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OptionModal from './OptionModal';
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
    fontWeight: 600,
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

function createData(idx, img, symbol, name, price, hours, days, marketcap, volume, circulatingsupply, option) {
  return { idx, img, symbol, name, price, hours, days, marketcap, volume, circulatingsupply, option };
}


export default function DisplayTable(props) {
  // { console.log(props, "table") }
  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [id, setId] = useState(-1)
  const mediaMatch = window.matchMedia('(max-width: 600px)');
  console.log(mediaMatch.matches, "media")
  const rows = []

  const settingId = (id) => {
    setId(id)
  }
  useEffect(() => {
    settingId(id)
  }, [id])

  props?.data?.forEach(ele => {
    rows.push(createData(
      ele?.market_cap_rank,
      ele?.image,
      ele?.symbol.toUpperCase(),
      ele?.name,
      ele?.current_price,
      ele?.price_change_percentage_24h.toFixed(2),
      ele?.price_change_percentage_7d_in_currency.toFixed(2),
      ele?.market_cap,
      ele?.total_volume,
      ele?.circulating_supply
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
    <>
      <OptionModal show={showModal} onHide={() => setShowModal(false)} data={rows} id={id} />
      <TableContainer component={Paper}>
        <Table  aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              {!mediaMatch.matches && <StyledTableCell className='tableTilte' style={{ color: 'white' }}>#</StyledTableCell>}
              <StyledTableCell className='tableTilte' style={{color:`${ mediaMatch.matches ? 'white' : 'black'}`}}>#</StyledTableCell>
              <StyledTableCell className='tableTilte'>Name</StyledTableCell>
              <StyledTableCell align="right" >Price</StyledTableCell>
              <StyledTableCell align="right" className='tableTilte'>24H</StyledTableCell>
              {!mediaMatch.matches && <StyledTableCell align="right" className='tableTilte'>7D</StyledTableCell>}
              {!mediaMatch.matches && <StyledTableCell align="right" className='tableTilte'>Market Cap</StyledTableCell>}
              {!mediaMatch.matches && <StyledTableCell align="right" className='tableTilte'>Volume(24H)</StyledTableCell>}
              {!mediaMatch.matches && <StyledTableCell align="right" className='tableTilte'>Circulating Supply</StyledTableCell>}
              {!mediaMatch.matches && <StyledTableCell className='tableTilte' style={{ color: 'white' }}>#</StyledTableCell>}
            </TableRow>
          </TableHead>

          {!mediaMatch.matches ? <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <>

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
                      <div style={{ textWrap: "none" }} onClick={() => {
                        setShowModal(mediaMatch.matches)
                        settingId(row.idx)
                      }}>
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
                    <ProgressBar now={60} variant="progress-custom" style={{ height: "0.5rem", borderRadius: "1.5rem" }} />
                  </TableCell>
                  <TableCell style={{ width: 60 }} align="right">
                    <SlOptionsVertical />
                  </TableCell>
                </TableRow>
              </>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          : <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <>

                <TableRow key={row.name}>
                   <TableCell style={{ width: 10, color: "#808A9D" }} align="right">
                    <AiOutlineStar />
                  </TableCell>
                  <TableCell component="th" scope="row" >
                    <div style={{ display: "flex", alignItems: 'center' }}>

                      <img src={row.img} alt='' style={{ width: "24px", height: "24px", paddingRight: '5px' }} />
                      <div style={{ textWrap: "none" }} onClick={() => {
                        setShowModal(mediaMatch.matches)
                        settingId(row.idx)
                      }}>
                        {row.name}
                        <span style={{ paddingLeft: "4px", fontWeight: "500", color: "#808A9D" }}>({row.symbol})</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell style={{ width: 60 }} align="right">
                    ${row.price}
                  </TableCell>
                  <TableCell style={{ width: 60, fontWeight: "600", color: `${row.hours < 0 ? "#EA3943" : "#16C784"}` }} align="right">
                    {row.hours < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}{row.hours}%
                  </TableCell>
                </TableRow>
              </>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>}
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={!mediaMatch.matches ? 10 : 4}
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
    </>
  );
}
