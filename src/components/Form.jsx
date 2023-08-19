import { useState } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { PiNumberCircleOneLight, PiNumberCircleTwoLight } from "react-icons/pi";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";

function Form() {
  const [appearGeneral, setAppearGeneral] = useState(false);
  const [appearCompany, setAppearCompany] = useState(false);
  const [arrow, setArrow] = useState("<AiOutlineRight/>");
  const [colorAlter, setColorAlter] = useState("black");
  const [username, setUsername] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [iconNumberGeneral, setIconNumberGeneral] = useState(false);
  const [accountCount, setAccountCount] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [modalTarget, setModalTarget] = useState("");

  const ModifyAppearGeneral = () => {
    if (appearGeneral == true) {
      console.log("Set to false");
      setAppearGeneral(false);
      setArrow("<AiOutlineRight/>");
    } else {
      console.log("Set to true");
      setAppearGeneral(true);
      setArrow("<AiOutlineDown/>");
    }
  };
  const ModifyAppearCompany = () => {
    if (appearCompany == true) {
      console.log("Set to false");
      setAppearCompany(false);
    } else {
      console.log("Set to true");
      setAppearCompany(true);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };
  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleGeneralDetails = () => {
    if (username !== null && fullName !== null && email !== null) {
      console.log("done");
      setAppearGeneral(false);
      setAppearCompany(true);
      setColorAlter("#3f19d3");
      setBackgroundColor("#3f19d3");
      setIconNumberGeneral(true);
      setModalTarget("#exampleModal");
    } else {
      console.log("noii");
    }
  };
  const handleAddAccount = () => {
    const newAccount = (
      <div key={accountCount.length}>
        <hr />
        <label htmlFor="" className="mb-2">
          Account Number
        </label>
        <input type="number" className="form-control border-secondary" />
        <div className="d-flex justify-content-center gap-4 mt-2">
          <div className="">
            <p>ISPB</p>
            <input type="text" className="form-control border-secondary" />
          </div>
          <div className="">
            <p>Compe Code</p>
            <input type="number" className="form-control border-secondary" />
          </div>
        </div>
        <label htmlFor="" className="mt-2 mb-2">
          Issuer
        </label>
        <input type="text" className="form-control border-secondary" />
        <div className="d-flex justify-content-center gap-4 mt-2">
          <div className="">
            <p>Account Type</p>
            <select className="form-control border-secondary">
              <option value="" disabled>
                --Select--
              </option>
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
            </select>
          </div>
          <div className="">
            <p>Covenant</p>
            <input type="number" className="form-control border-secondary" />
          </div>
        </div>
      </div>
    );

    setAccountCount([...accountCount, newAccount]);
  };

  const handleAddStaff = () => {};

  return (
    <>
      <div className="container mt-4 shadow-sm p-3" style={{ maxWidth: 400 }}>
        <div className="head">
          <div className="row">
            <div className="col">
              <span>Add New Staff</span>
            </div>
            <div className="col">
              <span className="d-flex justify-content-end">x</span>
            </div>
          </div>
          <hr />
        </div>
        <div className="components">
          <div className="one">
            <span onClick={ModifyAppearGeneral}>
              <div className="row">
                <div className="col-1">
                  <span>
                    {iconNumberGeneral == false ? (
                      <PiNumberCircleOneLight size={23} color={colorAlter} />
                    ) : (
                      <BsCheckCircle size={23} color={colorAlter} />
                    )}
                  </span>
                </div>
                <div className="col">
                  <p
                    className="d-flex justify-content-start"
                    style={{ color: colorAlter }}
                  >
                    General Details
                  </p>
                </div>
                <div className="col">
                  <span className="d-flex justify-content-end">
                    {appearGeneral == false ? (
                      <AiOutlineDown />
                    ) : (
                      <AiOutlineRight />
                    )}
                  </span>
                </div>
              </div>
            </span>

            {appearGeneral == false ? null : (
              <div className="m-3">
                <label htmlFor="">Username</label>
                <br />
                <input
                  type="text"
                  className="form-control border-secondary"
                  style={{ maxWidth: 340 }}
                  onChange={handleUsername}
                />
                <br />
                <label htmlFor="">Full Name</label>
                <br />
                <input
                  type="text"
                  className="form-control border-secondary"
                  style={{ maxWidth: 340 }}
                  onChange={handleFullName}
                />
                <br />
                <label htmlFor="">Email</label>
                <br />
                <input
                  type="email"
                  className="form-control border-secondary"
                  style={{ maxWidth: 340 }}
                  onChange={handleEmail}
                />{" "}
                <br />
                <div className="text-end">
                  <button
                    className="btn m-2"
                    style={{ backgroundColor: "#3f19d3", color: "white" }}
                    onClick={handleGeneralDetails}
                  >
                    Next {">"}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="two">
            <span onClick={ModifyAppearCompany}>
              <div className="row">
                <div className="col-1">
                  <span>
                    <PiNumberCircleTwoLight size={23} />
                  </span>
                </div>
                <div className="col">
                  <p className="d-flex justify-content-start">
                    Company Details
                  </p>
                </div>
                <div className="col">
                  <span className="d-flex justify-content-end">
                    {appearCompany == false ? (
                      <AiOutlineDown />
                    ) : (
                      <AiOutlineRight />
                    )}
                  </span>
                </div>
              </div>
            </span>

            {appearCompany == false ? null : (
              <div className="m-3">
                <div className="d-flex justify-content-center gap-4">
                  <div className="">
                    <p>Company Name</p>
                    <input
                      type="text"
                      className="form-control border-secondary"
                    />
                  </div>
                  <div className="">
                    <p>CNPJ</p>
                    <input
                      type="number"
                      className="form-control border-secondary"
                    />
                  </div>
                </div>
                <hr />
                <label htmlFor="" className="mb-2">
                  Account Number
                </label>
                <input
                  type="number"
                  className="form-control border-secondary"
                />
                <div className="d-flex justify-content-center gap-4 mt-2">
                  <div className="">
                    <p>ISPB</p>
                    <input
                      type="text"
                      className="form-control border-secondary"
                    />
                  </div>
                  <div className="">
                    <p>Compe Code</p>
                    <input
                      type="number"
                      className="form-control border-secondary"
                    />
                  </div>
                </div>
                <label htmlFor="" className="mt-2 mb-2">
                  Issuer
                </label>
                <input type="text" className="form-control border-secondary" />
                <div className="d-flex justify-content-center gap-4 mt-2">
                  <div className="">
                    <p>Account Type</p>
                    <select className="form-control border-secondary">
                      <option value="" disabled>
                        --Select--
                      </option>
                      <option value="Savings">Savings</option>
                      <option value="Current">Current</option>
                    </select>
                  </div>
                  <div className="">
                    <p>Covenant</p>
                    <input
                      type="number"
                      className="form-control border-secondary"
                    />
                  </div>
                </div>
                {accountCount.map((account, index) => (
                  <div key={index}>{account}</div>
                ))}
                <button
                  onClick={handleAddAccount}
                  className="btn mt-2"
                  id="addAccount"
                >
                  + Add Additional Account{"(s)"}
                </button>
              </div>
            )}
          </div>
        </div>
        <hr />
        <div className="text-end">
          <button className="btn">Cancel</button>
          <button
            className="btn btn-secondary"
            data-toggle="modal"
            data-target={modalTarget}
            onClick={handleAddStaff}
            style={{ backgroundColor: backgroundColor, color: "white" }}
          >
            Add
          </button>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body text-center">
                <BsCheckCircleFill className="m-2" color="green" size={30} />{" "}
                <br />
                Staff Added Successfully
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
