import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Feature = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    postcode: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }
    if (!formData.city) {
      newErrors.city = 'City is required';
      isValid = false;
    }
    if (!formData.postcode) {
      newErrors.postcode = 'Postcode is required';
      isValid = false;
    } else if (!/^\d{5}$/.test(formData.postcode)) {
      newErrors.postcode = 'Postcode must be 5 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success('picture abi bakii hein . stay tune');

    }
  };

  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  
  return (
    <div className="container mx-auto p-4">
      

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Cart Section */}
        <div className="p-4 border rounded-lg">
          <div className="grid grid-cols-4 gap-32 text-gray-600 font-semibold border-b pb-4">
            <span>Product</span>
            <span className=''>Name</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between mt-3 border-b py-4"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={item.image}
                  alt="Product"
                  className="w-11 h-11 object-cover rounded"
                />
                <span className="font-semibold text-sm sm:text-base">
                  {item.name}
                </span>
              </div>

              <div className="text-gray-700 font-semibold text-sm sm:text-base">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <span className="text-gray-700 text-sm sm:text-base">
              {item.price}
               </span>
            </div>
          ))}

          
        </div>

        {/* Form Section */}
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold text-lg mb-4">Cart Totals</h2>

          <div className="flex justify-between mb-2 text-sm sm:text-base">
            <span>Subtotal:</span>
            <span>${quantities}</span>
          </div>

          <div className="border-b mb-4"></div>

          <div className="mb-4">
            <span className="font-semibold text-sm sm:text-base">Shipping:</span>
            <p className="text-gray-500 text-xs sm:text-sm mb-2">
              There are no shipping methods available. Please double-check your
              address, or contact us if you need any help.
            </p>

            <div className="mb-2 font-semibold text-sm sm:text-base">
              Delivery Information
            </div>

            <select className="w-full border p-2 mb-2 rounded-lg text-sm sm:text-base">
              <option>Select a country...</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Pakistan</option>
              <option>India</option>
            </select>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full border p-2 mb-2 rounded-lg text-sm sm:text-base"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName}</p>
              )}

              <input
                type="text"
                name="phone"
                placeholder="Enter your Phone Number"
                className="w-full border p-2 mb-2 rounded-lg text-sm sm:text-base"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone}</p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full border p-2 mb-2 rounded-lg text-sm sm:text-base"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email}</p>
              )}

              <input
                type="text"
                name="city"
                placeholder="Enter your City"
                className="w-full border p-2 mb-2 rounded-lg text-sm sm:text-base"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && (
                <p className="text-red-500">{errors.city}</p>
              )}

              <input
                type="text"
                name="postcode"
                placeholder="Postcode / Zip"
                className="w-full border p-2 mb-2 rounded-lg text-sm sm:text-base"
                value={formData.postcode}
                onChange={handleChange}
              />
              {errors.postcode && (
                <p className="text-red-500">{errors.postcode}</p>
              )}
              <div className="flex justify-between mb-4 text-sm sm:text-base">
                <span>Total:</span>
                <span>
                  $
                  {cartItems
                    .reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-black text-white py-2 rounded-lg text-sm sm:text-base">
                Proceed to Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
