function Studiing() {
  return (
    <>
      <h1>Education</h1>
      <div className="inputs">
        <p>School name</p>
        <input type="text" />
        <p>Title of study</p>
        <input type="text" />
        <p>Date of start </p>
        <input type="date" />
        <p>Date of end(optional)</p>
        <input type="date" />
      </div>
      <br />
      <button>Submit</button>
    </>
  );
}

export default Studiing;
