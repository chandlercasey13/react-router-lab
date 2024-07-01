import {useParams} from 'react-router-dom'



function MailboxDetails ({mailboxes}) {

    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(
        (mailbox) => mailbox.id === Number(mailboxId)
      );
console.log(selectedBox.boxSize)
    return (
        <h1> {selectedBox.boxholder}'s box #{ mailboxId }  </h1>
    )
}


export default MailboxDetails