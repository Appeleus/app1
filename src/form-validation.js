import React from "react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
  const cats = [['100', 'IT'], ['200', 'Mechanical'], ['300', 'Chemical']]
  const opts = ['Option 1', 'Option 2', 'Option 3']
  const inputFile = React.createRef()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitForm = (event) => {
    let maxNumFiles = 3
    let maxSize = 300
    if (inputFile.current.files.length > maxNumFiles) {
      alert(`No more than ${maxNumFiles} files allowed`);
      event.preventDefault();
      return;
    }

    for (let f of inputFile.current.files) {
      if (f.size > maxSize * 1000) {
        alert(`The maximum file size allowed is ${maxSize}`);
        event.preventDefault();
        return;
      }
    }
  }

  const err = {
    fontSize: "smaller",
    color: "red",
  }

  return (
    <div
      className="mt-3 mb-5 mx-auto p-3 rounded"
      style={{ width: "400px", background: "#cee" }}>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-group mb-3">
          <label htmlFor="cats" className="form-label">Catagory *</label>
          <select id="cats" className="form-select form-select-sm">
            {
              cats.map((item) => {
                return <option value={item[0]}>{item[1]}</option>;
              })
            }
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name">Product Name *</label>
          <input type="text" id="name" name="name" maxLength="50"
            className="form-control form-control-sm"
            {...register("name", { required: true, maxLength: 30 })} />
          {errors.name && <div style={err}>Please put in Product name</div>}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="price">Product Price *</label>
          <input type="number" id="price" name="price" min="0" step="any"
            className="form-control form-control-sm"
            {...register("price", {
              validate: (value) => parseFloat(value) > 0
            })} />
          {errors.name && (
            <div style={err}>Product price must be higher than 0</div>
          )}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="detail">Product Detail*</label>
          <textarea id="detail" name="detail" rows="2" maxLength="250"
            className="form-control form-control-sm"
            {...register("detail", { required: true, minLength: 1, maxLength: 200 })}>
          </textarea>
          {errors.name && <div style={err}>Product detail can't be empty</div>}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="dateAdded">Product Added Date *</label>
          <input type="date" id="dateAdded" name="dateAdded"
            className="form-control form-control-sm" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="file" className="form-label">
            Product Image * (No more than 3 Files, Each 300 KB/Files)</label>
          <input type="file" id="file" accept="image/*"
            className="form-control form-control-sm" ref={inputFile} multiple />
        </div>

        <div> More Options</div>
        {
          opts.map((opt, i) => {
            return (
              <div className="form-check form-check-inline mb-2">
                <input type="checkbox" id={"opt" + i} value={opt}
                  className="form-check-input"
                />
                <label htmlFor={"opt" + i} className="form-check-label">{opt}</label>
              </div>
            )
          })
        }
        <div className="text-center mt-4">
          <button className="btn btn-primary btn-sm px-4">OK</button>
        </div>
      </form>
    </div>
  )
}
