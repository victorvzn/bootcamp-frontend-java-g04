import { useEffect, useState } from "react"

import InvoiceHeader from "../components/invoices-page/InvoiceHeader"
import InvoiceList from "../components/invoices-page/InvoiceList"
import { fetchInvoices } from "../services/invoices"

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    fetchInvoices()
      .then((data) => setInvoices(data))
  }, [])

  return (
    <>
      <InvoiceHeader />

      <InvoiceList />

      <pre>{JSON.stringify(invoices, null, 2)}</pre>
    </>
  )
}

export default InvoicesPage