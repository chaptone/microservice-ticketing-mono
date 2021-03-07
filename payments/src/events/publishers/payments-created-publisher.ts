import { PaymentCreatedEvent, Publisher, Subjects } from "@rkktickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
