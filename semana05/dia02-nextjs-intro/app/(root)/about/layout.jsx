const AboutLayout = ({ children }) => {
  return (
    <section className="bg-green-100 p-4">
      <h1 className="text-center">Soy el layout de About Page</h1>
      {children}
    </section>
  )
}

export default AboutLayout