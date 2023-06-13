import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";

import HistoryIcon from "@mui/icons-material/History";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

import axios from "axios";

const Historique_formateur = () => {
  const { id } = useParams();

  const [historique, setHistorique] = useState([]);

  const getHistorique = async () => {
    await axios
      .get("http://localhost:5000/historique/formateur")
      .then((res) => {
        console.log("all historique", res.data);
        const data = res.data;
        const filteredData = data.filter((task) => task.formateur === id);
        console.log("data", filteredData);
        setHistorique(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetHistorique = async () => {
    try {
      await Promise.all(
        historique.map(async (task) => {
          await axios
            .delete("http://localhost:5000/historique/formateur/" + task._id)
            .then((res) => {
              console.log(res.data);
            });
        })
      );
      console.log("All tasks deleted successfully");
    } catch (error) {
      console.error("Error deleting tasks:", error);
    }
  };

  const columns = [
    { id: "task", label: "Tasks Done", minWidth: 10 },
    { id: "date", label: "Date", minWidth: 10, align: "center" },
  ];

  const [rows, setRows] = useState([]);
  function createData(task, date, id) {
    return { task, date, id };
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    getHistorique();
  }, []);

  useEffect(() => {
    if (historique.length > 0) {
      const newRows = historique.map((task) =>
        createData(task.taskDone, task.Date, task.formateur)
      );
      setRows(newRows);
      console.log("rows", rows);
    }
  }, [historique]);

  return (
    <div>
      <Header id={id} />
      Voici ton cours
      <main style={{ margin: "120px 0  80px" }}>
        <div
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ marginBlock: "40px" }}>
            <HistoryIcon
              style={{
                fontSize: "35px",
                margin: "-5px 15px 0 150px",
              }}
            />
            Historique
          </h3>

          <Button
            style={{ height: "40px" }}
            onClick={resetHistorique}
            variant="contained"
          >
            Reset
          </Button>
        </div>

        <Paper sx={{ width: "80%", overflow: "hidden", margin: "auto" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#efefef",
                        fontSize: "17px",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </main>
      <Footer />
    </div>
  );
};

export default Historique_formateur;
