import{MdMessage} from "react-icons/md";
import styles from "./Button.module.css";

const Button = ({ isOutline, icon, text, ...rest}) => {  
    // console.log(props);                                                              //ctrl + p, for search//
    return(
       <button
       {...rest}
        className={isOutline ? styles.outline_btn : styles.primary_btn}>
          {icon}
          {text}
       </button>
    )
};

export default Button;