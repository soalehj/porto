import ImgArticle from "../Asset/Gambar artikel.png";

const Blog = () => {
  return (
    <div className="section-blog">
      <div className="container">
        <div className="blog-header">
          <p>Update</p>
          <h3>Recent Article</h3>
        </div>
        <div className="blog-list">
          <div className="row">
            <div className="blog-card col-sm-4 col-md-3 col-lg-4">
              <div className="card">
                <img src={ImgArticle} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p>Date</p>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="card-label d-flex">
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <span>Category</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="blog-card col-sm-4 col-md-3 col-lg-3">
              <div className="card">
                <img src={ImgArticle} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p>Date</p>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="card-label d-flex">
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <span>Category</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-card col-sm-4 col-md-3 col-lg-3">
              <div className="card">
                <img src={ImgArticle} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p>Date</p>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="card-label d-flex">
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <span>Category</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-card col-sm-4 col-md-3 col-lg-3">
              <div className="card">
                <img src={ImgArticle} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p>Date</p>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="card-label d-flex">
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <span>Category</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
