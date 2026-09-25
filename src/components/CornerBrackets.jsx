const CornerBrackets = () => {
  return (
    <>
      <span className="fixed z-[60] top-6 left-6 w-7 h-7 border-t border-l border-teal-400/40 pointer-events-none" />

      <span className="fixed z-[60] top-6 right-6 w-7 h-7 border-t border-r border-teal-400/40 pointer-events-none" />

      <span className="fixed z-[60] bottom-6 left-6 w-7 h-7 border-b border-l border-teal-400/40 pointer-events-none" />

      <span className="fixed z-[60] bottom-6 right-6 w-7 h-7 border-b border-r border-teal-400/40 pointer-events-none" />
    </>
  )
}

export default CornerBrackets