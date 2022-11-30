import "./Forminput.css";

const Forminput = (props) => {
  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      <input name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

export default Forminput;
