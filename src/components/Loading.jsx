const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-50">
      {/* Logo o spinner */}
      <div className="relative">
        {/* Círculo exterior animado */}
        <div className="w-20 h-20 border-4 border-[#1a1a1a] rounded-full animate-spin border-t-[#e63946]" />

        {/* Punto central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse" />
        </div>
      </div>

      {/* Texto de carga */}
      <p className="mt-6 text-gray-400 text-sm tracking-widest uppercase animate-pulse">
        Cargando...
      </p>

      {/* Líneas decorativas estilo racing */}
      <div className="absolute bottom-20 left-0 w-32 h-1 bg-gradient-to-r from-[#e63946] to-transparent transform -rotate-12 opacity-40" />
      <div className="absolute bottom-24 left-0 w-24 h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent transform -rotate-6 opacity-30" />
      <div className="absolute top-20 right-0 w-32 h-1 bg-gradient-to-l from-[#e63946] to-transparent transform rotate-12 opacity-40" />
      <div className="absolute top-24 right-0 w-24 h-0.5 bg-gradient-to-l from-[#00d4ff] to-transparent transform rotate-6 opacity-30" />
    </div>
  );
};

export default Loading;
