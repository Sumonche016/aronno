const OrderSummery = () => {
  return (
    <div className="border-t border-borderDark mt-6 marker:">
      <h1 className="text-xl font-medium mt-4">Order Summery</h1>
      <div className="space-y-4">
        <div className="flex justify-between mt-4">
          <h1>Sub Total</h1>
          <h1>1400tk</h1>
        </div>
        <div className="flex justify-between">
          <h1>Delivary Charge</h1>
          <h1>60tk</h1>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
