

import { Component } from "react";
import "./Directory.style.scss";
import { sections } from '../../Directorydata.js'
import { Menuitem } from "../Menuitem/Menuitem.component";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
        sections
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, size, id, linkUrl }) => (
          <Menuitem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
