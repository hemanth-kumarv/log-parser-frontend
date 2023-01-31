import FileSaver from "file-saver";

export const downloadData = (data) => {
  const formattedData = data.map((logs) => JSON.stringify(logs) + "\n");
  const fileBlob = new Blob(formattedData, {
    type: "text/plain;charset=utf-8",
  });
  FileSaver.saveAs(fileBlob, "formattedLogs.txt");
};
