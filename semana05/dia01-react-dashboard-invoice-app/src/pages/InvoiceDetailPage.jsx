import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getInvoice } from "../services/invoices"

const InvoiceDetailPage = () => {
  const { id } = useParams()

  const [invoice, setInvoice] = useState(null)

  useEffect(() => {
    getInvoice(id)
      .then(data => setInvoice(data))
  }, [id])

  return (
    <section className="w-full md:w-[740px] m-auto flex flex-col gap-5 text-white">
      {id}

      <pre>{JSON.stringify(invoice, null, 2)}</pre>
    </section>
  )
}

export default InvoiceDetailPage