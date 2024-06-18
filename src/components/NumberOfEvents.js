const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value;

    let errorText;
    if (value > 32) {
      errorText = "Maximum number of events is 32."
    } else if (value <= 0) {
      errorText = "Only positive numbers are allowed."
    } else {
      errorText = "";
      setCurrentNOE(value);
    }

    setErrorAlert(errorText);
  };

  return (
    <div id="events-number">
      <input
        type="number"
        className="events-number-input"
        defaultValue={32}
        onChange={handleInputChanged}
      />
    </div>
  )

}

export default NumberOfEvents;