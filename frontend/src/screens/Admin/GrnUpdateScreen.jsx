import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import {
  listProductsDetails,
  updateProduct,
} from "../../actions/productActions";
import { productUpdateReset } from "../../reducers/singleProductSlice";

import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";
import {
  createMaterial,
  updateMaterials,
  viewSingleMaterial,
} from "../../actions/materialActions";
import { viewMatrialsReset } from "../../reducers/matrialSlice";
import { updateBatches, viewSingleBatch } from "../../actions/batchActions";

const GrnUpdateScreen = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    materialId: "",
    qty: 0,
    cost: 0,
    salesPrice: "",
  });

  const { materialId, qty, cost, salesPrice } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const materialDetail = useSelector((state) => state.batchDetails);
  const { sloading, serror, batch, ssuccess } = materialDetail;



  const materialUpdate = useSelector((state) => state.batchDetails);

  const {
    loading,
    error,

    success,
  } = materialUpdate;

  useEffect(() => {
    
    if (ssuccess) {
      // toast.success('Success')

      setFormData(batch);
      // setTimeout(function(){ navigate('/admin/materials')   }, 1000);
    } else {
      dispatch(viewSingleBatch(id));
     
    }
  }, [id, ssuccess]);

//  if(batch){
//   setTimeout(window.location.reload(), 1000)
//  }
console.log(batch)
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updateBatches({
        _id: id,

        materialId,
        qty,
        cost,
        salesPrice
      })
    );

    toast.success("Success");
    setTimeout(function () {
      navigate("/admin/batches");
    }, 1000);
  };

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value, //if e.target.id is boolean set as true or false, if it's null set as e.target.value ?? ---nulish operator
      }));
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (serror) {
    toast.error(serror);
  }

  const path = location.pathname.split("/")[3];

  const back = () => {
    dispatch(productUpdateReset());
    navigate(`/admin/batches`);
  };

  return (
    <div className="profile">
      <main className="pb-4">
        <Button className="btn btn-light my-3" onClick={back}>
          Go Back
        </Button>
        <FormContainer>
          <form onSubmit={onSubmit}>
            <header>
              <p className="pageHeader"> Update Batch</p>
            </header>

            <label className="formLabel">Material ID</label>
            <input
              className="formInputName"
              type="text"
              id="materialId"
              value={materialId}
              onChange={onMutate}
              // maxLength='32'
              // minLength='10'
              required
            />
            <label className="formLabel">Quantity</label>
            <input
              className="formInputName"
              type="number"
              id="qty"
              min="0"
              value={qty}
              onChange={onMutate}
              // maxLength='32'
              // minLength='10'
              required
            />

            <label className="formLabel">Cost</label>
            <input
              className="formInputName"
              type="number"
              min="0"
              id="cost"
              value={cost}
              onChange={onMutate}
              // maxLength='32'
              // minLength='10'
              required
            />

            <label className="formLabel">Sales Price</label>
            <input
              className="formInputName"
              type="number"
              min="0"
              id="salesPrice"
              value={salesPrice}
              onChange={onMutate}
              // maxLength='32'
              // minLength='10'
            />
            <button type="submit" className="primaryButton createListingButton">
              Update
            </button>
          </form>
        </FormContainer>
        <br /> <br /> <br /> <br /> <br />
        <br /> <br />
      </main>
    </div>
  );
};

export default GrnUpdateScreen;
