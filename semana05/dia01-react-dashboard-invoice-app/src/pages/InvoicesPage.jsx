import InvoiceHeader from "../components/invoices-page/InvoiceHeader"
import InvoiceList from "../components/invoices-page/InvoiceList"

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState([])

  return (
    <>
      <InvoiceHeader />

      <InvoiceList />
    </>
  )
}

export default InvoicesPage