import { Link } from 'react-router-dom';



function MailboxList( {mailboxes}) {
    
    return (
        <ul>
        {mailboxes.map((mailbox) => (
<div className = 'mail-box'>
<li key = {mailbox.id}> <Link to = {`/mailboxes/${mailbox.id}`}>Name : {mailbox.boxholder}</Link></li>
</div>
        ))}
        </ul>
    )
}


export default MailboxList