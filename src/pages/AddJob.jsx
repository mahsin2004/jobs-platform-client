// import Swal from "sweetalert2";

const AddProduct = () => {
  const addProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;
    const image = form.image.value;
    const brand = {
      name,
      brandName,
      type,
      price,
      rating,
      shortDescription,
      image,
    };
    console.log(brand);

//     fetch(
//       "https://brand-shop-server-ee5q1ivi9-mahsin2004s-projects.vercel.app/brands",
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(brand),
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Successfully",
//             text: "Product Adding",
//             icon: "success",
//             confirmButtonText: "oky",
//           });
//           form.reset();
//         }
//       });
  };

  return (
    <div className="max-w-[991px] mx-auto my-16 px-5">
      <div className="bg-base-200 mt-6 md:px-10 px-2 lg:px-20 py-12">
        <div className="mx-auto text-center max-w-[600px]">
          <h1 className=" text-3xl lg:text-[45px]">Post New Job</h1>
        </div>
        <form onSubmit={addProduct} className="">
          <div className=" grid lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brandName"
                placeholder="Enter brand name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Type</span>
              </label>
              <select 
                name="type"
                placeholder="select type"
                className="input input-bordered"
                required
                >
                <option value="car">car</option>
                <option value="bus">bus</option>
                <option value="mini">mini bus</option>
                <option value="truck">truck</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Enter rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="shortDescription"
                placeholder="Enter short description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="label-text">Image Link</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2 ">
              <button
                type="submit"
                className="py-3 bg-slate-700  text-white font-medium px-5 rounded-md"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
