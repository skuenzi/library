import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu size="massive">
      <Menu.Item
        name="Library"
        header
        style={{ fontSize: "2rem" }}
        widths="six"
        as={Link}
        to="/"
      />
      <Link to="../collections">
        <Menu.Item>
          My Collections
        </Menu.Item>
      </Link>
      <Link to="../currentlyreading">
        <Menu.Item >
          Currently Reading
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default NavBar;
