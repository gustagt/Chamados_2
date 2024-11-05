export default function CardError() {
  return (
    <div className="flex gap-3 mb-8">
      <svg
        width="50"
        height="80"
        viewBox="0 0 29 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.2812 0H2.71875C1.21777 0 0 1.24777 0 2.78571V23.2143C0 24.7522 1.21777 26 2.71875 26H26.2812C27.7822 26 29 24.7522 29 23.2143V2.78571C29 1.24777 27.7822 0 26.2812 0ZM21.5461 16.8594C21.818 17.1379 21.818 17.5906 21.5461 17.8692L19.2521 20.2196C18.9803 20.4982 18.5385 20.4982 18.2666 20.2196L14.5 16.3254L10.7334 20.2196C10.4615 20.4982 10.0197 20.4982 9.74785 20.2196L7.45391 17.8692C7.18203 17.5906 7.18203 17.1379 7.45391 16.8594L11.2545 13L7.45391 9.14062C7.18203 8.86205 7.18203 8.40938 7.45391 8.1308L9.74785 5.78036C10.0197 5.50179 10.4615 5.50179 10.7334 5.78036L14.5 9.67455L18.2666 5.78036C18.5385 5.50179 18.9803 5.50179 19.2521 5.78036L21.5461 8.1308C21.818 8.40938 21.818 8.86205 21.5461 9.14062L17.7455 13L21.5461 16.8594Z"
          fill="#C60000"
        />
      </svg>
      <div className="flex flex-col text-[#747474] leading-tight gap-1">
        <span className="text-[#C60000] font-semibold text-xl">Falha ao realizar login</span>
        <p>Verificar se as informações de login estão corretas</p>
        <p>
          Para efetuar o login, utilizar o mesmo acesso usado para entrar na
          máquina
        </p>
      </div>{" "}
    </div>
  );
}

type CardErrorProps = {

};
