import './App.css';

import Button from '@material-ui/core/Button'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, Typography } from '@material-ui/core';

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useTable, useSortBy } from 'react-table'

import Tooltip from '@material-ui/core/Tooltip';

function App() {

  const localizer = momentLocalizer(moment);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = React.useMemo(
    () => [
      {
        col1: 'BK1',
        col2: 'Mountain Bike',
        col3: 'Giant Talon 1',
        col4: '$650',
        col5: '$800',
        col6: 'The Bike Chain',
        col7: 7,
      },
      {
        col1: 'BK2',
        col2: 'Mountain Bike',
        col3: 'Giant Trance',
        col4: '$1700',
        col5: '$2500',
        col6: 'Giant Suppliers',
        col7: 4,
      },
      {
        col1: 'BK3',
        col2: 'Mountain Bike',
        col3: 'Marine Hawk Hill 1',
        col4: '$1000',
        col5: '$1400',
        col6: 'The Bike Chain',
        col7: 5,
      },
      {
        col1: 'BK4',
        col2: 'Mountain Bike',
        col3: 'Trek Fuel EX 9.9',
        col4: '$4000',
        col5: '$7900',
        col6: 'Trek LTD',
        col7: 2,
      },
      {
        col1: 'RP1',
        col2: 'Repair parts',
        col3: 'Front brakes',
        col4: '$50',
        col5: '$80',
        col6: 'Giant Suppliers',
        col7: 13,
      },
      {
        col1: 'RP2',
        col2: 'Repair parts',
        col3: 'Chain',
        col4: '$25',
        col5: '$50',
        col6: 'The Bike Chain',
        col7: 20,
      },
      {
        col1: 'RP3',
        col2: 'Repair parts',
        col3: 'Rear brakes',
        col4: '$55',
        col5: '$85',
        col6: 'The Bike Reps',
        col7: 10,
      },
      {
        col1: 'RP4',
        col2: 'Repair parts',
        col3: 'Shock absorber',
        col4: '$90',
        col5: '$140',
        col6: 'The Bike Reps',
        col7: 8,
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Product ID',
        accessor: 'col1',
        sortType: 'alphanumeric',
      },
      {
        Header: 'Product Category',
        accessor: 'col2',
        sortType: 'alphanumeric',
      },
      {
        Header: 'Product Name',
        accessor: 'col3', 
        sortType: 'alphanumeric',
      },
      {
        Header: 'Purchase Cost',
        accessor: 'col4',
        sortType: 'alphanumeric',
      },
      {
        Header: 'Selling Price',
        accessor: 'col5',
        sortType: 'alphanumeric',
      },
      {
        Header: 'Supplier',
        accessor: 'col6',
        sortType: 'alphanumeric',
      },
      {
        Header: 'Quantity on Hand',
        accessor: 'col7',
        sortType: 'alphanumeric',
      },
    ],
    []
  ) 

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)

  const customers = [
      {id : 1, name : 'Pablo Rico', email : 'pablo.rocks@ymail.com', phone : 440200800},
      {id : 2, name : 'Michael Johnson', email : 'mj23@ymail.com', phone : 442323600},
      {id : 3, name : 'Raj Kumar', email : 'rajkumar101@ymail.com', phone : 560250879},
    ];

  return (
    <div className="App">
      <header className="App-header">
        <AppBar>
          <ToolBar>
            <Tooltip title="Click to view the menu">
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Typography>
              Cycle Shop
            </Typography>
            <div className="login">
              <Tooltip title="Login to your account">
                <Button>
                  Login
                </Button>
              </Tooltip>
            </div>
          </ToolBar>
        </AppBar>
      </header>

        <div className="calendar">
          <h3>All Scheduled Repairs</h3>
          <div className="CalendarView">
            <Calendar localizer={localizer} 
              events={[
                {
                  'title': 'Dave\'s Giant Talon 1 Repair',
                  'allDay': false,
                  'start': new Date(2021, 4, 15, 10, 0), 
                  'end': new Date(2021, 4, 15, 14, 0),
                },
                {
                  'title': 'John\'s Giant Trance Shock absorber Change',
                  'allDay': false,
                  'start': new Date(2021, 4, 3, 9, 0), 
                  'end': new Date(2021, 4, 3, 15, 0), 
                },
                {
                  'title': 'Lily\'s Marin Eldridge Grade 1 Chain Repair',
                  'allDay': false,
                  'start': new Date(2021, 5, 12, 15, 0), 
                  'end': new Date(2021, 5, 12, 17, 0),
                },
                {
                  'title': 'Julia\'s Ibis Ripmo V2 XT Maintenance Check',
                  'allDay': false,
                  'start': new Date(2021, 5, 17, 9, 0), 
                  'end': new Date(2021, 5, 17, 17, 0),
                },
                {
                  'title': 'June\'s Trek Fuel EX 9.9 Tire Change',
                  'allDay': false,
                  'start': new Date(2021, 7, 22, 11, 0), 
                  'end': new Date(2021, 7, 22, 13, 0),
                },

              ]}
              startAccessor="start"
              endAccessor="end"
            />
          </div>
        </div>

        <div className="button">
          <Tooltip title="Schedule a repair to fix your bicycle">
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
              Schedule Repair
            </Button>
          </Tooltip>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Schedule a repair</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To schedule your bicycle repair, please enter your details here.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                fullWidth
              />
              <TextField 
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
              />
              <TextField 
                autoFocus
                margin="dense"
                id="bicycle type"
                label="Bicycle Type"
                type="bicycle type"
                fullWidth
              />
              <TextField
                id="date-time"
                label="Date-time"
                type="datetime-local"
                defaultValue="2021-05-04T10:30"
              />  
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>

      <div className="table">
        <h3>Current Inventory</h3>
        <table {...getTableProps()} >
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())} 
                    style={{
                      borderBottom: 'solid 3px black',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'papayawhip',
                          color: 'black',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="customerInfoDiv">
        <h3> Our Customers</h3>
        <div className="customerInfo">
          {customers.map(customers => (
            <p>
              <label>Customer Name: </label><b>{customers.name}</b><br />
              <label>Email Address: </label>
              <Tooltip title="Click to send an email">
                <a href={"mailto:" + customers.email}>{customers.email}</a>
              </Tooltip><br />
              <label>Phone Number: </label>
              <Tooltip title="Click to call">
              <a href={"tel:" + customers.phone}>{customers.phone}</a>
              </Tooltip><br />
            </p>
            
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;