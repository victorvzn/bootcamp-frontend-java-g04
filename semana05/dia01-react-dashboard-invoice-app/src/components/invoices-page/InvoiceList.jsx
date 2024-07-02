import { TbChevronRight } from "react-icons/tb";

import { Link } from 'react-router-dom'
import BaseTag from "../shared/BaseTag";

const InvoiceList = ({ invoices }) => {

  // TODO: Manejar el preloading de los invoices

  return (
    <>
      <section className="w-full md:w-[740px] m-auto flex flex-col gap-5">
        {invoices && invoices.map(invoice => {
          return (
            <article
              className="bg-slate-700 px-4 py-4 rounded-lg flex justify-between text-white text-base items-center gap-5"
              key={invoice.id}
            >
              <div className="w-20">
                <span className="text-slate-400">#</span>
                <span className="font-extrabold uppercase">{invoice.code}</span>
              </div>
              <div className="w-44 font-semibold">{invoice.invoice.date}</div>
              <div className="w-44 font-semibold">{invoice.bill.to.client.name}</div>
              <div className="w-44 text-3xl font-extrabold text-right">
                {invoice.invoice.currency.symbol}
                {invoice.invoice.grandTotal}
              </div>
              <div>
                {invoice.status === 'paid'
                  && <BaseTag label={invoice.status} bgColor="bg-emerald-400/20" textColor="text-emerald-400" />
                }
                {invoice.status === 'pending'
                  && <BaseTag label={invoice.status} bgColor="bg-orange-400/20" textColor="text-orange-400" />
                }
                {invoice.status === 'draft'
                  && <BaseTag label={invoice.status} bgColor="bg-slate-400/20" textColor="text-slate-100" />
                }
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