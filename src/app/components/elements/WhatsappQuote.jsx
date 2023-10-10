export default function Quote({ text, className, children }) {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=+529622874791&text=Hola, me gustaría cotizar ${text}`}
      target="_blank"
      className={`btn bg-primary ${className}`}
      role="button"
    >
      {children ? children : (
        <>
          <i className="fab fa-whatsapp"></i>
          Cotizar
        </>
      )}
    </a>

  )
}
