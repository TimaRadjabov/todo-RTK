import { useDispatch, useSelector } from "react-redux";
import {
  activeFilter,
  allFilters,
  doneFilter,
} from "../../features/filters/filtersSlice";

const ItemFilter = () => {
  const buttonsArr = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name)

  const buttons = buttonsArr.map(({ name, label }) => {
    const onFiltered = (name) => {
      if (name === "all") {
        return dispatch(allFilters(name))
      }
      if (name === "done") {
        return dispatch(doneFilter(name))
      }
      if (name === "active") {
        return dispatch(activeFilter(name))
      }
    };
    const isActive = filter === name;
    const clazz = isActive ? "btn-info" : "btn-outline-secondary";
    return (
      <button
        key={name}
        className={`btn ${clazz}`}
        type="button"
        onClick={() => dispatch(onFiltered(name))}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};
export default ItemFilter;
