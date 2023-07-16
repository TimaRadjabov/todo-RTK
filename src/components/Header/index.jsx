import h from "./Header.module.css";
const Header = ({done, important}) => {
  return (
    <div className={h.header}>
      <h1 >My Todo list</h1>
      <p>For today - <span>{important}</span> important tasks</p>
      <p>Done - <span>{done}</span> tasks</p>
    </div>
  );
};
export default Header;
