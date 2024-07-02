import InvoiceHeader from "../components/invoices-page/InvoiceHeader"
import InvoiceList from "../components/invoices-page/InvoiceList"



// https://668348284102471fa4c9a3dc.mockapi.io/api/v1/invoices

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