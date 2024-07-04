const AboutLayout = ({ children }) => {
  return (
    <section className="bg-red-100 p-4">
      <h1 className="text-center">Soy el layout de Profile</h1>
      {children}
    </section>
  )
}

export default AboutLayout