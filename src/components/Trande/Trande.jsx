import React from 'react'

export default function Trande() {
  return (
    <div id="trending-items" className="section-container">
			{/* <!-- BEGIN container --> */}
			<div className="container">
				{/* <!-- BEGIN section-title --> */}
				<h4 className="section-title clearfix">
					<a href="#" className="pull-right m-l-5"><i className="fa fa-angle-right f-s-18"></i></a>
					<a href="#" className="pull-right"><i className="fa fa-angle-left f-s-18"></i></a>
					Trending Items
					<small>Shop and get your favourite items at amazing prices!</small>
				</h4>
				{/* <!-- END section-title --> */}
				{/* <!-- BEGIN row --> */}
				<div className="row row-space-10">
					{/* <!-- BEGIN col-2 --> */}
					<div className="col-lg-2 col-md-4">
						{/* <!-- BEGIN item --> */}
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/product/product-iphone.png" alt="" />
								<div className="discount">15% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product_detail.html">iPhone 6s Plus<br />16GB</a>
								</h4>
								<p className="item-desc">3D Touch. 12MP photos. 4K video.</p>
								<div className="item-price">$649.00</div>
								<div className="item-discount-price">$739.00</div>
							</div>
						</div>
						{/* <!-- END item --> */}
					</div>
					{/* <!-- END col-2 --> */}
					{/* <!-- BEGIN col-2 --> */}
					<div className="col-lg-2 col-md-4">
						{/* <!-- BEGIN item --> */}
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/product/product-ipad-pro.png" alt=""  />
								<div className="discount">32% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product.html">9.7-inch iPad Pro<br />32GB</a>
								</h4>
								<p className="item-desc">Super. Computer. Now in two sizes.</p>
								<div className="item-price">$599.00</div>
								<div className="item-discount-price">$799.00</div>
							</div>
						</div>
						{/* <!-- END item --> */}
					</div>
					{/* <!-- END col-2 --> */}
					{/* <!-- BEGIN col-2 --> */}
					<div className="col-lg-2 col-md-4">
						{/* <!-- BEGIN item --> */}
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/product/product-imac.png" alt="" />
								<div className="discount">20% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product.html">21.5-inch iMac<br />with Retina Display</a>
								</h4>
								<p className="item-desc">Retina. Now in colossal and ginormous.</p>
								<div className="item-price">$1,099.00</div>
								<div className="item-discount-price">$1,299.00</div>
							</div>
						</div>
						{/* <!-- END item --> */}
					</div>
					{/* <!-- END col-2 --> */}
					{/* <!-- BEGIN col-2 --> */}
					<div className="col-lg-2 col-md-4">
						{/* <!-- BEGIN item --> */}
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/product/product-apple-watch.png" alt="" />
								<div className="discount">13% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product.html">Apple Watch<br />Stainless steel cases</a>
								</h4>
								<p className="item-desc">You. At a glance.</p>
								<div className="item-price">$599.00</div>
								<div className="item-discount-price">$799.00</div>
							</div>
						</div>
						{/* <!-- END item --> */}
					</div>
					{/* <!-- END col-2 --> */}
					{/* <!-- BEGIN col-2 --> */}
					<div className="col-lg-2 col-md-4">
						{/* <!-- BEGIN item --> */}
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/product/product-macbook-pro.png" alt="" />
								<div className="discount">30% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product.html">MacBook Pro<br />with Retina Display</a>
								</h4>
								<p className="item-desc">Stunning Retina Display</p>
								<div className="item-price">$1299.00</div>
								<div className="item-discount-price">$1499.00</div>
							</div>
						</div>
						{/* <!-- END item --> */}
					</div>
					{/* <!-- END col-2 --> */}
					{/* <!-- BEGIN col-2 --> */}
					<div className="col-lg-2 col-md-4">
						{/* <!-- BEGIN item --> */}
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/product/product-apple-tv.png" alt="" />
								<div className="discount">40% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product.html">Apple Tv<br />32GB</a>
								</h4>
								<p className="item-desc">The future of television is here.</p>
								<div className="item-price">$149.00</div>
								<div className="item-discount-price">$249.00</div>
							</div>
						</div>
						{/* <!-- END item --> */}
					</div>
					{/* <!-- END col-2 --> */}
				</div>
				{/* <!-- END row --> */}
			</div>
			{/* <!-- END container --> */}
		</div>
  )
}
