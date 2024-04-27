import React, { useState } from "react";
import BackToothSVGs from "./svgs/BackToothSVGs";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Icon,
} from "@mui/material";

const BackTooth = () => {
  const [toothPresent, setToothPresent] = useState("yes");
  const [currentStatus, setCurrentStatus] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [options, setOptions] = useState("crack");

  const handleToothPresentChange = (event) => {
    setToothPresent(event.target.value);
    if (event.target.value === "no") {
      setCurrentStatus("");
    }
  };

  const handleCurrentStatusChange = (event) => {
    setCurrentStatus(event.target.value);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = (event) => {
    event.stopPropagation(); // Stop event propagation
    setIsDialogOpen(false);
  };

  const handleShapeSelect = (shape) => {
    setSelectedShape(shape);
  };

  const handleUpdateTooth = (event) => {
    event.stopPropagation(); // Stop event propagation
    if (toothPresent === "yes") {
      setOptions(currentStatus + "_" + selectedShape);
    } else {
      setOptions("no");
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="tooth" onClick={handleOpenDialog}>
      <div>
        <BackToothSVGs selectedOption={options} />
      </div>

      {/* Dialog for updating tooth status */}
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Details for Tooth</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel id="tooth-present-label">Tooth Present</InputLabel>
            <Select
              labelId="tooth-present-label"
              id="tooth-present-select"
              value={toothPresent}
              label="Tooth Present"
              onChange={handleToothPresentChange}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
          {toothPresent === "yes" && (
            <div>
              <FormControl fullWidth margin="normal">
                <InputLabel id="current-status-label">
                  Current Status
                </InputLabel>
                <Select
                  labelId="current-status-label"
                  id="current-status-select"
                  value={currentStatus}
                  label="Current Status"
                  onChange={handleCurrentStatusChange}
                >
                  <MenuItem value="cavity">Cavity</MenuItem>
                  <MenuItem value="inlayFilling">Inlay Filling</MenuItem>
                  <MenuItem value="amalgamFilling">Amalgam Filling</MenuItem>
                  <MenuItem value="whiteFilling">White Filling</MenuItem>
                </Select>
              </FormControl>
              <div style={{ marginTop: "20px" }}>
                <div>Please select the shape from the following:</div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {/* Replace these Icon components with your actual icons */}
                  {Array.from({ length: 10 }).map((_, index) => (
                    <Icon
                      key={index}
                      style={{
                        fontSize: 30,
                        cursor: "pointer",
                        color:
                          selectedShape === `shape${index}` ? "blue" : "black",
                      }}
                      onClick={() => handleShapeSelect(`shape${index}`)}
                    >
                      {/* Use the actual icon name or image here */}
                      star_border
                    </Icon>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdateTooth} color="primary">
            Update Tooth
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BackTooth;
