import { useState } from "react";
import {
  AiOutlineDown,
  AiOutlineRight,
  AiOutlineCheckCircle,
} from "react-icons/ai";
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

  // Username
  const [usernameClass, setUsernameClass] = useState(
    "form-control border-secondary"
  );
  const [usernameValidate, setUsernameValidate] = useState(null);
  const [usernameValidateClass, setUsernameValidateClass] =
    useState("text-danger");
  const [usernameCheck, setUsernameCheck] = useState(null);

  // FullName 
  const [fullnameClass, setfullNameClass] = useState("form-control border-secondary");
  const [fullnameValidate, setfullNameValidate] = useState(null);
  const [fullnameValidateClass, setfullNameValidateClass] = useState("text-danger");
  const [fullnameCheck, setfullNameCheck] = useState(null);

  // Email
  const [emailClass, setEmailClass] = useState("form-control border-secondary");
  const [emailValidate, setEmailValidate] = useState(null);
  const [emailValidateClass, setEmailValidateClass] = useState("text-danger");
  const [emailCheck, setEmailCheck] = useState(null);

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
    const newUsername = e.target.value;
    setUsername(newUsername);

    const alphabetCount = newUsername.replace(/[^a-zA-Z]/g, "").length;
    const numberCount = newUsername.replace(/[^0-9]/g, "").length;

    if (alphabetCount >= 4 && numberCount >= 2) {
      setUsernameClass("form-control border-dark");
      setUsernameValidate(null);
      setUsernameCheck(<AiOutlineCheckCircle color="green" />);
    } else {
      setUsernameClass("form-control border-danger border-2");
      setUsernameValidate(
        "*Enter atleast 4 alphabets and 2 numerical characters"
      );
      setUsernameCheck(null);
    }

    console.log(newUsername);
  };
  const handleFullName = (e) => {
    const fullNameCount = e.target.value
    if(fullNameCount.length >=3){
      setFullName(e.target.value)
      setfullNameClass("form-control border-dark");
      setfullNameValidate(null);
      setfullNameCheck(<AiOutlineCheckCircle color="green" />);
    }else{
      setfullNameClass("form-control border-danger border-2");
      setfullNameValidate("*Enter valid name(should match government id)");
      setfullNameCheck(null);
    }
  };

  const handleEmail = (e) => {
    const email = e.target.value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(email)) {
      setEmailClass("form-control border-dark");
      setEmailValidate(null);
      setEmailCheck(<AiOutlineCheckCircle color="green" />);
      setEmail(email);
    } else {
      setEmailClass("form-control border-danger border-2");
      setEmailValidate("*Enter valid email-id");
      setEmailCheck(null);
    }
  };

  const handleGeneralDetails = () => {
    if (
      username !== null &&
      fullName !== null &&
      email !== null &&
      usernameValidate === null &&
      emailValidate === null && fullnameValidate === null
    ) {
      console.log("done");
      setAppearGeneral(false);
      setAppearCompany(true);
      setColorAlter("#3f19d3");
      setBackgroundColor("#3f19d3");
      setIconNumberGeneral(true);
      setModalTarget("#exampleModal");
    } else {
        if(usernameValidate != null){
          setUsernameClass("form-control border-danger border-2");
          setUsernameCheck(null);
          setUsernameValidate("*Enter atleast 4 alphabets and 2 numerical characters from else")
        }else if(fullnameValidate != null){
          setfullNameClass("form-control border-danger border-2");
          setfullNameValidate("Enter valid name")
          setfullNameCheck(null);
        }else if(emailValidate != null){
          setEmailClass("form-control border-danger border-2");
          setEmailValidate("Enter valid email-id")
          setEmailCheck(null);
        }
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
                <label htmlFor="">Username {usernameCheck}</label>
                <br />
                <input
                  type="text"
                  className={usernameClass}
                  style={{ maxWidth: 340 }}
                  onChange={handleUsername}
                />
                {
                  <span
                    className={usernameValidateClass}
                    style={{ fontSize: "12px" }}
                  >
                    {usernameValidate}
                  </span>
                }
                <br />
                <label htmlFor="">Full Name {fullnameCheck}</label>
                <br />
                <input
                  type="text"
                  className={fullnameClass}
                  style={{ maxWidth: 340 }}
                  onChange={handleFullName}
                />
                {
                  <span
                    className={fullnameValidateClass}
                    style={{ fontSize: "12px" }}
                  >
                    {fullnameValidate}
                  </span>
                }
                <br />
                <label htmlFor="">Email {emailCheck}</label>
                <br />
                <input
                  type="email"
                  className={emailClass}
                  style={{ maxWidth: 340 }}
                  onChange={handleEmail}
                />{" "}
                {
                  <span
                    className={emailValidateClass}
                    style={{ fontSize: "12px" }}
                  >
                    {emailValidate}
                  </span>
                }
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
