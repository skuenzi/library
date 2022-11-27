import { Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
      <Menu >
        <Menu.Item name='My Library' as='h1'/>
        <Menu.Item name='My Collections'/>
        <Menu.Item name='Currently Reading'/>
      </Menu>
  );
};

export default NavBar;
