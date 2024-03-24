import scss from "./Buttons.module.scss";
import { useMediaQuery } from "react-responsive";

const Buttons = ({ isActive, handleClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={scss.bottomButtons}>
      <button
        className={`${scss.button} ${isActive ? "" : scss.active}`}
        style={
          isActive
            ? {
                backgroundColor: `${isMobile ? "#ff751d" : "white"}`,
                color: `${isMobile ? "white" : "#ff751d"}`,
              }
            : {}
        }
        onClick={!isActive ? handleClick : null}
      >
        EXPENSES
      </button>
      <button
        className={`${scss.button} ${!isActive ? "" : scss.active}`}
        style={
          !isActive
            ? {
                backgroundColor: `${isMobile ? "#ff751d" : "white"}`,
                color: `${isMobile ? "white" : "#ff751d"}`,
              }
            : {}
        }
        onClick={isActive ? handleClick : null}
      >
        INCOME
      </button>
    </div>
  );
};

export default Buttons;
