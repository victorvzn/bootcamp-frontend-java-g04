import { TbChevronRight } from "react-icons/tb";

import { Link } from 'react-router-dom'

const InvoiceList = ({ invoices }) => {
  return (
    <>
      <section className="w-full md:w-[740px] m-auto flex flex-col gap-5">
        {invoices && invoices.map(invoice => {
          return (
            <article
              className="bg-slate-700 px-4 py-4 rounded-lg flex justify-between text-white text-base items-center gap-3"
              key={invoice.id}
            >
              <div className="w-20">
                <span className="text-slate-400">#</span>
                <span className="font-extrabold uppercase">{invoice.code}</span>
              </div>
              <div className="w-44 font-semibold">{invoice.invoice.date}</div>
              <div className="w-44 font-semibold">{invoice.bill.to.client.name}</div>
              <div className="w-44 text-3xl font-extrabold">
                {invoice.invoice.currency.symbol}
                {invoice.invoice.grandTotal}
              </div>
              <div>
                {invoice.status}
              </div>
              <div className="w-14 flex justify-center">
                <Link
                  to={`/invoices/${invoice.id}`}
                  className="p-2 rounded-full hover:bg-slate-600 hover:duration-300"
                >
                  <TbChevronRight size="1.5rem" />
                </Link>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default InvoiceList