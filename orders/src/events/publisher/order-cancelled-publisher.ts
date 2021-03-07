import { Subjects, Publisher, OrderCancelledEvent } from "@rkktickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
