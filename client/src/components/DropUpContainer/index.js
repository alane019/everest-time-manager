import React from "react";
import ProjectManager from "../ProjectManager"

import "./style.css"

export default function Input(props) {
  return (

    <article className="accordion">
        <section id="acc1">
            <h2><a href="#acc1">Project Manager</a></h2>
            <ProjectManager />
        </section>
        <section id="acc2">
            <h2><a href="#acc2">Title Two</a></h2>
            <p>This content appears on page 2.</p>
        </section>
        <section id="acc3">
            <h2><a href="#acc3">Title Three</a></h2>
            <p>This content appears on page 3.</p>
        </section>
        <section id="acc4">
            <h2><a href="#acc4">Title Four</a></h2>
            <p>This content appears on page 4.</p>
        </section>
        <section id="acc5">
            <h2><a href="#acc5">Title Five</a></h2>
            <p>This content appears on page 5.</p>
        </section>
    </article>

  
  );
}
