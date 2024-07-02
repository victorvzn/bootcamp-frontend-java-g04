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
                {invoice.code}
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default InvoiceList