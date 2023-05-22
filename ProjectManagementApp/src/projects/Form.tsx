import React, { useEffect, useState } from "react";

function Form() {
  const [departement, setDepartement] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  const [departementError, setDepartementError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [agreedToTermsError, setAgreedToTermsError] = useState<string | null>(
    null
  );

  const [departementTouched, setDepartementTouched] = useState<boolean>(false);
  const [messageTouched, setMessageTouched] = useState<boolean>(false);
  const [agreedTotermsTouched, setAgreedToTermsTouched] =
    useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = !departementError && !messageError && !agreedToTermsError;

    if (!isValid) return;
    console.log("submitting", { departement, message, agreedToTerms });
  };

  const validate = () => {
    setDepartementError(null);
    setMessageError(null);
    setAgreedToTermsError(null);

    if (departement === "") setDepartementError("Departement is Required");
    if (message === "") setMessageError("Message is required");
    if (agreedToTerms === false)
      setAgreedToTermsError("You must agree to the terms and conditions");
  };

  useEffect(() => {
    validate();
  }, [message, agreedToTerms, departement]);

  const stateToString = () => {
    return JSON.stringify({
      values: { message, departement, agreedToTerms },
      errors: { messageError, departementError, agreedToTermsError },
      touched: { messageTouched, departementTouched, agreedTotermsTouched },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <select
        name="departement"
        value={departement}
        onChange={(event) => setDepartement(event.target.value)}
        onBlur={() => {
          setDepartementTouched(true);
        }}
      >
        <option value="">Select...</option>
        <option value="hr">Human Ressources</option>
        <option value="support">Support</option>
      </select>
      <br />
      {departementError && departementTouched && (
        <p className="alert">{departementError}</p>
      )}
      <br />
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={() => setMessageTouched(true)}
      />
      <br />
      {messageError && messageTouched && (
        <p className="alert">{messageError}</p>
      )}
      <input
        type="checkbox"
        name="agreedToTerms"
        onChange={(e) => e.target.value}
        onBlur={() => setAgreedToTermsTouched(true)}
      />
      I agree to the terms and conditions.
      <br />
      {agreedToTermsError && agreedTotermsTouched && (
        <p className="alert">{agreedToTermsError}</p>
      )}
      <button>Send</button>
      <pre>{stateToString()}</pre>
      <></>
    </form>
  );
}

export default Form;
