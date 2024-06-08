const NumberOfEvents = ({ setCurrentNOE }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
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