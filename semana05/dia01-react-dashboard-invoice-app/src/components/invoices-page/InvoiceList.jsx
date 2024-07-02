import { TbChevronRight } from "react-icons/tb";

const InvoiceList = ({ invoices }) => {
  return (
    <>
      <section>
        {invoices && invoices.map(invoice => {
          return (
            <article
              className="text-white"
              key={invoice.id}
            >
              <div>
                <span>#</span>
                <span>{invoice.code}</span>
              </div>
              <div>{invoice.invoice.date}</div>
              <div>{invoice.bill.to.client.name}</div>
              <div>
                {invoice.invoice.currency.symbol}
                {invoice.invoice.grandTotal}
              </div>
              <div>
                {invoice.status}
              </div>
              <div>
                <TbChevronRight />
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default InvoiceList