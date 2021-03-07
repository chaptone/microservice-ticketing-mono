import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";

it("fetch orders for an particular user", async () => {
  const ticket1 = Ticket.build({
    id: mongoose.Types.ObjectId().toHexString(),
    title: "ticket1",
    price: 20,
  });
  await ticket1.save();

  const ticket2 = Ticket.build({
    id: mongoose.Types.ObjectId().toHexString(),
    title: "ticket2",
    price: 20,
  });
  await ticket2.save();

  const ticket3 = Ticket.build({
    id: mongoose.Types.ObjectId().toHexString(),
    title: "ticket3",
    price: 20,
  });
  await ticket3.save();

  const user1 = global.signin();
  const user2 = global.signin();

  const { body: order1 } = await request(app)
    .post("/api/orders")
    .set("Cookie", user1)
    .send({ ticketId: ticket1.id })
    .expect(201);

  const { body: order2 } = await request(app)
    .post("/api/orders")
    .set("Cookie", user2)
    .send({ ticketId: ticket2.id })
    .expect(201);

  const { body: order3 } = await request(app)
    .post("/api/orders")
    .set("Cookie", user2)
    .send({ ticketId: ticket3.id })
    .expect(201);

  const response = await request(app)
    .get("/api/orders")
    .set("Cookie", user2)
    .expect(200);

  expect(response.body.length).toEqual(2);
  expect(response.body[0].id).toEqual(order2.id);
  expect(response.body[1].id).toEqual(order3.id);
  expect(response.body[0].ticket.id).toEqual(ticket2.id);
  expect(response.body[1].ticket.id).toEqual(ticket3.id);
});
