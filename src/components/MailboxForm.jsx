import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  id: '',
  boxSize: "",
  boxholder: "",
};

function MailboxForm({ addBox }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  function handleSubmit(event) {
    event.preventDefault();
    addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  }

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
     
      <label htmlFor="boxSize"> Box-Size:</label>
      <input
        type="text"
        id="boxSize"
        name="boxSize"
        value={formData.boxSize}
        onChange={handleChange}
      ></input>
      <label htmlFor="boxholder"> Boxholder Name:</label>
      <input
        type="text"
        id="boxholder"
        name="boxholder"
        value={formData.boxholder}
        onChange={handleChange}
      ></input>
      <button type="submit"> Submit</button>
    </form>
  );
}

export default MailboxForm;
