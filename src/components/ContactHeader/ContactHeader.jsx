import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
return(
<div className={`${styles.contact_section}`}>
    <h1>Contact Us</h1>
    <p>If you would like to contact us, please provide more information about the nature of your inquiry. What specific topic or department are you looking to reach?</p>
</div>
)
};

export default ContactHeader;