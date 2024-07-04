import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { deleteInvoice, getInvoice, updateInvoiceStatus } from "../services/invoices"
import { TbChevronLeft } from "react-icons/tb";
import BaseTag from "../components/shared/BaseTag";
import BaseButton from "../components/shared/BaseButton";
import Swal from 'sweetalert2'

const InvoiceDetailPage = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [invoice, setInvoice] = useState({})
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    getInvoice(id)
      .then(data => setInvoice(data))
  }, [id, refresh])

  const handleMarkAsPaid = async () => {
    console.log('MArk as paid clicked...')
    const response = await updateInvoiceStatus(id, 'paid')

    if (response) {
      // Actualizar la pagina
      setRefresh(refresh + 1)
    }
  }

  const handleInvoiceDelete = async () => {
    console.log('deleting invoice..', id)

    // TODO: Implementar el delete del invoice

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteInvoice(id)
          .then(res => {
            if (res) {
              Swal.fire({
                title: "Deleted!",
                text: "Your invoice has been deleted.",
                icon: "success"
              });

              navigate('/invoices')
            }
          })
      }
    });

    

  }

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
            && <BaseTag label={invoice?.status} bgColor="bg-emerald-400/20" textColor="text-emerald-400" />
          }
          {invoice.status === 'pending'
            && <BaseTag label={invoice?.status} bgColor="bg-orange-400/20" textColor="text-orange-400" />
          }
          {invoice.status === 'draft'
            && <BaseTag label={invoice?.status} bgColor="bg-slate-400/20" textColor="text-slate-100" />
          }
        </div>

        <div className="flex items-center gap-3">
          <Link to={`/invoices/${invoice?.id}/edit`}>
            <BaseButton
              label="Edit"
              bgColor="bg-slate-600"
            />
          </Link>

          <BaseButton
            label="Delete"
            bgColor="bg-red-500"
            onClick={handleInvoiceDelete}
          />

          <BaseButton
            label="Mark as Paid"
            bgColor="bg-violet-500"
            onClick={handleMarkAsPaid}
          />
        </div>
      </header>

      <section
        className="flex justify-between bg-slate-700 py-4 px-8 mt-10 rounded-lg"
      >
        {/* TODO: Maquetar sección de detalle aquí */}
      </section>

      <pre>{JSON.stringify(invoice, null, 2)}</pre>
    </section>
  )
}

export default InvoiceDetailPage