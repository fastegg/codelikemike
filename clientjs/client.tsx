import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Router } from './router';

const element = (
  <div>
    <div className="callout large primary">
      <div className="text-center">
        <h1>Mikes Blog</h1>
        <h2 className="subheader">Such a Simple Blog Layout</h2>
      </div>
    </div>

    <article className="grid-container">
      <div className="grid-x align-center">
        <div className="cell medium-8">
          <div className="blog-post">
            <h3>Awesome blog post title <small>3/6/2016</small></h3>
            <img className="thumbnail" src="https://placehold.it/850x350" />
            <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
            <div className="callout">
              <ul className="menu simple">
                <li><a href="#">Author: Mike Mikers</a></li>
                <li><a href="#">Comments: 3</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid-x align-center">
          <div className="cell medium-8">
            <div className="blog-post">
              <h3>Awesome blog post title <small>3/6/2016</small></h3>
              <img className="thumbnail" src="https://placehold.it/850x350"/>
              <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
              <div className="callout">
                <ul className="menu simple">
                  <li><a href="#">Author: Mike Mikers</a></li>
                  <li><a href="#">Comments: 3</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-x align-center">
          <div className="cell medium-8">
            <div className="blog-post">
              <h3>Awesome blog post title <small>3/6/2016</small></h3>
              <img className="thumbnail" src="https://placehold.it/850x350"/>
              <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
              <div className="callout">
                <ul className="menu simple">
                  <li><a href="#">Author: Mike Mikers</a></li>
                  <li><a href="#">Comments: 3</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-x align-center">
          <div className="cell medium-8">
            <div className="blog-post">
              <h3>Awesome blog post title <small>3/6/2016</small></h3>
              <img className="thumbnail" src="https://placehold.it/850x350"/>
              <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
              <div className="callout">
                <ul className="menu simple">
                  <li><a href="#">Author: Mike Mikers</a></li>
                  <li><a href="#">Comments: 3</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
);

ReactDOM.render(
  <Router />,
  document.getElementById('react-root')
);