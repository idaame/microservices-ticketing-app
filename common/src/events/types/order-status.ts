export enum OrderStatus {
  Created = "created", // Created, but not reserved
  Cancelled = "cancelled", // Ticket is already reserved, user cancels order or order expires
  AwaitingPayment = "awaiting:payment", // Order has successfully reserved ticket
  Complete = "complete", // The order has reserved ticket and payment is provided
}
