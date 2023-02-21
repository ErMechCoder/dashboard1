import React from "react";
import { Link } from "react-router-dom";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import t4 from "../images/t4.png";

const BlogDetail = () => {
  return (
    <div>
      <div class="rn-breadcrumb-inner ptb--30">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-12">
              <h5 class="title text-center text-md-start">Blog Details</h5>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <ul class="breadcrumb-list">
                <li class="item">
                  <Link to="/">Home</Link>
                </li>
                <li class="separator">
                  <i class="feather-chevron-right"></i>
                </li>
                <li class="item current">Blog Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="rn-blog-area rn-blog-details-default rn-section-gapTop">
        <div class="container">
          <div class="row g-6">
            <div class="col-xl-8 col-lg-8">
              <div class="rn-blog-listen">
                <div class="blog-content-top">
                  <h2 class="title">Lorem ipsum dolor sit amet consectetur.</h2>
                  <span class="date">2 Aug, 2021</span>
                </div>
                <div class="bd-thumbnail">
                  <div class="large-img mb--30">
                    <img class="w-100" src={f2} alt="Blog Images" />
                  </div>
                </div>
                <div class="news-details">
                  <p>
                    Nobis eleifend option congue nihil imperdiet doming id quod
                    mazim placerat facer possim assum. Typi non habent
                    claritatem insitam; est usus legentis in iis qui facit eorum
                    claritatem. Investigationes demonstraverunt lectores legere
                    me lius quod ii legunt saepius. Claritas est etiam processus
                    dynamicus, qui sequitur mutationem consuetudium lectorum.
                  </p>
                  <h4>Nobis eleifend option conguenes.</h4>
                  <p>
                    Mauris tempor, orci id pellentesque convallis, massa mi
                    congue eros, sed posuere massa nunc quis dui. Integer ornare
                    varius mi, in vehicula orci scelerisque sed. Fusce a massa
                    nisi. Curabitur sit amet suscipit nisl. Sed eget nisl
                    laoreet, suscipit enim nec, viverra eros. Nunc imperdiet
                    risus leo, in rutrum erat dignissim id.
                  </p>
                  <p>
                    Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula
                    cursus venenatis. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Nunc
                    vitae nisi tortor. Morbi leo nulla, posuere vel lectus a,
                    egestas posuere lacus. Fusce eleifend hendrerit bibendum.
                    Morbi nec efficitur ex.
                  </p>
                  <h4>Mauris tempor, orci id pellentesque.</h4>
                  <p>
                    Nulla non ligula vel nisi blandit egestas vel eget leo.
                    Praesent fringilla dapibus dignissim. Pellentesque quis quam
                    enim. Vestibulum ultrices, leo id suscipit efficitur, odio
                    lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque
                    tempor urna a nisi pretium, a pretium massa tristique.
                    Nullam in aliquam diam. Maecenas at nibh gravida, ornare
                    eros non, commodo ligula. Sed efficitur sollicitudin auctor.
                    Quisque nec imperdiet purus, in ornare odio. Quisque odio
                    felis, vestibulum et.
                  </p>
                </div>
                <div class="comments-wrapper pt--40">
                  <div class="comments-area">
                    <div class="trydo-blog-comment">
                      <h5 class="comment-title mb--40">
                        9 replies on “Lorem ipsum dolor sit amet consectetur.”
                      </h5>

                      <ul class="comment-list">
                        <li class="comment parent">
                          <div class="single-comment">
                            <div class="comment-author comment-img">
                              <img
                                class="comment-avatar"
                                src={t1}
                                alt="Comment Image"
                                width="60px"
                              />
                              <div class="m-b-20">
                                <div class="commenter">Lorem</div>
                                <div class="time-spent">
                                  {" "}
                                  January 20, 2022 at 8:44 pm
                                </div>
                              </div>
                            </div>
                            <div class="comment-text">
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Ducimus accusantium adipisci
                                numquam amet opti.
                              </p>
                            </div>
                            <div class="reply-edit">
                              <div class="reply">
                                <Link class="comment-reply-link" to="/">
                                  <i class="rbt feather-corner-down-right"></i>
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </div>
                          <ul class="children">
                            <li class="comment byuser ">
                              <div class="single-comment">
                                <div class="comment-author comment-img">
                                  <img
                                    class="comment-avatar"
                                    src={t2}
                                    alt="Comment Image"
                                    width="60px"
                                  />
                                  <div class="m-b-20">
                                    <div class="commenter">Admin Comment</div>
                                    <div class="time-spent">
                                      {" "}
                                      January 20, 2021 at 8:44 pm
                                    </div>
                                  </div>
                                </div>
                                <div class="comment-text">
                                  <p>
                                    A component that allows for easy creation of
                                    menu items, quickly creating paragraphs of
                                    “Lorem Ipsum” and pictures with custom
                                    sizes.
                                  </p>
                                </div>
                                <div class="reply-edit">
                                  <div class="reply">
                                    <Link class="comment-reply-link" to="/">
                                      <i class="rbt feather-corner-down-right"></i>
                                      Reply
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>

                        <li class="comment parent">
                          <div class="single-comment">
                            <div class="comment-author comment-img">
                              <img
                                class="comment-avatar"
                                src={t3}
                                width="60px"
                                alt="Comment Image"
                              />
                              <div class="m-b-20">
                                <div class="commenter">Lorem ipsum</div>
                                <div class="time-spent">
                                  {" "}
                                  January 22, 2022 at 4:32 pm
                                </div>
                              </div>
                            </div>
                            <div class="comment-text">
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Temporibus libero expedita
                                similique a aliquam ex exercitationem, itaque
                                ea.
                              </p>
                            </div>
                            <div class="reply-edit">
                              <div class="reply">
                                <Link class="comment-reply-link" to="/">
                                  <i class="rbt feather-corner-down-right"></i>
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="rn-comment-form pt--60">
                  <div class="inner">
                    <div class="section-title">
                      <span class="subtitle">Have a Comment?</span>
                      <h2 class="title">Leave a Reply</h2>
                    </div>
                    <form class="mt--40" action="#">
                      <div class="row">
                        <div class="col-lg-6 col-md-12 col-12">
                          <div class="rnform-group">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div class="rnform-group">
                            <input type="email" placeholder="Email" />
                          </div>
                          <div class="rnform-group">
                            <input type="text" placeholder="Subject" />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-12">
                          <div class="rnform-group">
                            <textarea placeholder="Comment"></textarea>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="blog-btn">
                            <Link
                              class="btn btn-primary-alta btn-large w-100"
                              to="/"
                            >
                              <span>SEND MESSAGE</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="row g-5 pt--60">
                  <div class="col-lg-12">
                    <h3 class="title">Related Post</h3>
                  </div>

                  <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                    <div
                      class="rn-blog"
                      data-toggle="modal"
                      data-target="#exampleModalCenters"
                    >
                      <div class="inner">
                        <div class="thumbnail">
                          <Link to="blog-details.html">
                            <img src={f1} alt="Personal Portfolio Images" />
                          </Link>
                        </div>
                        <div class="content">
                          <div class="category-info">
                            <div class="category-list">
                              <Link to="blog-details.html">Creative</Link>
                            </div>
                            <div class="meta">
                              <span>
                                <i class="feather-clock"></i> 12 Min read
                              </span>
                            </div>
                          </div>
                          <h4 class="title">
                            <Link to="blog-details.html">
                              Dolor sit amet consectetur adipisicing.{" "}
                              <i class="feather-arrow-up-right"></i>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                    <div
                      class="rn-blog"
                      data-toggle="modal"
                      data-target="#exampleModalCenters"
                    >
                      <div class="inner">
                        <div class="thumbnail">
                          <Link to="/">
                            <img src={f2} alt="Personal Portfolio Images" />
                          </Link>
                        </div>
                        <div class="content">
                          <div class="category-info">
                            <div class="category-list">
                              <Link to="blog-details.html">Culture</Link>
                            </div>
                            <div class="meta">
                              <span>
                                <i class="feather-clock"></i> 5 min read
                              </span>
                            </div>
                          </div>
                          <h4 class="title">
                            <Link to="blog-details.html">
                              Lorem ipsum dolor sit amet
                              <i class="feather-arrow-up-right"></i>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                    <div
                      class="rn-blog"
                      data-toggle="modal"
                      data-target="#exampleModalCenters"
                    >
                      <div class="inner">
                        <div class="thumbnail">
                          <Link to="#">
                            <img src={f3} alt="Personal Portfolio Images" />
                          </Link>
                        </div>
                        <div class="content">
                          <div class="category-info">
                            <div class="category-list">
                              <Link to="#">Art</Link>
                            </div>
                            <div class="meta">
                              <span>
                                <i class="feather-clock"></i> 10 min read
                              </span>
                            </div>
                          </div>
                          <h4 class="title">
                            <Link to="blog-details.html">
                              Lorem ipsum dolor sit amet consectetur.
                              <i class="feather-arrow-up-right"></i>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
              <aside class="rwt-sidebar">
                <div class="rbt-single-widget widget_categories">
                  <h3 class="title">Categories</h3>
                  <div class="inner">
                    <ul class="category-list ">
                      <li>
                        <Link to="#">
                          <span class="left-content">Creative</span>
                          <span class="count-text">300</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="left-content">3D</span>
                          <span class="count-text">275</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="left-content">360 View</span>
                          <span class="count-text">625</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span class="left-content">Nature</span>
                          <span class="count-text">556</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span class="left-content">Galaxy</span>
                          <span class="count-text">247</span>
                       </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span class="left-content">Random</span>
                          <span class="count-text">457</span>
                       </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <span class="left-content">Art</span>
                          <span class="count-text">235</span>
                       </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="rbt-single-widget widget_recent_entries mt--40">
                  <h3 class="title">Recent Posts</h3>
                  <div class="inner">
                    <ul>
                      <li>
                        <Link class="d-block" to="#">
                          Lorem ipsum dolor sit amet consectetur.
                       </Link>
                        <span class="cate">Creative</span>
                      </li>
                      <li>
                      <Link class="d-block" to="#">
                          Lorem ipsum dolor sit amet consectetur.
                       </Link>
                        <span class="cate">Nature</span>
                      </li>
                      <li>
                      <Link class="d-block" to="#">
                          Lorem ipsum dolor sit amet consectetur.
                       </Link>
                        <span class="cate">Unique</span>
                      </li>
                      <li>
                      <Link class="d-block" to="#">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                       </Link>
                        <span class="cate">Party</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="rbt-single-widget widget_tag_cloud mt--40">
                  <h3 class="title">Tags</h3>
                  <div class="inner mt--20">
                    <div class="tagcloud">
                      <Link to="/">Religious</Link>
                      <Link to="/">Ethics</Link>
                      <Link to="/">Creative</Link>
                      <Link to="/">Design</Link>
                      <Link to="/">Minimal</Link>
                      <Link to="/">Funny</Link>
                      <Link to="/">Feel</Link>
                      <Link to="/">Love</Link>
                      <Link to="/">Relationship</Link>
                      <Link to="/">Happiness</Link>
                      <Link to="/">Extras</Link>
                      <Link to="/">Art</Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;