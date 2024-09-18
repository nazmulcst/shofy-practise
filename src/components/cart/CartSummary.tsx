import React, { useEffect, useState } from "react";
import Title from "../Title";
import Button from "../ui/Button";
import PriceFormat from "../PriceFormat";
import { ProductType } from "../../../type";
import { useSession } from "next-auth/react";

interface Props {
  cart: ProductType[];
}

const CartSummary = ({ cart }: Props) => {
  const [totalAmt, setTotalAmt] = useState(0);
  const [discountAmt, setDiscountAmt] = useState(0);

  const { data: session } = useSession();

  useEffect(() => {
    let amt = 0;
    let discount = 0;
    cart?.map((item) => {
      amt += item?.price * item?.quantity!;
      discount +=
        ((item?.price * item?.discountPercentage) / 100) * item?.quantity!;
    });

    setTotalAmt(amt);
    setDiscountAmt(discount);
  }, [cart]);

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: cart,
        email: session?.user?.email,
      }),
    });
    console.log("res", await response?.json());
  };

  return (
    <section className="rounded-lg bg-gray-100 px-4 py-6 sm:p-10 lg:col-span-5 mt-16 lg:mt-0">
      <Title>Cart Summary</Title>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Sub Total</Title>
          <PriceFormat amount={totalAmt + discountAmt} />
        </div>
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Discount</Title>
          <PriceFormat amount={discountAmt} />
        </div>
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Payable Amount</Title>
          <PriceFormat amount={totalAmt} className="text-lg font-bold" />
        </div>
       <form action="/create-checkout-session" method="POST">
       <Button className="h-10 w-full rounded-full" onClick={handleCheckout}>Checkout</Button>
       </form>
      </div>
    </section>
  );
};

export default CartSummary;