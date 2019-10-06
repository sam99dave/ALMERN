const stripe = require("stripe")("sk_test_ybViH0KKcVFqm5FMXrBN1BpS000FZPP3Au");
const express = require("express");
const router = express.Router();

// Another Method For Stripe Payment but unknown to us
/*router.post("/pay", async () => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: "T-shirt",
        description: "Comfortable cotton t-shirt",
        images: ["https://example.com/t-shirt.png"],
        amount: 500,
        currency: "gbp",
        quantity: 1
      }
    ],
    success_url:
      "http://localhost:5000/dashboard.html/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:5000/dashboard.html/cancel"
  });
})();*/

router.post("/charge", (req, res) => {
  var token = req.body.stripeToken;
  var chargeAmount = req.body.chargeAmount;
  var charge = stripe.charges.create(
    {
      amount: chargeAmount,
      currency: "gbp",
      source: token
    },
    (err, charge) => {
      if (err === "StripeCardError") {
        console.log("Your card was declined");
      }
    }
  );

  console.log("Your payment was successful");
  res.redirect("/dashboard.html");
});

module.exports = router;
