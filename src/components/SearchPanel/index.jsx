import s from "./SearchPanel.module.css";
import { useDispatch } from "react-redux";
import { addTerm } from "../../features/term/termSlice";

const SearchPanel = () => {
  const dispatch = useDispatch();


  const onLabelChange = (e) => {
    const typing = e.target.value;
    dispatch(addTerm(typing))
  };
    return (
      <div>
        <div action="" className={s.form} >
          <input
            type="search"
            placeholder="Searching ..."
            className={s.input}
            onChange={onLabelChange}
          />
          <i className={` fa fa-search ${s.fa}`}></i>
        </div>
      </div>
    );
}

export default SearchPanel;
