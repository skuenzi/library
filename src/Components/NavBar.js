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
        link
        to="/"
      />
      <Menu.Item link name="My Collections" as={Link} to="/collections" />
      <Menu.Item link name="Currently Reading" as={Link} to='/currentlyreading'/>
    </Menu>
  );
};

export default NavBar;
