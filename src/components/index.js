<Dialog open={open} onClose={handleClose}>
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
        
        <FormControl component="fieldset" margin="normal">
          <RadioGroup
            aria-label="current-status"
            name="current-status"
            value={currentStatus}
            onChange={handleCurrentStatusChange}
          >
            <FormControlLabel value="cavity" control={<Radio />} label="Cavity" />
            <FormControlLabel value="inlayFilling" control={<Radio />} label="Inlay Filling" />
            <FormControlLabel value="amalgamFilling" control={<Radio />} label="Amalgam Filling" />
            <FormControlLabel value="whiteFilling" control={<Radio />} label="White Filling" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {/* handle update logic */}} color="primary">
          Update Tooth
        </Button>
      </DialogActions>
      </Dialog>
