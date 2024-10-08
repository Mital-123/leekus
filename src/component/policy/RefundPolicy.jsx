import React from 'react'
import Hoc from '../Hoc'

function RefundPolicy() {
  return (
    <>
    
    <div className="container-fluid  chamberifont">
      <div className="row">
        <div className="col-lg-3 col-md-2 col-sm-1"></div>
        <div className="col-lg-6 col-md-8 col-sm-10">
           <div className='d-flex justify-content-center'>
           <h1 className="text-center text-dark fs-3 mt-5 borderbottom">Refund policy</h1>
            </div><br />
          <strong style={{ fontSize: '16px' }}>Returns</strong>
          <br /><br />
          <p>We accept returns placed within 7 days from the date of receipt. Return requests placed after 7 days of receipt will not be accepted.</p>
          <p>Products bought in the sale are ineligible for return. They can be only exchanged for a different size.</p>
          <p>Customized and altered products are ineligible for return.</p>
          <p>Jewelry is non-returnable. We're happy to exchange if the delivered item is incorrect or damaged if the request is raised within 24 hours of delivery.</p>

      <p>Orders placed with delivery address outside India are ineligible for returns and exchanges.</p>
          <p>Important things to keep in mind while sending back the product for return:</p>
          <p>-All items must have the original tags and should be unworn, unwashed, and undamaged.</p>
          <p>-To ensure your garments are not damaged during shipment, please re-use the entire original packaging for proper care and protection.</p>
          <p>-All return requests have to be initiated within 7 days of receipt of the product. You have to email <a href="mailto:support@leekus.com">support@leekus.com</a> from your registered email id to trigger the request or Whatsapp us at +91-7990890206.</p>
          <p>-It takes about 5-6 working days to complete your return request post your request has been triggered.</p>
          <p>There are certain situations where only partial refunds are granted (if applicable)Any item not in its original condition is damaged or missing parts for reasons not due to our error or any item that is returned more than 7 days after delivery.</p><br />

          <strong style={{ fontSize: '16px' }}>Wrong or Damaged Item Delivered</strong><br /><br />
          <p>All orders go through a stringent quality check before shipping. However, in the off chance that you have received a damaged product, please notify us at <a href="mailto:support@leekus.com">support@leekus.com</a> within 3 days of receiving the order. In case of either a damaged product return or size exchange, please write to <a href="mailto:support@leekus.com">support@leekus.com</a> with the subject: RETURNS. Clothing sent to us without a prior email will not be accepted. Leekus must be notified within three days of receipt of clothes about your intent to exchange. Once the email is received, we accept returns within 15 days.</p><br />

          <strong style={{ fontSize: '16px' }}>Hygiene Policy</strong><br /><br />
          <p>Keeping in mind the health and safety of both our dear customers and our employees, we adhere to a stringent hygiene policy. </p>
          <p>Please check the Shipping tab on each product page to check if the product falls under this policy.</p><br />

          <strong style={{ fontSize: '16px' }}>Refunds</strong><br /><br />
          <p>We have two options for processing returns-</p>
          <p>1. Store Credit- Store credit of an equal amount is issued which can be used in future purchases from the brand website. This credit is available for 1 whole year.</p>
          <p>2. Bank Refund- We refund the amount in your bank account. We need the following details- name, account number, IFSC code, Bank name, and branch name to process the refund.</p>
          <p>All refunds are processed within 14 days of successful reverse pickup.</p><br />

          <strong style={{ fontSize: '16px' }}>Sale Items</strong><br /><br />
          <p>We do not offer refunds on orders sold during the Sale. Items bought in the sale can only be exchanged for a different size.</p><br />

          <strong style={{ fontSize: '16px' }}>Late or missing refunds</strong><br /><br />
          <p>If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.</p>
          <p>Next, contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at <a href="mailto:support@leekus.com">support@leekus.com</a> or Whatsapp us at +91-7990890206. </p><br />
        </div>
        <div className="col-lg-3 col-md-2 col-sm-1"></div>
      </div>
    </div>
    
    </>
  )
}

export default Hoc(RefundPolicy)