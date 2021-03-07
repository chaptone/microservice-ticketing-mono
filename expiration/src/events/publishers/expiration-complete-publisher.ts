import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@rkktickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
