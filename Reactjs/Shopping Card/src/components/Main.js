import ProductCard from "./ProductCard";
const Main = () => {
  return (
    <div>
      <main className="my-3">
        <div className="container-md">
          <div className="row my-2">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control searchinput"
                  placeholder="Search products"
                />
                <button className="btn btn-primary searchbtn" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
          <ProductCard/>
        </div>
      </main>
    </div>
  );
};

export default Main