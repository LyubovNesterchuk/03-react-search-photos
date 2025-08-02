import style from "./Loader.module.css";
import { ClockLoader } from "react-spinners";

export default function Loader() {
  return <div className={style.backdrop}>
    <ClockLoader color="#1fd341" size={260} />
    </div>;
}
