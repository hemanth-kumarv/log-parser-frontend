import "./App.css";
import LogsTable from "./components/logsTable/LogsTable";
import Container from "@mui/material/Container";
import { getLogTableDataAPI } from "./api/getLogTableDataAPI";
import { useState } from "react";
import AddFile from "./components/inputs/AddFile";
import ErrorModal from "./components/modals/ErrorModal";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [logData, setLogData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorModalData, setErrorModalData] = useState({
    open: false,
    message: "",
  });

  const uploadFileAndGetLogData = (file) => {
    setLoading(true);
    getLogTableDataAPI(file)
      .then((result) => {
        setLoading(false);
        setLogData(result?.data);
      })
      .catch((err) => {
        setLoading(false);
        setErrorModalData({ open: true, message: err?.message });
      });
  };

  return (
    <div className="App">
      <ErrorModal
        open={errorModalData.open}
        toggle={() => setErrorModalData({ open: false, message: "" })}
        message={errorModalData.message}
      />
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <center>
          <h1>Log Parser</h1>
        </center>
        <div>
          <AddFile upload={uploadFileAndGetLogData} />
        </div>
        {loading ? (
          <CircularProgress sx={{ margin: "2rem auto" }} />
        ) : logData ? (
          <LogsTable logData={logData} />
        ) : (
          <h3>Please upload a log file first</h3>
        )}
      </Container>
    </div>
  );
}

export default App;
