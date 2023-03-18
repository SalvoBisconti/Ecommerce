import "./index.css";

const FormEl = ({ inputEl, setInputEl }) => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
    // {
    //   console.log(inputEl);
    // }
    // inputEl ? console.log(`Ecco: ${inputEl}`) : null;
    setInputEl(() => inputEl);
  };

  return (
    <div className="FormEl">
      <form onSubmit={onHandleSubmit}>
        <div className="form">
          <input
            value={inputEl}
            onChange={(e) => setInputEl(e.target.value)}
            type="text"
            className="input-form"
            placeholder="Insert category"
            required
          />{" "}
        </div>
      </form>
    </div>
  );
};

export default FormEl;
