export const ReservaForm = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <div
        className="mx-auto  bg-violet-300"
        style={{ width: "100%", borderRadius: "5px", padding: "5%  3% 5% 3%" }}
      >
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Nombre"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Apellido"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="guest"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Numero de personas
            </label>
            <input
              type="number"
              name="guest"
              id="guest"
              placeholder="5"
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Fecha
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Hora
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};