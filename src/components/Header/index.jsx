import h from "./Header.module.css";
const Header = ({done, important}) => {
  return (
    <div className={h.header}>
      <h1 >My Todo list</h1>
      <p>For today - {important} important tasks</p>
      <p>Done - {done} tasks</p>
    </div>
  );
};
export default Header;
