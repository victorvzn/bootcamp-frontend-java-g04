import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getInvoice } from "../services/invoices"
import { TbChevronLeft } from "react-icons/tb";
import BaseTag from "../components/shared/BaseTag";
import BaseButton from "../components/shared/BaseButton";

const InvoiceDetailPage = () => {
  const { id } = useParams()

  const [invoice, setInvoice] = useState(null)

  useEffect(() => {
    getInvoice(id)
      .then(data => setInvoice(data))
  }, [id])

  return (
    <section className="w-full md:w-[740px] m-auto flex flex-col gap-5 text-white">
      <Link
        to='/invoices'
        className="text-white font-bold flex gap-5 items-center"
      >
        <TbChevronLeft className="text-slate-400" />
        Go back
      </Link>

      <header className="flex justify-between bg-slate-700 py-4 px-8 mt-10 rounded-lg">
        <div className="flex items-center gap-3">
          <h3>Status</h3>
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

        <div className="flex items-center gap-3">
          <Link>
            <BaseButton
              label="Edit"
              bgColor="bg-slate-600"
            />
          </Link>

          <BaseButton
            label="Delete"
            bgColor="bg-red-500"
          />

          <BaseButton
            label="Mark as Paid"
            bgColor="bg-violet-500"
          />
        </div>
      </header>

      <section>
        
      </section>

      <pre>{JSON.stringify(invoice, null, 2)}</pre>
    </section>
  )
}

export default InvoiceDetailPage