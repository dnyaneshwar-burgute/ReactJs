import React from 'react';
class BlogPage extends React.Component {
  render(){
    return(
      <div className='blog'>
        <div className="blog-header">
          <h3>Create Responsive Blogs Using HTML5 and CSS3</h3>
        </div>

        <div className="blog-body">
          <p>Blog Content Goes Here....</p>
          <p>Programming with HTML5 and CSS3 technologies have dramatically improved the landscape in web development. These technologies have certainly presented better ways to develop intriguing websites with unique interfaces.</p>

          <p>HTML5 and CSS3 offer incredible functionalities that certainly empowered developers to generate worthwhile websites while encompassing ongoing web trends. Whether you want to integrate an exclusive graphic design in the interface or any other enticing media element like animation, these markup languages allow you to accomplish the task with a flair. Moreover, all the major browsers also support them and ensure a seamless execution of websites developed with these languages. This is not it.</p>

          <p>We all are aware of the rapidly increasing demand of a mobile-optimized website. This growing demand has substantially made the responsive designs gain a great momentum. A responsive web design approach not only allows one to efficiently deal with the proliferation of mobiles, but also ensures a miraculous performance of websites on both desktops and mobile devices. Since, CSS3 media queries buttress responsive design, no wonder why more and more people are considering HTML5 and CSS3 to develop a responsive website.</p>
        </div>
      </div>
    );
  }
}

export default BlogPage;