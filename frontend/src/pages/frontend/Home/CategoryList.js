export default function CategoryList() {
  
  return (
    <section>
      <div className="container pt-5" style={{ background: '#ffd6b2 linear-gradient(180deg, #fff3ea 0%, #ffd6b2 100%)' }}>
        <header className="mb-4 d-flex justify-content-between align-items-center">
          <h3>DANH MỤC QUAN TÂM</h3>
          <a href="/product-grid" className="d-block">
          <button  type="button" class="btn btn-rounded" style={{ backgroundColor: '#f6831f', color: 'white' }} data-mdb-ripple-init >Xem tất cả</button>

          </a>
        </header>


        <div className="row">
          {/* Danh mục 1 */}
          <div className="col" style={{ textAlign: 'center', minHeight: '160px',margin: '0 -5px' }}>
            <div className="card my-2 shadow-0">
              <a href="/product-detail" className="d-block">
                <img src="https://media.hcdn.vn/catalog/category/c24-trang-diem-moi_img_120x120_17b03c_fit_center.jpg" className="card-img-top rounded-3" style={{ width: '100%', height: '130px' }} />
                <div className="card-body p-0 pt-2 text-center">
                  <p className="card-text mb-1 p-0" style={{  color: '#545453' }}>Danh mục 1</p>
                </div>
              </a>
            </div>
          </div>


          <div className="col" style={{ margin: '0 -5px' }}>
            <div className="card my-2 shadow-0">
              <a href="/product-detail" className="d-block">
                <img src="https://media.hcdn.vn/catalog/category/c52-trang-diem-mat_img_120x120_17b03c_fit_center.jpg" className="card-img-top rounded-3" style={{ width: '100%', height: '130px' }} />
                <div className="card-body p-0 pt-2 text-center">
                  <p className="card-text mb-1 p-0" style={{  color: '#545453' }}>Danh mục 1</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col" style={{ margin: '0 -5px' }}>
            <div className="card my-2 shadow-0">
              <a href="/product-detail" className="d-block">
                <img src="https://media.hcdn.vn/catalog/category/19_3_img_120x120_17b03c_fit_center.jpg" className="card-img-top rounded-3" style={{ width: '100%', height: '130px' }} />
                <div className="card-body p-0 pt-2 text-center">
                  <p className="card-text mb-1 p-0" style={{  color: '#545453' }}>Danh mục 1</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col" style={{ margin: '0 -5px' }}>
            <div className="card my-2 shadow-0">
              <a href="/product-detail" className="d-block">
                <img src="https://media.hcdn.vn/catalog/category/2144_img_120x120_17b03c_fit_center.jpg" className="card-img-top rounded-3" style={{ width: '100%', height: '130px' }} />
                <div className="card-body p-0 pt-2 text-center">
                  <p className="card-text mb-1 p-0" style={{  color: '#545453' }}>Danh mục 1</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col" style={{ margin: '0 -5px' }}>
            <div className="card my-2 shadow-0">
              <a href="/product-detail" className="d-block">
                <img src="https://media.hcdn.vn/catalog/category/c50-trang-diem-mat_img_120x120_17b03c_fit_center.jpg" className="card-img-top rounded-3" style={{ width: '100%', height: '130px' }} />
                <div className="card-body p-0 pt-2 text-center">
                  <p className="card-text mb-1 p-0" style={{  color: '#545453' }}>Danh mục 1</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col" style={{ margin: '0 -5px' }}>
            <div className="card my-2 shadow-0">
              <a href="/product-detail" className="d-block">
                <img src="https://media.hcdn.vn/catalog/category/11_1_img_120x120_17b03c_fit_center.jpg" class="card-img-top rounded-3" style={{ width: '100%', height: '130px' }} />
                <div className="card-body p-0 pt-2 text-center">
                  <p className="card-text mb-1 p-0" style={{  color: '#545453' }}>Danh mục 1</p>
                </div>
              </a>
            </div>
          </div>
          {/* Danh mục 2 */}
          <div className="col" style={{ margin: '0 -5px' }}>
            <div className="card my-2 shadow-0">
              <a href="/product-detail" className="d-block">
                <img src="https://media.hcdn.vn/catalog/category/30_1_img_120x120_17b03c_fit_center.jpg" class="card-img-top rounded-3" style={{ width: '100%', height: '130px' }} />
                <div className="card-body p-0 pt-2 text-center">
                  <p className="card-text mb-1 p-0" style={{  color: '#545453' }}>Danh mục 2</p>
                </div>
              </a>
            </div>
          </div>
          {/* Danh mục 3 */}
          <div className="col" style={{ margin: '0 -5px' }}>
            <div className="card my-2 shadow-0">
              <a href="/product-detail" className="d-block">
                <img src="https://media.hcdn.vn/catalog/category/26_1_img_120x120_17b03c_fit_center.jpg" class="card-img-top rounded-3" style={{ width: '100%', height: '130px' }} />
                <div className="card-body p-0 pt-2 text-center">
                  <p className="card-text mb-1 p-0" style={{  color: '#545453' }}>Danh mục 3</p>
                </div>
              </a>
            </div>
          </div>
          {/* Tiếp tục cho các danh mục khác tương tự */}
        </div>
      </div>
    </section>
  );
}
