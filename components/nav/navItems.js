import { Fragment } from "react";

import Link from "next/link";

import { getAllMenuItems } from "../../dataFiles/nav.js";

function NavItems() {
  let navItems = getAllMenuItems();

  return (
    <Fragment>
      {navItems.map((element) => (
        <li className="nav-item" key={element.id}>
          <Link
            className="nav-link active"
            aria-current="page"
            href={element.href}
          >
            {element.title}
          </Link>
        </li>
      ))}
    </Fragment>
  );
}

export default NavItems;
