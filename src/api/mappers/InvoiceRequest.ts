export default interface InvoiceRequest {
    hours: string,
    dueDate: string,
    invoiceMonth: string,
    extraAmount?: string,
}