import { useState } from "react"
import { TbChevronLeft } from "react-icons/tb"
import { Link } from "react-router-dom"
import BaseInput from "../components/shared/BaseInput"
import BaseSelect from "../components/shared/BaseSelect"
import BaseButton from "../components/shared/BaseButton"

const InvoicesNewPage = () => {
  const INITIAL_FORM_VALUE = {
    billFromStreetAddress: '',
    billFromCity: '',
    billFromPostCode: '',
    billFromCountry: '',
    billToClientName: '',
    billToClientEmail: '',
    billToClientStreetAddress: '',
    billToCity: '',
    billToPostCode: '',
    billToCountry: '',
    invoiceDate: '',
    paymentTerms: '',
    projectDescription: '',
    invoiceItems: []
  }

  const [form, setForm] = useState(INITIAL_FORM_VALUE)

  const paymentTermsOptions = [
    { value: '1', label: 'Next 60 Days' },
    { value: '2', label: 'Next 30 Days' },
    { value: '3', label: 'Next 15 Days' }
  ]

  const handleChange = (event) => {
    const { name, value } = event.target

    console.log(name, value)

    setForm({ ...form, [name]: value })
  }

  const generateCode = () => {
    return crypto.randomUUID().split('-').at(0).slice(0, 6)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del formulario

    const newCode = generateCode()

    const status = 'draft'

    const newInvoice = {
      "code": newCode,
      status,
      "bill": {
        "from": {
          "streetAddress": form.billFromStreetAddress,
          "city": form.billFromCity,
          "postCode": form.billFromPostCode,
          "country": form.billFromCountry
        },
        "to": {
          "client": {
            "name": form.billToClientName,
            "email": form.billToClientEmail
          },
          "streetAddress": form.billToClientStreetAddress,
          "city": form.billToCity,
          "postCode": form.billToPostCode,
          "country": form.billToCountry
        }
      },
      "invoice": {
        "date": form.invoiceDate,
        "paymentTerms": form.paymentTerms,
        "project": {
          "description": form.projectDescription
        },
        "grandTotal": 6000,
        "currency": {
          "symbol": "$"
        },
        "items": [
          {
            "name": "Nintendo Switch",
            "qty": 2,
            "price": 2500,
            "total": 5000
          },
          {
            "name": "Juego Crash Bandicoot",
            "qty": 5,
            "price": 200,
            "total": 1000
          }
        ]
      }
    }

    console.log('Enviando data...', newInvoice)

    
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

      <header
        className="pt-4 pb-8"
      >
        <h1 className="text-4xl font-extrabold">New Invoice</h1>
      </header>

      <pre>{JSON.stringify(form, null, 2)}</pre>

      <form onSubmit={handleSubmit}>
        <h4 className="text-violet-500 font-bold mb-5">Bill From</h4>

        <BaseInput
          label="Street Address"
          placeholder="Codigo 234 Av."
          name="billFromStreetAddress"
          onChange={handleChange}
          value={form.billFromStreetAddress}
        />

        <div className="flex justify-between gap-6">
          <BaseInput
            label="City"
            placeholder="Chiclayo"
            name="billFromCity"
            onChange={handleChange}
            value={form.billFromCity}
          />

          <BaseInput
            label="Post Code"
            placeholder="00000"
            name="billFromPostCode"
            onChange={handleChange}
            value={form.billFromPostCode}
          />

          <BaseInput
            label="Country"
            placeholder="Peru"
            name="billFromCountry"
            onChange={handleChange}
            value={form.billFromCountry}
          />
        </div>

        <h4 className="text-violet-500 font-bold mb-5">Bill To</h4>

        <BaseInput
          label="Client's Name"
          placeholder="Alyssa"
          name="billToClientName"
          onChange={handleChange}
          value={form.billToClientName}
        />

        <BaseInput
          label="Client's Email"
          placeholder="alyssa@mail.com"
          name="billToClientEmail"
          onChange={handleChange}
          value={form.billToClientEmail}
        />

        <BaseInput
          label="Street Address"
          placeholder="Codigo 234 Av."
          name="billToClientStreetAddress"
          onChange={handleChange}
          value={form.billToClientStreetAddress}
        />

        <div className="flex justify-between gap-6">
          <BaseInput
            label="City"
            placeholder="Chiclayo"
            name="billToCity"
            onChange={handleChange}
            value={form.billToCity}
          />

          <BaseInput
            label="Post Code"
            placeholder="00000"
            name="billToPostCode"
            onChange={handleChange}
            value={form.billToPostCode}
          />

          <BaseInput
            label="Country"
            placeholder="Peru"
            name="billToCountry"
            onChange={handleChange}
            value={form.billToCountry}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 items-center mt-10">
          <BaseInput
            type="date"
            label="Invoice Date"
            placeholder="YYYY-MM-DD"
            name="invoiceDate"
            onChange={handleChange}
            value={form.invoiceDate}
          />
          <BaseSelect
            label="Payment Terms"
            name="paymentTerms"
            options={paymentTermsOptions}
            onChange={handleChange}
            value={form.paymentTerms}
          />
        </div>

        <BaseInput
          label="Project Description"
          placeholder="Your project"
          name="projectDescription"
          onChange={handleChange}
          value={form.projectDescription}
        />

        {/* <ItemList items={items} */}

        <div className="flex justify-end gap-2 mt-10">
          <BaseButton
            label='Cancel'
            bgColor='bg-slate-500'
          />
          <BaseButton
            type="submit"
            label='Save Changes'
            bgColor='bg-violet-500'
          />
        </div>
      </form>
    </section>
  )
}

export default InvoicesNewPage