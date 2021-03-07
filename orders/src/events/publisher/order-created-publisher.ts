import { Publisher, OrderCreatedEvent, Subjects } from "@rkktickets/common";

export class OrderCreatePublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
