import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mailboxes">MailBoxes</Link>
        </li>
        <li>
          <Link to="/mailboxes/new">New Mailbox</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
