/** @jsx jsx */
import { jsx } from "theme-ui";

const SearchBar = ({ handleSearchQuery }) => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2em"
      }}
    >
      <input
        sx={{
          color: "greyBlack",
          fontFamily: "heading",
          fontSize: "0.8em",
          fontWeight: "bold",
          letterSpacing: "body",
          border: "1px solid",
          borderColor: "accent",
          width: "300px",
          height: "50px",
          padding: "0.4em"
        }}
        type="text"
        id="members-searchbar"
        placeholder="Search members.."
        onChange={handleSearchQuery}
      />
    </div>
  );
};
export default SearchBar;