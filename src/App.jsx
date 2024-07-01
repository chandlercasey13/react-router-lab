import { useState } from 'react'

import { Route, Routes} from 'react-router-dom'
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import Navbar from './components/Navbar';



import './App.css'

const App = () => {

const [mailboxes, setMailboxes] = useState([]);

function addBox (mailbox) {

 function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

mailbox.id = getRandomInt(10000)

setMailboxes([...mailboxes, mailbox])

}

  console.log(mailboxes)
  return (
<>

<h1>Welcome to the Post Office</h1>
<Navbar/>
<Routes>
  <Route path="/" element={<h2>Home Page</h2>} />
  <Route path="/mailboxes" element={<MailboxList mailboxes= {mailboxes}/>} />
  <Route
    path="/mailboxes/:mailboxId"
    element={<MailboxDetails mailboxes = {mailboxes}/>}
  />
 <Route path="/mailboxes/new" element={<MailboxForm addBox={addBox}/>} />
  <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
</Routes>




</>




  )
  
};

export default App;


