import React from "react";
import { Container, Table } from "react-bootstrap";
import { StyledContainer } from "../../auth/StyledContainer";

const ShippingPolicy = () => {
  return (
    <Container style={{ marginTop: "16vh" }}>
      <StyledContainer>
        <div>
          <h1 className="fw-bold pt-5">SHIPPING POLICY</h1>
        </div>
        <p className="fw-bold py-4 fs-5">
          PLACE OF DELIVERY, DEADLINES AND LOSSES
        </p>
        <p className="fw-bold fs-5">
          All products are made on demand, within a maximum of 10 working days
          will be made available to the courier company.
        </p>
        <p>
          1 - Approximate lead times once the product is delivered to the
          courier company will be as follows:
        </p>
        <p>
          (The cost of shipments is calculated per package/weight of
          merchandise)
        </p>
        <div>
          <p className="fw-bold">Península</p>
          <p>10 days production time + 24-48h shipping time</p>
        </div>
        <div>
          <p className="fw-bold">Baleares</p>
          <p>10 days production time + 3 days shipping time</p>
        </div>
        <div>
          <p className="fw-bold">Canarias/Ceuta/Melilla</p>
          <p>10 days production time + 7 days shipping time</p>
        </div>
        <div>
          <p className="fw-bold">Rest of Europe</p>
          <p>10 days production time + 10 days shipping time</p>
        </div>
        <div>
          <p className="fw-bold">Rest of the World</p>
          <p>10 days production time + 5 days* shipping time</p>
        </div>
        <p>
          * Due to the COVID-19 situation, shipments to these areas may be
          delayed.
        </p>
        <p>The cost of shipments is calculated per package/weight of goods:</p>
      </StyledContainer>
      <div className="mx-xl-5">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Up to 1Kg</th>
              <th>From 1 to 2Kg</th>
              <th>From 2kg and up</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Península</td>
              <td>4.84€</td>
              <td>6.05€</td>
              <td>7.26€</td>
            </tr>
            <tr>
              <td>Baleares</td>
              <td>8.47€</td>
              <td>10.29€</td>
              <td>13.31€</td>
            </tr>
            <tr>
              <td>Canarias*</td>
              <td>14.52€</td>
              <td>16.34€</td>
              <td>19.36€</td>
            </tr>
            <tr>
              <td>Ceuta/Melilla*</td>
              <td>14.52€</td>
              <td>16.34€</td>
              <td>19.36€</td>
            </tr>
            <tr>
              <td>Europa*</td>
              <td>20€</td>
              <td>20€</td>
              <td>20€</td>
            </tr>
            <tr>
              <td>Rest of the World*</td>
              <td>20€</td>
              <td>20€</td>
              <td>20€</td>
            </tr>
          </tbody>
        </Table>
        <p>*Taxes/customs to be paid by the buyer.</p>
      </div>
      <StyledContainer>
        <p>
          The website administrator shall not be liable for any errors caused in
          the delivery when the delivery address entered by the USER/CUSTOMER in
          the order form does not conform to reality or has been omitted.
        </p>
        <p>
          Delivery times may vary due to logistical reasons or force majeure. In
          cases of delays in deliveries, the website administrator will inform
          its USERS/CUSTOMERS, as soon as it becomes aware of them.
        </p>
        <p>
          Each delivery is considered to have been made from the moment the
          courier agency makes the product available to the USER/CUSTOMER, which
          is materialized through the control system used by the transport
          company.
        </p>
        <p>
          Delays in delivery shall not be considered in cases where the order
          has been made available to the USER/CUSTOMER by the carrier within the
          deadline and could not be delivered for reasons attributable to the
          USER/CUSTOMER.
        </p>
        <p>1.A - Delivery data, non-deliveries and product losses</p>
        <p>
          The web site administrator contracts as part of the courier delivery
          service to Correos de España, the performance of a series of follow-up
          actions, aimed at ensuring that the delivery takes place.
        </p>
        <p>
          If after 7 days after the delivery of the order, delivery has not been
          arranged, the USER/CUSTOMER should contact the web site administrator.
        </p>
        <p>
          If the USER/CUSTOMER does not proceed in this way, after 10 working
          days from the delivery of the order, it will be returned and the
          USER/CUSTOMER will have to pay the shipping and return costs of the
          order, as well as the possible associated management costs.
        </p>
        <p>
          If the reason for the non-delivery is the loss of the order,
          LEEOSMERCH, SL and Webedia España SL, will initiate an investigation,
          which will delay the delivery of the order from one to three weeks,
          circumstance that the administrator will solve with the customer.
        </p>
        <p>2.B - Diligence in delivery</p>
        <p>
          The USER/CUSTOMER, must check the good condition of the order before
          the transport or post office that, on behalf of the administrator of
          the web page, makes the delivery of the ordered product, indicating in
          the delivery note any anomaly that could be detected in the order.
        </p>
        <p>
          If subsequently, once the USER/CUSTOMER has checked the products,
          he/she detects any incident such as signs of having been tampered with
          or any damage caused by the shipment, he/she undertakes to notify the
          administrator within 15 calendar days of delivery, via e-mail:
          hello@ogsbrand.com.
        </p>
      </StyledContainer>
    </Container>
  );
};

export default ShippingPolicy;
