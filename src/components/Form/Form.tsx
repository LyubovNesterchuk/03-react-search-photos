import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

import style from "./Form.module.css";


interface FormProps{
  onSubmit:(query:string)=>void;
}

export default function Form({onSubmit}:FormProps) {

  const handleSubmit = (formData:FormData)=>{
    const query = formData.get("search") as string;

if(query.trim()===""){
  toast.error("Please enter your search query.");
  return;
}

onSubmit(query.trim());
  };

  return (
    <form className={style.form} action={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
